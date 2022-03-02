import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch, useParams, useLocation } from 'react-router-dom';
import { routes } from '../../utils/routes';
import ProductImg from '../../images/product-img.jpeg';
import ClickStar from './ClickStar';
import ShowStar from '../Product/ShowStar';

function ReviewDetailContent(props) {
    const match = useRouteMatch();
    const location = useLocation();
    const { oneReview } = location.state;

    //狀態
    const [starCurrent, setStarCurrent] = useState(0); //星星評分
    const [reviewtTitle, setTitle] = useState(oneReview.title);
    const [reviewContent, setCotent] = useState(oneReview.content);
    console.log('oneReview :>> ', oneReview);

    //彙整全部的更新一起發api

    //TODO:顯示星星,更改星星評分（第一次評分）
    useEffect(() => {
        console.log('reviewtTitle :>> ', reviewtTitle);
        console.log('reviewContent :>> ', reviewContent);
    }, [reviewtTitle, reviewContent]);

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
                            // {!oneReview.title? placeholder="評論標題":oneReview.title}
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
                            // value=""
                            placeholder={
                                !oneReview.content && '告訴別人您有多喜歡此商品'
                            }
                            value={reviewContent}
                            onChange={function (e) {
                                setCotent(e.target.value);
                            }}
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
