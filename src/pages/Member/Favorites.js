//內建庫
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Redirect } from 'react-router-dom';
import Img1 from '../../images/婚禮_5.jpg';
import Img2 from '../../images/wed001.jpg';
//第三方庫
import axios from 'axios';
// 共用
import {
    API_URL,
    IMG_URL,
    API_GET_WISHLIST,
    IMG_URL2,
    API_POST_MEMBER_DOWNLOAD_DNG,
    API_GET_MEMBER_DOWNLOAD,
} from '../../utils/config';
//Components
// import FilterBarContent from '../../components/Filterbar/FilterBarContent';
//IMG
import deleteImg from '../../icons/Sortbar/Delete.png';
import searchImg from '../../icons/Sortbar/Search.png';
import listViewImg from '../../icons/Sortbar/Listview.png';
import sortImg from '../../icons/Sortbar/Sort.png';
import bannerDemo from '../../images/banner-demo-2.png';
import cardDemo from '../../images/navbar-ex-1.jpg';
import decBar from '../../icons/dec-bar.png';

//元件
import Pagination from '../../utils/Pagination';

function Favorites(props) {
    let uid = 1;
    const [checked, setChecked] = useState(false); //核取方塊
    const [statusId, setStatusId] = useState(0); // filter 狀態
    const [offset, setOffset] = useState(1); //分頁
    const [counts, setCounts] = useState(); //資料總計
    const [display, setDisplay] = useState([]); //呈現

    const fetchDownload = async () => {
        console.group('456');
        const response = await axios.get(API_GET_MEMBER_DOWNLOAD, {
            params: {
                uid,
                statusId, //all->0->status 1 & 2 //未下載status = 1 // 已下載 status = 2
                offset,
            },
        });
        console.log(123);

        // console.log('response.data.data :>> ', response.data);
        const newDisplay = response.data.data.map(function (e) {
            e.check = false;
            return e;
        });
        console.log('newDisplay :>> ', newDisplay);
        setCounts(response.data.rows);
        // setDisplay(response.data.data);
        setDisplay(newDisplay);
    };
    //checkbox
    //all
    const handleCheckAll = () => {
        const c = !checked;

        const newDisplay = display.map((v, i) => {
            v.check = c;
        });
        setChecked(c);
        setDisplay(newDisplay);
    };

    //alone
    const handleCheck = (event, index) => {
        const newDisplay = [...display];
        newDisplay[index].check = event.target.checked;
        setDisplay(newDisplay);
    };

    const handleDownload = async () => {
        const d = display.filter((v, i) => {
            return v.check === true;
        });
        const dngId = d.map((v) => {
            return v.product_id;
        });
        console.log('here :>> ', 'here');
        const response = await axios.post(API_POST_MEMBER_DOWNLOAD_DNG, {
            uid,
            dngId,
        });
    };

    // useEffect(() => {
    //     fetchDownload();
    // }, [statusId, uid, offset]);
    useEffect(() => {
        fetchDownload();
    }, []);
    useEffect(() => {
        console.log('display :>> ', display);
    }, [display]);

    return (
        // <div className="col-12 col-md-10 box">
        //     <div className="list-border">
        //         <div className="filter mt-sm-3 my-sm-3 my-md-3">
        //             <div className="filter-box d-flex">
        //                 <ul className="sort-series p-0">
        //                     <li
        //                         className="active py-2 px-3"
        //                         onClick={function () {
        //                             setStatusId(0);
        //                             setOffset(1);
        //                         }}
        //                     >
        //                         全部
        //                     </li>
        //                     <li
        //                         className="py-2 px-3"
        //                         onClick={function () {
        //                             setStatusId(1);
        //                             setOffset(1);
        //                         }}
        //                     >
        //                         未下載
        //                     </li>
        //                     <li
        //                         className="py-2 px-3"
        //                         onClick={function () {
        //                             setStatusId(2);
        //                             setOffset(1);
        //                         }}
        //                     >
        //                         已下載
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="line"></div>
        //         </div>
        //         <div className="d-flex justify-content-center justify-content-md-end my-4">
        //             <div
        //                 className="text-center py-2 download-btn me-3"
        //                 onClick={handleCheckAll}
        //             >
        //                 勾選全部
        //             </div>
        //             <div
        //                 className="text-center py-2 px-3 download-btn"
        //                 onClick={handleDownload}
        //             >
        //                 取消收藏
        //             </div>
        //         </div>
        //         {/* <!-- card --> */}
        //         <div className="row  my-1 card-house">
        //             {display.map((v, i) => {
        //                 const img = `${IMG_URL2}/${v.products_img}/a1.jpg`;
        //                 // console.log('img :>> ', img);
        //                 return (
        //                     <div
        //                         className="col-6 col-md-4 mt-2 px-3 mb-2"
        //                         key={v.id}
        //                     >
        //                         <div className="card-border ">
        //                             <div className="card-img position-relative">
        //                                 <div className="ratios">
        //                                     <img
        //                                         className="img-fluid"
        //                                         src="Img2"
        //                                         alt=""
        //                                     />
        //                                 </div>
        //                                 {v.status == 2 ? (
        //                                     <span className="position-absolute top-0  translate-middle p-2  border-light rounded-circle download-badge">
        //                                         <span className="badge bg-secondary">
        //                                             已下載
        //                                         </span>
        //                                     </span>
        //                                 ) : (
        //                                     ''
        //                                 )}
        //                             </div>
        //                             <div className="card-body text-start p-0 my-2 my-md-4">
        //                                 <label
        //                                     htmlFor={v.id}
        //                                     className="d-flex justify-content-between align-items-center"
        //                                 >
        //                                     <input
        //                                         className="form-check-input m-0"
        //                                         type="checkbox"
        //                                         value={v.id}
        //                                         id={v.id}
        //                                         checked={v.check}
        //                                         onChange={function (e) {
        //                                             handleCheck(e, i);
        //                                         }}
        //                                     />
        //                                     <p className="card-title fw-bold">
        //                                         {v.name}
        //                                     </p>
        //                                 </label>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 );
        //             })}
        //         </div>
        //         {/* <!-- Pagination --> */}
        //         <div className="container">
        //             <div className="pagination">
        //                 <ul>
        //                     <li>1</li>
        //                     <li>2</li>
        //                     <li>3</li>
        //                        <li>4</li>
        //                     <li>5</li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <>
            <div className="member-comment download">
                <div className="filter mt-sm-3 my-sm-3 my-md-3">
                    <div className="filter-box d-flex">
                        <ul className="sort-series p-0">
                            <li
                                className="active py-2 px-3"
                                onClick={function () {
                                    setStatusId(0);
                                    setOffset(1);
                                }}
                            >
                                全部
                            </li>
                            <li
                                className="py-2 px-3"
                                onClick={function () {
                                    setStatusId(1);
                                    setOffset(1);
                                }}
                            >
                                未下載
                            </li>
                            <li
                                className="py-2 px-3"
                                onClick={function () {
                                    setStatusId(2);
                                    setOffset(1);
                                }}
                            >
                                已下載
                            </li>
                        </ul>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="d-flex justify-content-center justify-content-md-end my-4">
                    <div
                        className="text-center py-2 download-btn me-3"
                        onClick={handleCheckAll}
                    >
                        勾選全部
                    </div>
                    <div
                        className="text-center py-2 px-3 download-btn"
                        onClick={handleDownload}
                    >
                        下載
                    </div>
                </div>
                {/* <!-- card --> */}
                <div className="row  my-1 card-house">
                    {display.map((v, i) => {
                        const img = `${IMG_URL2}/${v.products_img}/a1.jpg`;
                        // console.log('img :>> ', img);
                        return (
                            <div
                                className="col-6 col-md-4 mt-2 px-3 mb-2"
                                key={v.id}
                            >
                                <div className="card-border ">
                                    <div className="card-img position-relative">
                                        <div className="ratios">
                                            <img
                                                className="img-fluid"
                                                src={img}
                                                alt=""
                                            />
                                        </div>
                                        {v.status == 2 ? (
                                            <span className="position-absolute top-0  translate-middle p-2  border-light rounded-circle download-badge">
                                                <span className="badge bg-secondary">
                                                    已下載
                                                </span>
                                            </span>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                    <div className="card-body text-start p-0 my-2 my-md-4">
                                        <label
                                            htmlFor={v.id}
                                            className="d-flex justify-content-between align-items-center"
                                        >
                                            <input
                                                className="form-check-input m-0"
                                                type="checkbox"
                                                value={v.id}
                                                id={v.id}
                                                checked={v.check}
                                                onChange={function (e) {
                                                    handleCheck(e, i);
                                                }}
                                            />
                                            <p className="card-title fw-bold">
                                                {v.name}
                                            </p>
                                        </label>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Pagination
                    total={counts}
                    limit={8}
                    offset={offset}
                    setOffset={setOffset}
                />
            </div>
        </>
    );
}

export default Favorites;
