import React from 'react';
import ImgProduct from '../../images/navbar-ex-1.jpg';
import ImgIcon from '../../icons/dec-bar.png';
import ImgFigure from '../../images/portrait01.jpg';

function ProductDetailContent(props) {
    return (
        <div className="product-detail">
            {/* // <!-- Product desciption --> */}
            <div className="row pd-1 pd-shared">
                {/* <!-- 大張商品示意圖 --> */}
                <div className="col-12 col-md-6 order-1">
                    <div className="img-big">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                </div>
                {/* <!-- 商品詳細描述 --> */}
                <div className="col-12 col-md-6 order-3 order-md-2 p-0 m-0 row align-content-start align-content-xxl-start">
                    <div className="col-12 my-xxl-4 align-self-start ">
                        <h1 className="my-3 my-md-0 mb-lg-2  product-name">
                            Weeding 01
                        </h1>
                        <ul className="d-flex align-items-center pb-2 pb-md-1 ul-unstyle">
                            <li className="ps-0">
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <p className="reviews-text ms-2">20/ Reviews</p>
                            <div className="wish-list ms-auto d-md-none">
                                <i className="fas fa-heart"></i>
                            </div>
                        </ul>
                        <p className="mt-lg-2  detail-text">
                            因其細緻自然的色調而成為人像、時尚和婚禮攝影師的最愛。低對比度柔和的色調可以讓您營造出美麗而寧靜的美感。這款底片可以強調所有色調，最能帶出過飽和色澤的底片種類，尤其暖色系顏色更是能栩栩如生因此比起拍攝人物，更適用於風景攝影。
                        </p>
                    </div>
                    <div className="col-12 row p-0 m-0 align-items-center justify-content-between">
                        <div className="col-auto  mb-xl-2">
                            <div className="wish-list-2 mb-xl-1">
                                <i className="fas fa-heart"></i>
                            </div>
                            <p className="price my-1 mb-xxl-4">NT. 20</p>
                        </div>
                        <div className="col-auto col-xl-12">
                            <button className="add-cart">加入購物車</button>
                            {/* react bootstrap Modals 加入成功 */}
                        </div>
                    </div>
                </div>
                {/* <!-- 小張圖片可更換商品示意圖 --> */}
                <div className="col-12 col-md-6 order-2 order-md-3 row mt-3 img-list">
                    <div className="col p-1">
                        <div className="img-small">
                            <div className="ratios ">
                                <img src={ImgProduct} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col p-1">
                        <div className="img-small">
                            <div className="ratios ">
                                <img src={ImgProduct} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col p-1">
                        <div className="img-small">
                            <div className="ratios ">
                                <img src={ImgProduct} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col p-1">
                        <div className="img-small">
                            <div className="ratios ">
                                <img src={ImgProduct} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- 熱銷排行 md 以上評論 標題--> */}
            <div className="my-5 recommend pd-2 pd-shared">
                <div className="recommend-title">
                    <div className="text-box">
                        <div className="phone-title">
                            <h3 className="m-0">熱銷排行</h3>
                            <img className="d-md-none" src={ImgIcon} alt="" />
                            <p>暢銷色調值得您擁有 強化風格與色調</p>
                        </div>
                    </div>
                </div>
                <div className="recommend-card">
                    <div className="row my-4 mt-md-5 my-2 card-group ">
                        <div className="col-6 col-md-3">
                            <div className="card-border " data-tilt>
                                {/* <!-- data-tilt 特效 看是否保留 --> */}
                                <div className="card-img ">
                                    <div className="ratios">
                                        <img src={ImgProduct} alt="" />
                                    </div>
                                </div>
                                <div className="card-body text-start p-0 my-2 my-md-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="card-title">
                                            婚禮／Wedding-1
                                        </p>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <div className="text-start">NT 20</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="card-border ">
                                <div className="card-img ">
                                    <div className="ratios">
                                        <img src={ImgProduct} alt="" />
                                    </div>
                                </div>
                                <div className="card-body text-start p-0 my-2 my-md-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="card-title">
                                            婚禮／Wedding-1
                                        </p>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <div className="text-start">NT 20</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="card-border">
                                <div className="card-img ">
                                    <div className="ratios">
                                        <img src={ImgProduct} alt="" />
                                    </div>
                                </div>
                                <div className="card-body text-start p-0 my-2 my-md-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="card-title">
                                            婚禮／Wedding-1
                                        </p>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <div className="text-start">NT 20</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="card-border">
                                <div className="card-img ">
                                    <div className="ratios">
                                        <img src={ImgProduct} alt="" />
                                    </div>
                                </div>
                                <div className="card-body text-start p-0 my-2 my-md-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="card-title">
                                            婚禮／Wedding-1
                                        </p>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <div className="text-start">NT 20</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- xs,sm 評論細節 --> */}
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
                                <h3>Weeding 01</h3>
                                <ul className="d-flex justify-content-center align-items-center ul-unstyle">
                                    <li className="ps-0">
                                        <i className="fas fa-star"></i>
                                    </li>
                                    <li>
                                        <p className="m-0">4/5</p>
                                    </li>
                                    <li>
                                        <p className="ms-2 reviews-text text-dark">
                                            20 則評論
                                        </p>
                                    </li>
                                </ul>

                                <div className="col-auto align-self-center mt-3">
                                    <button className="add-review">
                                        撰寫評論
                                    </button>
                                    {/* <!-- 判斷是否登入->導向登入會員 --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- md 以上評論細節 --> */}
            <div className="d-none d-md-block pd-4 pd-shared">
                <div className="review-box row justify-content-between mt-3 ">
                    {/* <!-- <div className="img-small col-2">
        <div className="ratios ">
            <img src="../../images/navbar-ex-1.jpg" alt=""/>
        </div>
    </div> --> */}
                    <div className="col-auto">
                        <h3 className="mb-3 d-md-none">Weeding 01</h3>
                        <h3 className="m-0 text-center score ">4/5</h3>
                        <ul className="d-flex align-items-center justify-content-center pb-2 pb-md-1 mb-1 ul-unstyle">
                            <li className="ps-0">
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                        </ul>
                        <p className="text-center review-count"> 20 則評論</p>
                    </div>
                    <div className="col-auto align-self-center">
                        <button className="add-review">撰寫評論</button>
                        {/* <!-- 判斷是否登入->導向登入會員 --> */}
                    </div>
                </div>
            </div>

            {/* 所有上傳的照片slider => 套件 react-slick*/}
            <div className="py-4 my-4 pd-5 pd-shared">
                <p>已有 17 位顧客上傳照片</p>
                <div className="row review-img-slider mx-0">
                    <div className="col-3 col-md-2 col-lg ms-0">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="col-3 col-md-2 col-lg">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="col-3 col-md-2 col-lg">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="col-3 col-md-2 col-lg">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-2 col-lg">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-2 col-lg">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-lg">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-lg">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-lg pe-0">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 評論卡 */}
            <div className="pd-6 pd-shared">
                <div className="review-card">
                    <div className="d-flex ">
                        <div className="col-md-auto figure">
                            <img
                                src={ImgFigure}
                                alt=""
                                className="object-fit "
                            />
                        </div>
                        <div className="review-card-detail col">
                            <div className="d-flex justify-content-between justify-content-start align-items-start">
                                <p className="review-name me-3 p-0 mb-0">
                                    Name ABC
                                </p>
                                <p className="review-day align-self-center mb-0">
                                    3天前
                                </p>
                            </div>
                            <div>
                                <ul className="d-flex align-items-center ul-unstyle mb-3">
                                    <li className="ps-0">
                                        <i className="fas fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="review-card-text">
                                    因其細緻自然的色調而成為人像、時尚和婚禮攝影師的最愛。是低對比度柔和的色調，這款濾鏡可以讓我營造出美麗而寧靜的藝術照。運用全新的colorful網站效能，幾秒之內就能強調重點拍攝相片以及創作出有趣的作品，我們推出了許多色調包
                                    以及復古的效果，可在拍攝照片時使用，我們也很高興能
                                    與大家分享，輕鬆點一下就可以為照片增添新風格
                                </p>
                            </div>
                            <div className="row m-0 review-list-img ">
                                <div className="box">
                                    <img
                                        src={ImgProduct}
                                        alt=""
                                        className="object-fit"
                                    />
                                </div>

                                <div className="box">
                                    <img
                                        src={ImgProduct}
                                        alt=""
                                        className="object-fit"
                                    />
                                </div>

                                <div className="box ">
                                    <img
                                        src={ImgProduct}
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
                            <li>
                                <i className="fas fa-thumbs-up"></i>3
                            </li>
                            <li>
                                <i className="fas fa-thumbs-down"></i>0
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="review-card">
                    <div className="d-flex ">
                        <div className="col-md-auto figure">
                            <img
                                src={ImgFigure}
                                alt=""
                                className="object-fit "
                            />
                        </div>
                        <div className="review-card-detail col">
                            <div className="d-flex justify-content-between justify-content-start align-items-start">
                                <p className="review-name me-3 p-0 mb-0">
                                    Name ABC
                                </p>
                                <p className="review-day align-self-center mb-0">
                                    3天前
                                </p>
                            </div>
                            <div>
                                <ul className="d-flex align-items-center ul-unstyle mb-3">
                                    <li className="ps-0">
                                        <i className="fas fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="review-card-text">
                                    因其細緻自然的色調而成為人像、時尚和婚禮攝影師的最愛。是低對比度柔和的色調，這款濾鏡可以讓我營造出美麗而寧靜的藝術照。運用全新的colorful網站效能，幾秒之內就能強調重點拍攝相片以及創作出有趣的作品，我們推出了許多色調包
                                    以及復古的效果，可在拍攝照片時使用，我們也很高興能
                                    與大家分享，輕鬆點一下就可以為照片增添新風格
                                </p>
                            </div>
                            <div className="row m-0 review-list-img ">
                                <div className="box">
                                    <img
                                        src={ImgProduct}
                                        alt=""
                                        className="object-fit"
                                    />
                                </div>

                                <div className="box">
                                    <img
                                        src={ImgProduct}
                                        alt=""
                                        className="object-fit"
                                    />
                                </div>

                                <div className="box ">
                                    <img
                                        src={ImgProduct}
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
                            <li>
                                <i className="fas fa-thumbs-up"></i>3
                            </li>
                            <li>
                                <i className="fas fa-thumbs-down"></i>0
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <!-- Pagination --> */}
            <div className="container">
                <div className="pagination">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailContent;
