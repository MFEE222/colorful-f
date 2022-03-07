//內建庫
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Redirect } from 'react-router-dom';

//第三方庫
import axios from 'axios';
// 共用
import {
    API_GET_MEMBER_DOWNLOAD,
    IMG_URL2,
    API_POST_MEMBER_DOWNLOAD_DNG,
    API_GET_FAVORITES,
} from '../../utils/config';
import { useFavoritesContext } from '../../utils/context/FavoritesContext';

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
import Img1 from '../../images/婚禮_5.jpg';
import Img2 from '../../images/wed001.jpg';
import Auth from '../../pages/Auth';
function Favorites(props) {
    //TODO:1.連接資料庫拿下載資料; 2.用按鈕判斷要哪種 3.用狀態紀錄勾選哪些
    // auth.current
    let uid = 1;
    const [checked, setChecked] = useState(false); //核取方塊
    const [statusId, setStatusId] = useState(0); // filter 狀態
    // const [download, setDownload] = useState([]); //給後端的{uid,pid....}要下載的東西
    const [counts, setCounts] = useState(); //資料總計
    const [offset, setOffset] = useState(1); //分頁
    const [display, setDisplay] = useState([]); //呈現
    //測試
    console.log(123);
    const favorites = useFavoritesContext.favorites;

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
        console.log('here :>> ', 'here');
        const response = await axios.post(API_POST_MEMBER_DOWNLOAD_DNG, {
            uid,
            dngId,
        });
    };
    return (
        <div className="col-12 col-md-10 box">
            <div className="list-border">
                <div className="member1-comment download">
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
                            取消收藏
                        </div>
                    </div>
                    {/* <!-- card --> */}

                    <div className="row  my-1 card-house">
                        {/* card樣式 */}
                        {/* <div>
                            <div className=" card-group row my-4 mt-md-5 my-2">
                                <div className="col-6 col-md-3">
                                    <div className="card-border " data-tilt>
                                        <div className="card-img ">
                                            <div className="ratios">
                                                <img src={cardDemo} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-body text-start p-0 my-2 my-md-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-title">
                                                    婚禮／Wedding-1
                                                </p>

                                                <i className="fas fa-heart"></i>
                                            </div>
                                            <div className="text-start">
                                                NT 20
                                                <div className="">
                                                    <input
                                                        className="form-check-input m-6"
                                                        type="checkbox"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {favorites.map(function (e) {
                            const img = `${IMG_URL2}/${v.products_img}/a1.jpg`;
                            console.log('img :>> ', img);
                            return (
                                <div
                                    className="col-6 col-md-4 mt-2 px-3 mb-2"
                                    key={e.id}
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
                                            {e.status == 2 ? (
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
                                                htmlFor={e.id}
                                                className="d-flex justify-content-between align-items-center"
                                            >
                                                <input
                                                    className="form-check-input m-0"
                                                    type="checkbox"
                                                    value={e.id}
                                                    id={e.id}
                                                    checked={v.check}
                                                    onChange={function (e) {
                                                        handleCheck(e, i);
                                                    }}
                                                />
                                                <div>
                                                    <p className="card-title fw-bold">
                                                        {e.name}
                                                    </p>
                                                    <i className="fas fa-heart"></i>
                                                </div>
                                            </label>
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
                    {/* pagination樣式 */}
                    {/* <div className="container">
                        <div className="pagination">
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Favorites;
