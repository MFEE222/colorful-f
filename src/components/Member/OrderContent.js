//import React from 'react';

//import FilterBar from './FilterBar';
import OrderCard from './OrderCard';
import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_GET_MEMBER_REVIEW, IMG_URL2 } from '../../utils/config';
import Pagination from './Pagination';
import { useOrderContext } from '../../utils/context/OrderContext';

// function OrderContent(props) {
//     return (
//         <div className="col-12 col-md-10 member-order-main">
//             <FilterBar />

//             {[1, 2, 3].map(function (e, i) {
//                 return <OrderCard key={i} />;
//             })}
//         </div>
//     );
// }

function OrderContent(props) {
    const order = useOrderContext();

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
                                未付款
                            </li>
                            <li
                                className="py-2 px-3"
                                onClick={function () {
                                    setStatusId(3);
                                    setOffset(1);
                                    // console.log('3 :>> ', statusId);
                                }}
                            >
                                已付款
                            </li>
                            <li
                                className="py-2 px-3 "
                                onClick={function () {
                                    setStatusId(2);
                                    setOffset(1);
                                    // console.log('2 :>> ', statusId);
                                }}
                            >
                                完成
                            </li>
                            <li
                                className="py-2 px-3 "
                                onClick={function () {
                                    setStatusId(2);
                                    setOffset(1);
                                    // console.log('2 :>> ', statusId);
                                }}
                            >
                                不成立
                            </li>
                        </ul>
                    </div>
                    <div className="line d-none d-md-block"></div>
                </div>
                {/* card */}
                {/* <div className="row"> */}

                <div className="col-12 member-order-main p-0">
                    {[1, 2, 3].map(function (e, i) {
                        return <OrderCard key={i} />;
                    })}
                </div>
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

export default OrderContent;
