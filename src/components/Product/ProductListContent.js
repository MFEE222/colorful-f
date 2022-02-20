// 內建庫
import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

// 第三方庫
import axios from 'axios';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { css } from '@emotion/react';

// 共用
import { API_URL, IMG_URL } from '../../utils/config';

// 自己
import FilterBarContent from '../Filterbar/FilterBarContent';
import RecommendCard from './RecommendCard';
import Pagination from '../Pagination/Pagination';
import Card from './Card';

//圖片
import deleteImg from '../../icons/Sortbar/Delete.png';
import searchImg from '../../icons/Sortbar/Search.png';
import listViewImg from '../../icons/Sortbar/Listview.png';
import sortImg from '../../icons/Sortbar/Sort.png';
import bannerDemo from '../../images/banner-demo-2.png';
import cardDemo from '../../images/navbar-ex-1.jpg';
import decBar from '../../icons/dec-bar.png';

function ProductListContent(props) {
    // 狀態
    const [products, setProducts] = useState([]); //記錄用（像伺服器要原始資料）
    const [showProducts, setShowProducts] = useState([]); //過濾呈現用
    const [searchWord, setSearchWord] = useState('');
    const [tags, setTags] = useState([]); //表單元素狀態
    let [loading, setLoading] = useState(false); //載入顯示 ok
    let [color, setColor] = useState('#cf9d3f');
    const match = useRouteMatch();

    // Loading 設定值
    const override = css`
        display: block;
        margin: auto;
        width: 100vh;
        height: 100vh;
    `;

    // 函數
    const fetchProduct = async () => {
        const api = `${API_URL}/product`;
        const response = await axios.get(api);

        // console.log('api :>> ', api);
        // console.log('response :>> ', response);

        setProducts(response.data.data);
        setShowProducts(response.data.data);
        setTags(response.data.tags);
        // setLoading(false);
    };

    // 生命週期
    useEffect(() => {
        setLoading(true);
        fetchProduct(); // 下載商品資料
    }, []); // 掛載

    useEffect(() => {
        if (products !== []) {
            setLoading(false);
        }
    }, [loading]); // 更新 loading

    // JSX
    const productList = (
        <>
            <div className="product-list">
                {/* <!-- banner --> */}
                <div className="banner">
                    <div className="banner-img">
                        <div className="ratios">
                            <img src={bannerDemo} alt="" />
                        </div>
                    </div>
                    {/* <!-- banner遮罩 --> */}
                    {/* <!-- <div className="img-clip d-none d-md-block"> --> */}
                    {/* <!-- animate__animated animate__fadeInUp --> */}

                    <div className="describe">
                        <h3 className="d-none d-md-block c-title ">風景</h3>
                        <p>
                            因其細緻自然的色調而成為人像、和婚禮攝影師的最愛。低對比度柔和的色調這款濾鏡可以讓您營造出美麗而寧靜的美感
                        </p>
                    </div>
                    <div className="title-block">
                        <div className="title-dec d-none d-md-block"></div>
                        <h3 className="e-title">Scenery</h3>
                    </div>
                </div>
            </div>
            {/* xs,sm 搜尋框 */}
            <div className="container d-md-flex">
                <div className="container d-md-flex d-lg-none my-md-3 search-box p-0">
                    <div className="phone-search d-flex justify-content-between ">
                        <input
                            type="search"
                            className="input-style"
                            placeholder="在此輸入關鍵字"
                            value={searchWord}
                            onChange={(e) => setSearchWord(e.target.value)}
                        />
                        <div className="search-icon d-flex my-2">
                            <div className="me-2">
                                <img
                                    className="icon-img"
                                    src={deleteImg}
                                    alt=""
                                    onClick={() => {
                                        setSearchWord('');
                                    }}
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
                </div>
                {/* <!-- xs,sm filterbar --> */}
                <div className="container d-flex justify-content-between justify-content-md-end my-2 d-lg-none phone-filter p-0">
                    <p className="my-auto me-2">search result counts</p>
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
                            {/* <div className="me-2">
                                <img
                                    className="icon-img"
                                    src={listViewImg}
                                    alt=""
                                />
                            </div> */}
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

            {/* <!-- md 以上filterbar --> */}
            <div className="container">
                <div className="d-none d-lg-block">
                    <FilterBarContent />
                </div>
            </div>
            {/* tags  */}
            <div className=" container row flex-nowrap tags-list ps-0">
                {tags.map((tag) => {
                    return (
                        <>
                            <div
                                className="col-auto m-2 mx-md-2  tag-text"
                                key={tag.id}
                            >
                                {/* {handleHastag} */}
                                <i className="fas fa-hashtag pe-1"></i>
                                {tag.name}
                            </div>
                        </>
                    );
                })}
            </div>
            {/* <!-- card --> */}
            <div className="container">
                <div className="card-group row my-4 mt-md-5 my-2">
                    {products.map((product) => {
                        return (
                            <div className="col-6 col-md-3">
                                <Card
                                    key={product.id}
                                    product={product}
                                    to={`${match.path}/detail/${product.id}`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* <ProductListCard products={showProducts} /> */}
            {/* <!-- Pagination --> */}
            <Pagination />
            {/* <!-- recommend --> <!-- dec = decorate --> */}
            {/* <div className="container">
                <div className="recommend mt-5">
                    <div className="recommend-title">
                        <div className="text-box">
                            <div className="phone-title">
                                <h3>熱銷排行</h3>
                                <img
                                    className="d-md-none"
                                    src={decBar}
                                    alt=""
                                />
                                <p className="d-none d-md-block">
                                    暢銷色調值得您擁有 強化風格與色調
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="recommend-card">
                        //TODO:切成元件
                        <div className="card-group row my-4 mt-md-5 my-2">
                            {ranks.map((rank) => {
                                return (
                                    <div className="col-6 col-md-3">
                                        <Card
                                            key={rank.id}
                                            detail={rank}
                                            ranks={ranks}
                                        ></Card>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div> */}
            <RecommendCard />
        </>
    );
    const spinner = (
        <div className="sweet-loading">
            {/* <button onClick={() => setLoading(!loading)}>
                    Toggle Loader
                </button> */}
            {/* <input
                    value={color}
                    onChange={(input) => setColor(input.target.value)}
                    placeholder="Color of the loader"
                /> */}
            <ClimbingBoxLoader
                color={color}
                loading={loading}
                css={override}
                size={13}
            />
        </div>
    );
    return <>{loading ? spinner : productList}</>;
}

export default ProductListContent;

//search filter tag 排序
//TODO:欄位搜尋+code query
//TODO:(拆成元件)filterbar 顯示
//TODO:(拆成元件)tag 顯示 => 點擊切換icon
//TODO:排序
//TODO:已購買顯示標記
//TODO:分頁
//TODO:商品卡點進去要商品詳情
//TODO:收藏愛心要加減（非會員加入localstorage)//=>收藏狀態設在這層
