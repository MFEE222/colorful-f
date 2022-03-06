//內建庫
import React from 'react';
import { useParams, useLocation, Redirect } from 'react-router-dom';
//第三方庫
import axios from 'axios';
// 共用
import {
    API_URL,
    IMG_URL,
    API_GET_WISHLIST,
    IMG_URL2,
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
import Img2 from '../../images/wed001.jpg';
function Favorites(props) {
    return (
        <div className="col-12 col-md-10 box">
            <div className="list-border">
                <div className="product-list">
                    {/* xs,sm 搜尋框 */}
                    <div className="container d-md-flex d-lg-none justify-content-between my-md-3">
                        <div className="phone-search d-flex justify-content-between ">
                            <input
                                type="search"
                                className="input-style"
                                placeholder="在此輸入關鍵字"
                            />
                            <div className="search-icon d-flex my-2">
                                <div className="me-2">
                                    <img
                                        className="icon-img"
                                        src={deleteImg}
                                        alt=""
                                    />
                                </div>
                                <div className="me-2">
                                    <img
                                        className="icon-img"
                                        src={searchImg}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <!-- xs,sm filterbar --> */}
                        <div className="phone-filter d-flex justify-content-between my-2">
                            <p className="my-auto mx-2">search result counts</p>
                            <div className="d-flex justify-content-end align-items-center">
                                <div className="dropdown-style my-auto me-2">
                                    <select
                                        name="filter-select"
                                        id="filter-select"
                                        className="filter-select"
                                    >
                                        <option value="defalut">篩選</option>
                                        <option value="all">全部</option>
                                        <option value="member">會員</option>
                                        <option value="food">食物</option>
                                        <option value="scenery">風景</option>
                                        <option value="wedding">婚禮</option>
                                        <option value="portrait">人像</option>
                                        <option value="negative">底片</option>
                                    </select>
                                </div>
                                <div className="icon-g d-flex">
                                    <div className="me-2">
                                        <img
                                            className="icon-img"
                                            src={listViewImg}
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="icon-img"
                                            src={sortImg}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- md 以上filterbar --> */}
                <div className="container">
                    <div className="d-none d-lg-block">
                        {/* <FilterBarContent /> */}
                    </div>
                </div>
                {/* <!-- card --> */}
                {/* <div className="container wishlist-group">
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
                                        <button className="btn btn-warning ">
                                            <span>加入購物車</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="col-6 col-md-4 mt-2 px-3 mb-2">
                    <div className="card-border ">
                        <div className="card-img position-relative">
                            <div className="ratios">
                                <img className="img-fluid" src="" alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <label className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold"></p>
                            </label>
                            
                        </div>
                    </div>
                </div> */}

                <div className="card-group row row-cols-2 row-cols-md-2 row-cols-lg-4 my-1 mx-3 p-3 card-house">
                    <div className="col">
                        <div className="card-border " data-tilt>
                            {/* <!-- data-tilt 特效 看是否保留 --> */}
                            <div className="card-img ">
                                <div className="ratios">
                                    <img
                                        className="img-fluid"
                                        src={Img2}
                                        alt=""
                                    />
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
                <div className="container">
                    <div className="pagination">
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favorites;
