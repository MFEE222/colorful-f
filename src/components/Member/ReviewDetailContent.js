import React, { useEffect, useState, useRef } from 'react';
import { Link, useRouteMatch, useParams, useLocation } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { Modal, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import ClickStar from './ClickStar';
import ShowStar from '../Product/ShowStar';
import MemberSlider from './MemberSlider';
import axios from 'axios';

function ReviewDetailContent(props) {
    const match = useRouteMatch();
    const location = useLocation();
    const { oneReview } = location.state;

    //狀態
    const [modalShow, setModalShow] = useState(false);
    const [starCurrent, setStarCurrent] = useState(0); //星星評分
    const [reviewtTitle, setTitle] = useState(oneReview.title);
    const [reviewContent, setCotent] = useState(oneReview.content);
    // console.log('oneReview :>> ', oneReview);
    // const [imgSrc, setImgSrc] = useState('');
    const [imgs, setImgs] = useState([]);
    const collect = useRef([]); //接收照片
    //圖片
    const [fileSrc, setFileSrc] = useState(null);
    const handleUploadFile = (e) => {
        const reader = new FileReader();
        for (let i = 0; i < e.target.files.length; i++) {
            console.log('here');
            const total = e.target.files.length;
            const reader = new FileReader();
            console.log('reader :>> ', e.target.files[i].name);
            reader.readAsDataURL(e.target.files[i]);
            reader.addEventListener('load', function () {
                collect.current.push({
                    resource: reader.result,
                    name: e.target.files[i].name,
                });
                const newImgs = [...collect.current]; //接收照片在設定給state
                setImgs(newImgs);
            });
        }
       
    };
    const handleSubmit=async()=>{
const response = await axios.post(API_GET_MEMBER_REVIEW_UPDATE, {
    params: {
    id:oneReview.id,
    imgs
   
}
})
    }

    //彙整全部的更新一起發api

    //TODO:顯示星星,更改星星評分（第一次評分）
    useEffect(() => {
        // console.log('reviewtTitle :>> ', reviewtTitle);
        // console.log('reviewContent :>> ', reviewContent);
    }, [reviewtTitle, reviewContent, imgs]);

    return (
        <div className="col-12 member-review-detail">
            <div className="">
                {/* card */}
                {/* <h4>評論商品</h4> */}
                <div className=" review-card">
                    <form className="review-form" action="">
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
                            placeholder={!oneReview.title && '評論標題'}
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
                                !oneReview.content && '告訴別人您有多喜歡此商品'
                            }
                            value={reviewContent}
                            onChange={function (e) {
                                setCotent(e.target.value);
                            }}
                        />
                        <div className="row flex-nowrap add-box m-0 overflow-scroll">
                            <label
                                htmlFor="file-upload"
                                className="custom-file-upload me-4"
                            >
                                上傳圖片
                            </label>
                            <input
                                className=""
                                id="file-upload"
                                type="file"
                                onChange={handleUploadFile}
                                multiple
                            />
                            {imgs.map(function (e, j) {
                                return (
                                    <div
                                        className="upload-box p-0 me-2 "
                                        onClick={() => setModalShow(true)}
                                    >
                                        <div
                                            className="delete-btn"
                                            onClick={function () {
                                                const name = e.name;
                                                const newImgs = imgs.filter(
                                                    (img) => img.name != name
                                                );
                                                setImgs(newImgs);
                                            }}
                                        >
                                            <i className="fas fa-times "></i>
                                        </div>
                                        <div className=" ratio ratio-1x1">
                                            <img key={j} src={e.resource} />{' '}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <Link
                            className="btn submit float-end mt-3"
                            to={routes.review}
                            onClick={}
                        >
                            <span>完成</span>
                        </Link>
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
