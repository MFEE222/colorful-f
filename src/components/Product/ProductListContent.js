import React from 'react';
import FilterBarContent from '../Filterbar/FilterBarContent';
import deleteImg from '../../icons/Sortbar/Delete.png';
import searchImg from '../../icons/Sortbar/Search.png';
import listViewImg from '../../icons/Sortbar/Listview.png';
import sortImg from '../../icons/Sortbar/Sort.png';
import bannerDemo from '../../images/banner-demo-2.png';
import cardDemo from '../../images/navbar-ex-1.jpg';
import decBar from '../../icons/dec-bar.png';

function ProductListContent(props) {
    return (
        <>
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
            {/* <!-- md 以上filterbar --> */}
            <div className="container">
                <div className="d-none d-lg-block">
                    <FilterBarContent />
                </div>
            </div>
            {/* <!-- card --> */}
            <div className="container">
                <div className="card-group row my-4 mt-md-5 my-2">
                    <div className="col-6 col-md-3">
                        <div className="card-border " data-tilt>
                            {/* <!-- data-tilt 特效 看是否保留 --> */}
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
                                <div className="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="card-border ">
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
                                <div className="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="card-border">
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
                                <div className="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="card-border">
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
                                <div className="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="card-border">
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
                                <div className="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="card-border">
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
                                <div className="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="card-border">
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
                                <div className="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="card-border">
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
                                <div className="text-start">NT 20</div>
                            </div>
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
            {/* <!-- recommend --> <!-- dec = decorate --> */}
            <div className="container">
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
                        <div className="card-group row my-4 mt-md-5 my-2">
                            <div className="col-6 col-md-3">
                                <div className="card-border " data-tilt>
                                    {/* <!-- data-tilt 特效 看是否保留 --> */}
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
                                        <div className="text-start">NT 20</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="card-border ">
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
                                        <div className="text-start">NT 20</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="card-border">
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
                                        <div className="text-start">NT 20</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="card-border">
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
                                        <div className="text-start">NT 20</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductListContent;
