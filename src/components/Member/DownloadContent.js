import React, { useEffect, useState } from 'react';

import Img1 from '../../images/婚禮_5.jpg';
import Img2 from '../../images/wed001.jpg';
import Auth from '../../pages/Auth';
import axios from 'axios';
import { API_GET_MEMBER_DOWNLOAD } from '../../utils/config';

function DownloadContent(props) {
    //TODO:1.連接資料庫拿下載資料; 2.用按鈕判斷要哪種 3.用狀態紀錄勾選哪些
    // auth.current=
    let uid = 1;
    const [status, setStatus] = useState(0);
    const [offset, setOffset] = useState(1);
    const [display, setDisplay] = useState([]);
    const fetchDownload = async () => {
        const response = await axios.get(`${API_GET_MEMBER_DOWNLOAD}`, {
            params: {
                uid,
                status, //all->0->status 1 & 2 //未下載status = 1 // 已下載 status = 2
                offset,
            },
        });
    };
    useEffect(() => {
        fetchDownload();
    }, []);
    return (
        <main className="col-12 col-md-10 member-profile-main">
            {/* <!-- line --> */}
            <div className="row justify-content-center">
                <div className="filter mt-sm-5 my-sm-3 my-md-5">
                    <div className="filter-box d-flex">
                        <ul className="sort-series p-0">
                            <li
                                className="active py-1 px-2 py-md-2 px-md-3"
                                onClick={function () {
                                    setStatus(0);
                                }}
                            >
                                全部
                            </li>
                            <li
                                className="py-1 px-2 py-md-2 px-md-3"
                                onClick={function () {
                                    setStatus(1);
                                }}
                            >
                                未下載
                            </li>
                            <li
                                className="py-1 px-2 py-md-2 px-md-3"
                                onClick={function () {
                                    setStatus(2);
                                }}
                            >
                                已下載
                            </li>
                        </ul>
                    </div>
                    <div className="line"></div>
                </div>
            </div>

            {/* <!-- top content left --> */}
            <div className="row justify-content-end">
                <div className="col-4 text-center mb-3">
                    <button
                        type="button"
                        className="btn btn-lg btn-warning mt-2 col-8 rounded-pill text-light"
                    >
                        DOWNLOAD
                    </button>
                </div>
            </div>

            {/* <!-- card --> */}
            {/* 用row-cols-數字去控制一行有多少個 */}
            <div className="card-group row row-cols-2 row-cols-md-2 row-cols-lg-4 my-1 mx-3 p-3 card-house">
                <div className="col">
                    <div className="card-border " data-tilt>
                        {/* <!-- data-tilt 特效 看是否保留 --> */}
                        <div className="card-img ">
                            <div className="ratios">
                                <img className="img-fluid" src={Img2} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    婚禮／Wedding-1
                                </p>

                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                            </div>
                            <div className="text-start">NT 20</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-border ">
                        <div className="card-img ">
                            <div className="ratios">
                                <img className="img-fluid" src={Img2} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    婚禮／Wedding-1
                                </p>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                            </div>
                            <div className="text-start">NT 20</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-border">
                        <div className="card-img ">
                            <div className="ratios">
                                <img className="img-fluid" src={Img2} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    婚禮／Wedding-1
                                </p>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                            </div>
                            <div className="text-start">NT 20</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-border">
                        <div className="card-img ">
                            <div className="ratios">
                                <img className="img-fluid" src={Img2} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    婚禮／Wedding-1
                                </p>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                            </div>
                            <div className="text-start">NT 20</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-border ">
                        <div className="card-img ">
                            <div className="ratios">
                                <img className="img-fluid" src={Img1} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    婚禮／Wedding-1
                                </p>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                            </div>
                            <div className="text-start">NT 20</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-border ">
                        <div className="card-img ">
                            <div className="ratios">
                                <img className="img-fluid" src={Img1} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    婚禮／Wedding-1
                                </p>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                            </div>
                            <div className="text-start">NT 20</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-border ">
                        <div className="card-img ">
                            <div className="ratios">
                                <img className="img-fluid" src={Img1} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    婚禮／Wedding-1
                                </p>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                            </div>
                            <div className="text-start">NT 20</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-border ">
                        <div className="card-img ">
                            <div className="ratios">
                                <img className="img-fluid" src={Img1} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    婚禮／Wedding-1
                                </p>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                            </div>
                            <div className="text-start">NT 20</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Pagination --> */}
            {/* <!-- line --> */}
            {/* <div className="row justify-content-center">
                <div className="col-7 border mb-5"></div>
            </div> */}
        </main>
    );
}

export default DownloadContent;

{
    /* <!-- title --> */
}
{
    /* <div className="row m-3 border border-secondary rounded-3 p-3 align-items-center"> */
}
{
    /* <div className="col-7"> */
}
{
    /* me是右邊的意思 用margin去擠開 */
}
{
    /* <div className="col-lg-auto me-auto">
                    <h1>下載區</h1>
                </div> */
}

{
    /* <!-- search --> */
}
{
    /* <div className="col-lg-4">
                    <div className="row">
                        <div className="mb-2">
                            <input
                                type="text"
                                className="form-control col-12"
                                id="exampleFormControlInput1"
                                placeholder="搜尋"
                            />
                        </div>
                        <div className="">
                            <button
                                type="button"
                                className="btn btn-outline-secondary col-12 "
                            >
                                <i className="fas fa-caret-down me-2"></i>
                                依照購買日期排序
                            </button>
                        </div>
                    </div>
                </div>
            </div> */
}
