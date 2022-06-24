// 內建
import React, { useEffect, useState } from 'react';

// 第三方
import { Modal, Button } from 'react-bootstrap';
import Slider from 'react-slick';

// 共用
import { IMG_URL2 } from '../../utils/config';
// import { useAuthContext } from '../../context/AuthContext';
import { useAuthContext } from '../../context/AuthContext';

// 圖片
import ImgIcon from '../../icons/dec-bar.png';

// 自己
// import ReviewThumbUp from './ReviewThumbUp';
import ShowStar from './ShowStar';
import ReviewSlider from './ReviewSlider';

function ReviewDetail(props) {
    const auth = useAuthContext();

    //鉤子
    const [modalShow, setModalShow] = useState(false);
    const [showImg, setShowImg] = useState([]);
    const { reviews, product } = props;
    if (product.stars.endsWith('0')) {
        const starScore = product.stars.split('.');
        console.log('starScore[0] :>> ', starScore[0]);
        product.stars = starScore[0];
    }

    const counts = reviews.length; //評論數
    const all = reviews.map((v) => {
        return v.photos;
    });
    const allImg = all.flat();

    //設定slider
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    //彈跳視窗
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                // size="sm"
                dialogClassName="modal-70w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ReviewSlider
                    // imgArray={} 照片數組
                    // img={allImg}
                    img={props.imgs}
                ></ReviewSlider>
            </Modal>
        );
    }

    function handleModalShow(show, imgs) {
        setModalShow(show);
        setShowImg(imgs);
    }

    return (
        <>
            <div className="product-detail ">
                <div className="pt-md-3 pd-3 pd-shared">
                    <div className="review-title">
                        <div className="text-box">
                            <div className="phone-title p-0">
                                <h3 className="text-center d-md-none">評論</h3>
                                <p className="m-0 e-title text-center">
                                    CUSTOMER REVIEWS
                                </p>
                                <div>
                                    <img
                                        className="d-md-none"
                                        src={ImgIcon}
                                        alt=""
                                    />
                                </div>

                                <div className="d-md-none">
                                    <h3> {reviews.name}</h3>
                                    <ul className="d-flex justify-content-center align-items-center ul-unstyle">
                                        <li className="ps-0">
                                            <i className="far fa-star active"></i>
                                        </li>
                                        <li>
                                            <p className="m-0">
                                                {product.stars}/5
                                            </p>
                                        </li>
                                        <li>
                                            <p className="ms-2 reviews-text text-dark">
                                                {counts}則評論
                                            </p>
                                        </li>
                                    </ul>

                                    <div className="col-auto align-self-center mt-3">
                                        <button
                                            className="add-review"
                                            // onClick={() => {
                                            //     if (!auth.current) {
                                            //         auth.setShowLoginModal(
                                            //             true
                                            //         );
                                            //     }
                                            // }}
                                        >
                                            撰寫評論
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-block pd-4 pd-shared">
                    <div className="review-box row justify-content-between mt-3 ">
                        <div className="col-auto">
                            <h3 className="mb-3 d-md-none">{reviews.name}</h3>
                            <h3 className="m-0 text-center score ">
                                {product.stars}/5
                            </h3>
                            <ul className="d-flex align-items-center justify-content-center pb-2 pb-md-1 mb-1 ul-unstyle">
                                <ShowStar>{product.stars}</ShowStar>
                            </ul>
                            <p className="text-center review-count">
                                {counts} 則評論
                            </p>
                        </div>
                        <div className="col-auto align-self-center">
                            <button
                                className="add-review"
                                // onClick={() => {
                                //     if (!auth.current) {
                                //         auth.setShowLoginModal(true);
                                //     }
                                // }}
                            >
                                撰寫評論
                            </button>
                        </div>
                    </div>
                </div>

                <div className="py-4 my-4 pd-5 pd-shared">
                    <p>已有{counts}位顧客上傳照片</p>
                    <div className="row flex-nowrap review-img-slider mx-0">
                        <Slider {...settings}>
                            {allImg.map((v, i, arr) => {
                                return (
                                    <div
                                        key={i}
                                        className=" ratio ratio-1x1 solve-padding"
                                        onClick={() => {
                                            handleModalShow(true, arr);
                                        }}
                                    >
                                        <img src={v} alt="" />
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
                {/* 評論卡 */}
                <div className="pd-6 pd-shared">
                    {reviews.map((v) => {
                        // console.log(`${IMG_URL2}/${v.figure}`);
                        return (
                            <>
                                <div className="review-card" key={v.id}>
                                    <div className="d-flex ">
                                        <div className="col-md-auto figure">
                                            <img
                                                src={`${IMG_URL2}/${v.figure}/${v.user_id}.jpg`}
                                                alt=""
                                                className="object-fit "
                                            />
                                        </div>
                                        <div className="review-card-detail col">
                                            <div className="d-flex justify-content-between justify-content-start align-items-start">
                                                <p className="review-name me-3 p-0 mb-0">
                                                    {v.name}
                                                </p>
                                            </div>
                                            <div>
                                                <ul className="d-flex align-items-center ul-unstyle mb-3">
                                                    <ShowStar>
                                                        {v.stars}
                                                    </ShowStar>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="review-card-text">
                                                    {v.content}
                                                </p>
                                            </div>

                                            <div className="row m-0 review-list-img ">
                                                <div className="box">
                                                    <div className=" d-flex flex-nowrap ">
                                                        {/* map 照片數組｀ */}
                                                        {v.photos.map(
                                                            (a, i, arr) => {
                                                                return (
                                                                    <img
                                                                        key={i}
                                                                        src={a}
                                                                        alt=""
                                                                        className="object-fit me-3"
                                                                        onClick={() => {
                                                                            handleModalShow(
                                                                                true,
                                                                                arr
                                                                            );
                                                                        }}
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="thumbs-list">
                                                <ul className="">
                                                    <li>這則評論有幫助嗎？</li>
                                                    {/* <ReviewThumbUp> */}
                                                    {/* {v.likes} */}
                                                    {/* </ReviewThumbUp> */}
                                                    <li>
                                                        {/* 按過顯示fas */}
                                                        <i className="fas fa-thumbs-up"></i>
                                                        {/* <i className="far fa-thumbs-up "></i> */}
                                                        {v.likes}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* //TODO:按讚小功能 */}
                                </div>
                            </>
                        );
                    })}
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => {
                            handleModalShow(false, showImg);
                        }}
                        imgs={showImg}
                    />
                </div>
            </div>
        </>
    );
    // }
}
export default ReviewDetail;

//TODO:撰寫評論先判斷是否登入(react.semantic-ui=>Multiple Modals)
