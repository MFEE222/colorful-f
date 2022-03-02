import React from 'react';
import { Link, useRouteMatch, useParams, useLocation } from 'react-router-dom';
import { routes } from '../../utils/routes';
import ProductImg from '../../images/product-img.jpeg';

function ReviewDetailContent(props) {
    const match = useRouteMatch();
    const location = useLocation();
    const { oneReview } = location.state;
    console.log('oneReview :>> ', oneReview);

    //TODO:顯示星星,更改星星評分（第一次評分）

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
                            className="r-text-title"
                            type="text"
                            id=""
                            name=""
                            // {!oneReview.title? placeholder="評論標題":oneReview.title}
                            placeholder={!oneReview.title && '評論標題'}
                            value={oneReview.title}
                            onChange={function () {}}
                        />
                        <textarea
                            className="r-text"
                            type="text"
                            id=""
                            name=""
                            // value=""
                            placeholder={
                                !oneReview.content && '告訴別人您有多喜歡此商品'
                            }
                            value={oneReview.content}
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
                        </div>
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
