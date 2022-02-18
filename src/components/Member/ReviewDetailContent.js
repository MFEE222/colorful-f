import React from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import { routes } from '../../utils/routes';
import ProductImg from '../../images/product-img.jpeg';

function ReviewDetailContent(props) {
    const match = useRouteMatch();

    return (
        <div className="col-12 col-md-10 member-review-detail">
            <div className="container">
                {/* card */}
                <h4>評論商品</h4>
                <div className="row review-card">
                    <form className="review-form" action="">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <h1 className="my-3 my-md-0 mb-lg-2">
                                    Food 01
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
                                </ul>
                            </div>
                            <div className="col-3 col-md-2 review-card-img">
                                <img src={ProductImg} alt="" />
                            </div>
                            <div className="col-3 col-md-2 review-card-img">
                                <img src={ProductImg} alt="" />
                            </div>
                            <div className="col-2">
                                <p className="img-plus align-items-center">+</p>
                            </div>
                            <label htmlFor="">
                                
                            </label>
                            <input
                                className="r-text"
                                type="text"
                                id=""
                                name=""
                                value=""
                                placeholder="告訴別人您有多喜歡此商品"
                            />
                            <Link
                                className="btn ms-auto d-block submit"
                                to={routes.member + routes.review}
                            >
                                <span>完成</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ReviewDetailContent;
