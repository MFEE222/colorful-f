import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { routes } from '../../utils/routes';
import axios from 'axios';
import { reverse } from 'named-urls';
//
// import Pagination from './Pagination';
import { API_GET_MEMBER_REVIEW, IMG_URL2 } from '../../utils/config';
//
import Pagination from '../../utils/Pagination';
import { useAuthContext } from '../../context/AuthContext';

function ReviewContent(props) {
    const auth = useAuthContext();
    // console.log('auth.user :>> ', auth.user);
    const user = auth.user;

    const [active, setActive] = useState(1); //style active
    const [statusId, setStatusId] = useState(1);
    const [display, setDisplay] = useState([]);
    const [counts, setCounts] = useState();
    const [offset, setOffset] = useState(1);
    const fetchReview = async () => {
        const response = await axios.get(API_GET_MEMBER_REVIEW, {
            params: {
                uid: user.id,
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
    }, [statusId, user.id, offset]);
    return (
        <>
            <div className="member-comment">
                {/* filterbar */}
                <div className="filter my-3">
                    <div className="filter-box d-flex">
                        <ul className="sort-series p-0">
                            <li
                                onClick={function () {
                                    setActive(1);
                                    setStatusId(1);
                                    setOffset(1);
                                    // console.log('1 :>> ', statusId);
                                }}
                                className={
                                    active === 1
                                        ? 'py-2 px-3 active'
                                        : 'py-2 px-3 '
                                }
                            >
                                全部
                            </li>
                            <li
                                onClick={function () {
                                    setActive(2);
                                    setStatusId(2);
                                    setOffset(1);
                                    // console.log('2 :>> ', statusId);
                                }}
                                className={
                                    active === 2
                                        ? 'py-2 px-3 active'
                                        : 'py-2 px-3'
                                }
                            >
                                未評論
                            </li>
                            <li
                                onClick={function () {
                                    setActive(3);
                                    setStatusId(3);
                                    setOffset(1);
                                    // console.log('3 :>> ', statusId);
                                }}
                                className={
                                    active === 3
                                        ? 'py-2 px-3 active'
                                        : 'py-2 px-3'
                                }
                            >
                                已評論
                            </li>
                        </ul>
                    </div>
                    <div className="line d-none d-md-block"></div>
                </div>
                {/* card */}
                {display.map((oneReview) => {
                    {
                        /* const goTo = `${routes.reviewDetail}/${oneReview.id}`; */
                    }
                    const goTo = reverse(routes.review.id, {
                        id: oneReview.id,
                    });
                    // FIXME: routes
                    const img = `${IMG_URL2}/${oneReview.products_img}/a1.jpg`;
                    // console.log('object :>> ', img);
                    return (
                        <div className="d-flex review-card" key={oneReview.id}>
                            <div className="col-auto  col-md-10 review-card-img me-4">
                                <div className="ratios">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div className="col row ps-0 align-items-center align-content-center">
                                <h4 className="col-10 col-md-8  align-self-center m-0">
                                    {oneReview.name}
                                </h4>
                                <>
                                    <h5 className="title mt-3 mt-md-0">
                                        {oneReview.title}
                                    </h5>
                                </>
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
            </div>
            <Pagination
                total={counts}
                limit={4}
                onEvent={function (limit, page) {
                    setOffset(limit * (page - 1));
                }}
            />
        </>
    );
}

export default ReviewContent;
