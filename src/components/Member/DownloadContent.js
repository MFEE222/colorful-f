import React, { useEffect, useState, useRef } from 'react';
import Img1 from '../../images/婚禮_5.jpg';
import Img2 from '../../images/wed001.jpg';
import Auth from '../../pages/Auth';
import axios from 'axios';
//共用
import {
    API_GET_MEMBER_DOWNLOAD,
    IMG_URL2,
    API_POST_MEMBER_DOWNLOAD_DNG,
} from '../../utils/config';
import Pagination from './Pagination';

function DownloadContent(props) {
    //TODO:1.連接資料庫拿下載資料; 2.用按鈕判斷要哪種 3.用狀態紀錄勾選哪些
    // auth.current
    let uid = 1;
    const [checked, setChecked] = useState(false); //核取方塊
    const [statusId, setStatusId] = useState(0); // filter 狀態
    // const [download, setDownload] = useState([]); //給後端的{uid,pid....}要下載的東西
    const [counts, setCounts] = useState(); //資料總計
    const [offset, setOffset] = useState(1); //分頁
    const [display, setDisplay] = useState([]); //呈現

    const fetchDownload = async () => {
        const response = await axios.get(API_GET_MEMBER_DOWNLOAD, {
            params: {
                uid,
                statusId, //all->0->status 1 & 2 //未下載status = 1 // 已下載 status = 2
                offset,
            },
        });
        // console.log('response.data.data :>> ', response.data);
        const newDisplay = response.data.data.map(function (e) {
            e.check = false;
            return e;
        });
        // console.log('newDisplay :>> ', newDisplay);
        setCounts(response.data.rows);
        // setDisplay(response.data.data);
        setDisplay(newDisplay);
    };

    //checkbox
    //all
    const handleCheckAll = () => {
        const c = !checked;
        const newDisplay = [...display];

        newDisplay.map((v, i) => {
            v.check = c;
            setDisplay(newDisplay);
        });
        setChecked(c);
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
        // console.log('here :>> ', 'here');
        const response = await axios.post(API_POST_MEMBER_DOWNLOAD_DNG, {
            userID: uid,
            dngId,
        });
    };

    useEffect(() => {
        fetchDownload();
    }, [statusId, uid, offset]);

    return (
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

export default DownloadContent;
