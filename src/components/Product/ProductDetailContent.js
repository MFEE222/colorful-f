import React from 'react';
import ImgProduct from '../../images/navbar-ex-1.jpg';
import ImgIcon from '../../icons/dec-bar.png';
import ImgFigure from '../../images/portrait01.jpg';

function ProductDetailContent(props) {
    return (
        <>
            {/* // <!-- Product desciption --> */}
            <div className="detail-box row">
                {/* <!-- 大張商品示意圖 --> */}
                <div className="img-box col-12 col-md-6 order-1">
                    <div className="img-big">
                        <div className="ratios ">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                </div>
                {/* <!-- 商品詳細描述 --> */}
                <div className="col-12 col-md-6 order-3 order-md-2 p-0 m-0 row align-content-start align-content-xxl-start text-box">
                    <div className="col-12 my-xxl-4 align-self-start ">
                        <h1 className="my-3 my-md-0 mb-lg-2  product-name">
                            Weeding 01
                        </h1>
                        <ul className="d-flex align-items-center pb-2 pb-md-1">
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
            <div className="my-5 recommend">
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
                    <div className="card-group row my-4 mt-md-5 my-2">
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
            <div className="pt-md-3 review">
                <div className="review-title">
                    <div className="text-box">
                        <div className="phone-title p-0">
                            <h3 className=" text-center d-md-none">評論</h3>
                            <p className="m-0 e-title text-center top-border">
                                CUSTOMER REVIEWS
                            </p>
                            <img className="d-md-none" src={ImgIcon} alt="" />

                            <div className="d-md-none">
                                <h3>Weeding 01</h3>
                                <ul className="d-flex justify-content-center align-items-center ">
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
            <div className="d-none d-md-block">
                <div className="review-box row justify-content-between mt-3 ">
                    {/* <!-- <div className="img-small col-2">
        <div className="ratios ">
            <img src="../../images/navbar-ex-1.jpg" alt=""/>
        </div>
    </div> --> */}
                    <div className="col-auto">
                        <h3 className="mb-3 d-md-none">Weeding 01</h3>
                        <h3 className="m-0 text-center score ">4/5</h3>
                        <ul className="d-flex align-items-center justify-content-center pb-2 pb-md-1 mb-1">
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
            <div className="py-4 my-4 border-top-bottom">
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
            <div className="review-card">
                <div className="d-flex">
                    <div className="col-auto  figure">
                        <img src={ImgFigure} alt="" />
                    </div>
                    <div className="review-card-detail col-auto ">
                        <div className="row">
                            <p className="review-name">Name ABC</p>
                            <p>3天前</p>
                        </div>
                        <div>
                            <ul className="d-flex align-items-center ">
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
                            <p className="detail-text">
                                因其細緻自然的色調而成為人像、時尚和婚禮攝影師的最愛。是低對比度柔和的色調，這款濾鏡可以讓我營造出美麗而寧靜的藝術照。運用全新的colorful網站效能，幾秒之內就能強調重點拍攝相片以及創作出有趣的作品，我們推出了許多色調包
                                以及復古的效果，可在拍攝照片時使用，我們也很高興能
                                與大家分享，輕鬆點一下就可以為照片增添新風格
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-auto">
                                <div className="ratios">
                                    <img src={ImgProduct} alt="" />
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="ratios">
                                    <img src={ImgProduct} alt="" />
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="ratios">
                                    <img src={ImgProduct} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetailContent;
