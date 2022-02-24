// 內建
import React, { useEffect, useState } from 'react';

// 第三方
import axios from 'axios';

// 共用
import { API_URL, IMG_URL } from '../../utils/config';

// 圖片
import DemoImgFigure from '../../images/portrait01.jpg';
import DemoImgProduct from '../../images/navbar-ex-1.jpg';

// 自己
import ReviewThumbUp from './ReviewThumbUp';
import ShowStar from './ShowStar';

function ReviewDetail(props) {
    // console.log('props :>> ', props);
    const pid = props.children;
    // console.log('pid :>> ', pid);
    const api = `${API_URL}/product/detail/${pid}`;
    const [datas, setDatas] = useState([]); //評論
    const fetchReview = async () => {
        //原始資料
        const response = await axios.get(api);
        const reviewData = response.data.reviewDetail;
        setDatas(reviewData);
        console.log('reviewData :>> ', reviewData);
    };

    const counts = datas.length; //評論數
    //掛載
    useEffect(() => {
        fetchReview();
    }, []);

    // 更新
    useEffect(() => {
        // console.log(12345);
    }, [pid]);

    return (
        <>
            {/* 所有上傳的照片slider => 套件 react-slick*/}
            {/* 輪播照片換資料庫 */}
            <div className="py-4 my-4 pd-5 pd-shared">
                <p>已有{counts}位顧客上傳照片</p>
                <div className="row review-img-slider mx-0">
                    <div className="col-3 col-md-2 col-lg ms-0">
                        <div className="ratios">
                            <img src={DemoImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="col-3 col-md-2 col-lg">
                        <div className="ratios">
                            <img src={DemoImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="col-3 col-md-2 col-lg">
                        <div className="ratios">
                            <img src={DemoImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="col-3 col-md-2 col-lg">
                        <div className="ratios">
                            <img src={DemoImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-2 col-lg">
                        <div className="ratios">
                            <img src={DemoImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-2 col-lg">
                        <div className="ratios">
                            <img src={DemoImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-lg">
                        <div className="ratios">
                            <img src={DemoImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-lg">
                        <div className="ratios">
                            <img src={DemoImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-lg pe-0">
                        <div className="ratios">
                            <img src={DemoImgProduct} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 評論卡 */}

            <div className="pd-6 pd-shared">
                {datas.map((data) => {
                    return (
                        <>
                            <div className="review-card" key={data.r_id}>
                                <div className="d-flex ">
                                    <div className="col-md-auto figure">
                                        <img
                                            // 換成資料庫圖片
                                            src={DemoImgFigure}
                                            alt=""
                                            className="object-fit "
                                        />
                                    </div>
                                    <div className="review-card-detail col">
                                        <div className="d-flex justify-content-between justify-content-start align-items-start">
                                            <p className="review-name me-3 p-0 mb-0">
                                                {data.u_name}
                                            </p>
                                            <p className="review-day align-self-center mb-0">
                                                {data.r_created_at}
                                            </p>
                                        </div>
                                        <div>
                                            <ul className="d-flex align-items-center ul-unstyle mb-3">
                                                <ShowStar>
                                                    {data.r_stars}
                                                </ShowStar>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="review-card-text">
                                                {data.r_content}
                                            </p>
                                        </div>
                                        <div className="row m-0 review-list-img ">
                                            <div className="box">
                                                <img
                                                    src={DemoImgProduct}
                                                    alt=""
                                                    className="object-fit"
                                                />
                                            </div>

                                            <div className="box">
                                                <img
                                                    src={DemoImgProduct}
                                                    alt=""
                                                    className="object-fit"
                                                />
                                            </div>

                                            <div className="box ">
                                                <img
                                                    src={DemoImgProduct}
                                                    alt=""
                                                    className="object-fit"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbs-list">
                                    <ul className="">
                                        <li>這則評論有幫助嗎？</li>

                                        <ReviewThumbUp>
                                            {data.r_likes}
                                        </ReviewThumbUp>
                                        {/* <li onClick={isLike()}> */}
                                        {/* 按過顯示fas */}
                                        {/* <i className="fas fa-thumbs-up"></i>
                                            <i className="far fa-thumbs-up "></i>
                                            {data.likes}
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}
export default ReviewDetail;
