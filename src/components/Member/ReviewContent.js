import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import ImgProduct from '../../images/product-img.jpeg';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import { routes } from '../../utils/routes';
import axios from 'axios';
import { API_GET_MEMBER_REVIEW, IMG_URL2 } from '../../utils/config';
import Pagination from './Pagination';

// 先檢查 url 是否跟 productDetail.id 一致

// url : /product/detail/3
// 點擊卡片進來 (卡片本身就有商品資料) setProductDetail

// 直接 url (第一個先去 produtcs, 第二個再去發 axios)

// axios request id = 3

function ReviewContent(props) {
    //TODO: 登入狀態
    let uid = 1; //改成auth.current

    const match = useRouteMatch();
    const [statusId, setStatusId] = useState(1);
    const [display, setDisplay] = useState([]);
    const [counts, setCounts] = useState();
    const [offset, setOffset] = useState(1);
    const fetchReview = async () => {
        const response = await axios.get(API_GET_MEMBER_REVIEW, {
            params: {
                uid,
                statusId, //e=1（發布,草稿）,2（草稿）,3（發布）
                limit: 4,
                offset,
            },
        });
        setDisplay(response.data.data);
        setCounts(response.data.rows);
    };

    //掛載
    useEffect(() => {
        fetchReview(); // 下載評論資料
        // console.log('counts :>> ', counts);
    }, []);

    //更新
    useEffect(() => {
        fetchReview();
        // console.log('status :>> ', statusId);
    }, [statusId, uid, offset]);

    //TODO: 拿到訂單
    //TODO: 根據評論狀態去拿對應資料
    return (
        <>
            <div className=" member-comment">
                {/* <div className="container"> */}
                {/* filterbar */}
                <div className="filter my-3">
                    <div className="filter-box d-flex">
                        <ul className="sort-series p-0">
                            <li
                                className="active py-2 px-3"
                                onClick={function () {
                                    setStatusId(1);
                                    setOffset(1);
                                    // console.log('1 :>> ', statusId);
                                }}
                            >
                                全部
                            </li>
                            <li
                                className="py-2 px-3 "
                                onClick={function () {
                                    setStatusId(2);
                                    setOffset(1);
                                    // console.log('2 :>> ', statusId);
                                }}
                            >
                                未評論
                            </li>
                            <li
                                className="py-2 px-3"
                                onClick={function () {
                                    setStatusId(3);
                                    setOffset(1);
                                    // console.log('3 :>> ', statusId);
                                }}
                            >
                                已評論
                            </li>
                        </ul>
                    </div>
                    <div className="line d-none d-md-block"></div>
                </div>
                {/* card */}
                {/* <div className="row"> */}
                {display.map((oneReview) => {
                    const goTo = `${routes.reviewDetail}/${oneReview.id}`;
                    const img = `${IMG_URL2}/${oneReview.products_img}/a1.jpg`;
                    return (
                        <div className="d-flex review-card" key={oneReview.id}>
                            <div className="col-auto  col-md-10 review-card-img me-4">
                                <div className="ratios">
                                    <img src={oneReview.products_img} alt="" />
                                </div>
                            </div>
                            <div className="col row ps-0 align-items-center align-content-center">
                                <h4 className="col-10 col-md-8  align-self-center m-0">
                                    {oneReview.name}
                                </h4>
                                <h5 className="title mt-3 mt-md-0">
                                    {oneReview.title}
                                </h5>
                                {/* <p className="col-4 col-md-4 review-card-text ">
                            2件商品
                        </p> */}
                                <p className="col-md-12 me-auto d-none d-md-block content">
                                    {oneReview.content == null
                                        ? '尚未評論'
                                        : oneReview.content}
                                </p>
                                <p className="d-md-none ">
                                    {!oneReview.content && '尚未評論'}
                                </p>
                            </div>
                            <LinkContainer
                                className="btn me-2 align-self-end"
                                to={{
                                    pathname: goTo,
                                    state: { oneReview },
                                }}
                            >
                                <span>編輯</span>
                            </LinkContainer>
                        </div>
                    );
                })}
                {/* </div> */}
                {/* </div> */}
            </div>
            <Pagination
                total={counts}
                limit={4}
                offset={offset}
                setOffset={setOffset}
            />
        </>
    );
}

export default ReviewContent;
