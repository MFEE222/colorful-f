import React from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import { routes } from '../../utils/routes';
import ProductImg from '../../images/product-img.jpeg';

function ReviewDetailContent(props) {
    const match = useRouteMatch();
    //抓不到props
    const { detail } = props;
    console.log('props :>> ', props);

    return (
        <div className="col-12 member-review-detail">
            <div className="">
                {/* card */}
                {/* <h4>評論商品</h4> */}
                <div className=" review-card">
                    <form className="review-form" action="">
                        {/* <div className="row"> */}
                        <div className="col-12 col-md-5">
                            <h3 className=" my-md-0 mb-lg-2">123</h3>
                            {/* 帶替換商品名字 */}
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
                            </ul>
                        </div>
                        <label htmlFor=""></label>
                        <textarea
                            className="r-text"
                            type="text"
                            id=""
                            name=""
                            // value=""
                            placeholder="告訴別人您有多喜歡此商品"
                            onChange={function () {}}
                        />
                        {/* </div> */}
                        <div className="d-flex add-box">
                            <label
                                htmlFor="file-upload"
                                className="custom-file-upload "
                            >
                                上傳圖片
                            </label>
                            <input id="file-upload" type="file" />
                            {/* <input
                                type="file"
                                className="add-img add-box"
                                accept="image/jpeg,image/jpg,image/png"
                                multiple
                            /> */}
                            {/* <div className="ratio ratio-1x1 review-card-img">
                                <img src={ProductImg} alt="" />
                            </div> */}
                            {/* <p className="img-plus">+</p> */}
                        </div>

                        {/* <div className="col-2"></div> */}
                        <Link
                            className="btn submit float-end"
                            to={routes.review}
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
