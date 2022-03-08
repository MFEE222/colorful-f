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
import { useAuthContext } from '../../utils/context/AuthContext';
import { useProductsContext } from '../../utils/context/ProductsContext';

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
    const favorites = useFavoritesContext();
    //TODO:1.連接資料庫拿下載資料; 2.用按鈕判斷要哪種 3.用狀態紀錄勾選哪些
    // auth.current

    // favorites.handleCheckAll();
    // favorites.handleDownload();
    // favorites.handleCheck();

    // onClick={favorites.handleCheck};
    // onClick = {
    //     function(e) {
    //         favorites.handleCheck(e, 12, 3, 4);
    //     },
    // };

    // onClick = {
    //     function() {
    //         favorites.option = {
    //             userId: 5,
    //         };
    //         favorites.synFrom({ userId: 5 });
    //     },
    // };
    //顯現
    // favorites.current;
    // const auth = useAuthContext();
    const product = useProductsContext();

    // const test = (product) => {
    //     let setFavorites = async () => {
    //         try {
    //             let response = await axios.post(API_GET_FAVORITES, {
    //                 params: {
    //                     userid: auth.user_id,
    //                     productid: product.productid,
    //                 },
    //             });
    //             console.log(response.data);
    //         } catch (err) {
    //             console.log('err :>>', err);
    //         }
    //     };
    //     setFavorites;
    // };
    return (
        <div className="col-12 col-md-10 box">
            <div className="list-border">
                <div className="member1-comment download">
                    <div className="filter mt-sm-3 my-sm-3 my-md-3">
                        <div className="filter-box d-flex">
                            <ul className="sort-series p-0">
                                <li className="active py-2 px-3">全部</li>
                                <li className="py-2 px-3">未下載</li>
                                <li className="py-2 px-3">已下載</li>
                            </ul>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="d-flex justify-content-center justify-content-md-end my-4">
                        <div
                            className="text-center py-2 download-btn me-3"
                            onClick={favorites.handleCheckAll}
                        >
                            勾選全部
                        </div>
                        <div
                            className="text-center py-2 px-3 download-btn"
                            onClick={favorites.handleDownload}
                        >
                            取消收藏
                        </div>
                        <div className="text-center py-2 px-3 download-btn">
                            test
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
                        {/* 測試 */}
                        <h1>{favorites.current}</h1>
                        {/* {favorites.current.map(function (e) {
                            return (
                                <div key={e.id}>
                                    <h1>{`ID: ${e.id}`}</h1>
                                </div>
                            );
                        })} */}

                        {/* {favorites.current.map(function(e) {
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
                                        </div>
                                        <div className="card-body text-start p-0 my-2 my-md-4">
                                            <label
                                                htmlFor={v.id}
                                                className="d-flex justify-content-between align-items-center"
                                            >
    
                                                <div>
                                                    <p className="card-title fw-bold">
                                                        {v.name}
                                                    </p>
                                                    <i className="fas fa-heart"></i>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            );
                        })} */}
                        {/* {favorites.current.display.map((v, i) => {
                            const img = `${IMG_URL2}/${v.products_img}/a1.jpg`;
                            {
                                console.log('img :>> ', img); 
                            }
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
                                                        favorites.handleCheck(
                                                            e,
                                                            i
                                                        );
                                                    }}
                                                />
                                                <div>
                                                    <p className="card-title fw-bold">
                                                        {v.name}
                                                    </p>
                                                    <i className="fas fa-heart"></i>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            );
                        })} */}
                    </div>
                    <Pagination
                        total={favorites.counts}
                        limit={8}
                        offset={favorites.offset}
                        setOffset={favorites.setOffset}
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
