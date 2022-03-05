import React, { useEffect, useState, useRef } from 'react';
import {
    Link,
    useRouteMatch,
    useParams,
    useLocation,
    useHistory,
    Router,
} from 'react-router-dom';
import { routes } from '../../utils/routes';
import { LinkContainer } from 'react-router-bootstrap';
import { Modal, Button } from 'react-bootstrap';
// import Slider from 'react-slick';
import ClickStar from './ClickStar';
import ShowStar from '../Product/ShowStar';
// import MemberSlider from './MemberSlider';
import axios from 'axios';
import {
    IMG_URL_UPLOAD,
    API_GET_MEMBER_REVIEW_IMG,
    API_GET_MEMBER_REVIEW_UPDATE,
    API_GET_MEMBER_REVIEW_UPDATE_DETAIL,
} from '../../utils/config';
import { set } from 'immutable';

function ReviewDetailContent(props) {
    const match = useRouteMatch();
    const location = useLocation();
    const { oneReview } = location.state;
    const formRef = useRef();
    // console.log('oneReview.img :>> ', oneReview.reviews_img);
    //狀態
    const [modalShow, setModalShow] = useState(false);
    const [starCurrent, setStarCurrent] = useState(0); //星星評分
    const [reviewtTitle, setTitle] = useState(oneReview.title); //標題
    const [reviewContent, setCotent] = useState(oneReview.content); //內文
    const [imgs, setImgs] = useState([]); //照片顯示
    const [files, setFiles] = useState([]); //照片傳給後端
    const collect = useRef([]); //接收照片
    const filesCollect = useRef([]); //接收照片
    const [message, setMessage] = useState(false); //編輯成功顯示
    const [oldImg, setOldImg] = useState([]);
    const hi = useHistory();
    // console.log('hi :>> ', hi);

    let history = useHistory();
    function handleClick() {
        history.push('/member/review');
    }

    //函式 拿照片
    const featchImg = async () => {
        const response = await axios.get(
            `${API_GET_MEMBER_REVIEW_IMG}/${oneReview.id}`
        );
        // console.log('response.data :>> ', response.data);
        // console.log('response.data.data :>> ', response.data.data[0]);
        let arr = [];
        for (let i = 0; i < response.data.imgCount.length; i++) {
            let result = `${IMG_URL_UPLOAD}/${response.data.data[0].img}/${response.data.imgCount[i]}`;
            arr.push(result);
        }
        // console.log('oneReview.reviews_img :>> ', oneReview.reviews_img);
        setOldImg(arr);
    };

    //掛載
    useEffect(() => {
        featchImg();
    }, []);

    //把圖片顯示出來（建立在狀態）
    const handleUploadFile = (e) => {
        // console.log('here');
        // ============================
        const reader = new FileReader();
        for (let i = 0; i < e.target.files.length; i++) {
            // console.log('here');
            const total = e.target.files.length;
            const reader = new FileReader();
            // console.log('reader :>> ', e.target.files[i].name);
            reader.readAsDataURL(e.target.files[i]);
            // console.log('e.target.files[i] :>> ', e.target.files[i]);
            reader.addEventListener('load', function () {
                collect.current.push({
                    resource: reader.result,
                    name: e.target.files[i].name,
                });
                filesCollect.current.push(e.target.files[i]);
                const newImgs = [...collect.current]; //接收照片在設定給state
                const newFiles = [...filesCollect.current];
                setImgs(newImgs);
                setFiles(newFiles);
            });
        }
    };
    async function handleSubmit(e) {
        e.preventDefault(); //阻止預設
        // files
        let formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('photos', files[i]);
        }
        const response = await axios.post(
            API_GET_MEMBER_REVIEW_UPDATE + `?rid=${oneReview.id}`,
            formData
        );
        let stars = 0;
        if (!starCurrent) stars = oneReview.stars;
        else stars = starCurrent;
        const responseDetail = await axios.post(
            API_GET_MEMBER_REVIEW_UPDATE_DETAIL,
            {
                rid: oneReview.id,
                stars,
                title: reviewtTitle,
                content: reviewContent,
            }
        );
        // console.log('response.data :>> ', responseDetail.data);
        setImgs([]);
        featchImg();
        formRef.current.reset();
        // handleClick();
    }

    //TODO:顯示星星,更改星星評分（第一次評分）
    useEffect(() => {}, [reviewtTitle, reviewContent, imgs, oldImg]);
    //imgs, files, oldImg

    // 刪圖片
    function handleRemoveImg(name) {
        const newImgs = imgs.filter((img) => {
            return img.name != name;
        });
        const newFiles = files.filter((file) => {
            return file.name != name;
        });
        setImgs(newImgs);
        setFiles(newFiles);
    }

    return (
        <div className="col-12 member-review-detail">
            <div className="">
                {/* card */}
                {/* <h4>評論商品</h4> */}
                <div className=" review-card">
                    <form className="review-form" action="post" ref={formRef}>
                        {/* <div className="row"> */}
                        <div className="col-12 col-md-8">
                            <h3 className="my-md-0 mb-lg-2">
                                {oneReview.name}
                            </h3>
                            {/* 帶替換商品名字 */}
                            <ul className="d-flex align-items-center pb-2 pb-md-3 ul-unstyle">
                                {oneReview.stars ? (
                                    <ShowStar>{oneReview.stars}</ShowStar>
                                ) : (
                                    <ClickStar
                                        starCurrent={starCurrent}
                                        setStarCurrent={setStarCurrent}
                                    />
                                )}
                            </ul>
                        </div>
                        {/* <label htmlFor=""></label> */}
                        <textarea
                            className="r-text-title"
                            type="text"
                            id=""
                            name="review-title"
                            placeholder={!oneReview.title ? '評論標題' : ''}
                            value={reviewtTitle}
                            onChange={function (e) {
                                setTitle(e.target.value);
                            }}
                        />
                        <textarea
                            className="r-text"
                            type="text"
                            id=""
                            name="review-content"
                            placeholder={
                                !oneReview.content
                                    ? '告訴別人您有多喜歡此商品'
                                    : ''
                            }
                            value={reviewContent}
                            onChange={function (e) {
                                setCotent(e.target.value);
                            }}
                        />
                        {/* 顯示原有照片 */}
                        <div className="d-flex add-box m-0 overflow-scroll">
                            {oldImg.map(function (img, i) {
                                // console.log('oldImg :>> ', oldImg);
                                return (
                                    <div
                                        key={i}
                                        // onClick={() => setModalShow(true)}
                                    >
                                        <div className="upload-box mb-4 me-3">
                                            <div className=" ratio ratio-1x1">
                                                <img key={i} src={img} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* input上傳 */}
                        <div className="row flex-nowrap add-box m-0 overflow-scroll">
                            <label
                                htmlFor="photos"
                                className="custom-file-upload me-4"
                            >
                                上傳圖片
                            </label>
                            <input
                                name="photos"
                                id="photos"
                                type="file"
                                onChange={handleUploadFile}
                                multiple
                            />
                            {/* imgs 是圖(ArrayBuffer) */}
                            {imgs.map(function (img, i) {
                                // console.log('img.name :>> ', img.name);
                                return (
                                    <div
                                        key={i}
                                        className="upload-box p-0 me-2 "
                                        // onClick={() => setModalShow(true)}
                                    >
                                        <div
                                            className="delete-btn"
                                            onClick={() => {
                                                const current = img.name;
                                                handleRemoveImg(current);
                                            }}
                                        >
                                            <i className="fas fa-times "></i>
                                        </div>
                                        <div className=" ratio ratio-1x1">
                                            {/* 即時顯示圖片 */}
                                            <img key={i} src={img.resource} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <span
                            className="btn submit float-end mt-3"
                            onClick={handleSubmit}
                        >
                            完成
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ReviewDetailContent;
//TODO:彈跳視窗
// var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     autoplay: true,
//     speed: 2500,
//     autoplaySpeed: 2500,
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 5,
//                 slidesToScroll: 2,
//             },
//         },
//         {
//             breakpoint: 576,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 2,
//             },
//         },
//     ],
// };

{
    /* <Slider {...settings}>
                                <div
                                    className="ratio ratio-1x1 solve-padding"
                                    onClick={() => setModalShow(true)}
                                >
                                    {imgs.map(function (e, j) {
                                        return <img key={j} src={e} />;
                                    })}
                                </div>
                            </Slider> */
}
// function MyVerticallyCenteredModal(props) {
//     return (
//         <Modal
//             {...props}
//             modalShow={modalShow}
//             // size="sm"
//             dialogClassName="modal-70w"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <MemberSlider
//                 // imgArray={} 照片數組
//                 imgs={imgs}
//             ></MemberSlider>
//         </Modal>
//     );
// }
