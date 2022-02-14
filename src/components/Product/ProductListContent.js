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
            <div class="product-list">
                {/* xs,sm 搜尋框 */}
                <div class="container d-md-flex d-lg-none justify-content-between my-md-3">
                    <div class="phone-search d-flex justify-content-between ">
                        <input
                            type="search"
                            class="input-style"
                            placeholder="在此輸入關鍵字"
                        />
                        <div class="search-icon d-flex my-2">
                            <div class="me-2">
                                <img class="icon-img" src={deleteImg} alt="" />
                            </div>
                            <div class="me-2">
                                <img class="icon-img" src={searchImg} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* <!-- xs,sm filterbar --> */}
                    <div class="phone-filter d-flex justify-content-between my-2">
                        <p class="my-auto mx-2">search result counts</p>
                        <div class="d-flex justify-content-end align-items-center">
                            <div class="dropdown-style my-auto me-2">
                                <select
                                    name="filter-select"
                                    id="filter-select"
                                    class="filter-select"
                                >
                                    <div class="option-style ">
                                        <option value="defalut" selected>
                                            篩選
                                        </option>
                                        <option value="all">全部</option>
                                        <option value="member">會員</option>
                                        <option value="food">食物</option>
                                        <option value="scenery">風景</option>
                                        <option value="wedding">婚禮</option>
                                        <option value="portrait">人像</option>
                                        <option value="negative">底片</option>
                                    </div>
                                </select>
                            </div>
                            <div class="icon-g d-flex">
                                <div class="me-2">
                                    <img
                                        class="icon-img"
                                        src={listViewImg}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        class="icon-img"
                                        src={sortImg}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- banner --> */}
                <div class="banner">
                    <div class="banner-img">
                        <div class="ratios">
                            <img src={bannerDemo} alt="" />
                        </div>
                    </div>
                    {/* <!-- banner遮罩 --> */}
                    {/* <!-- <div class="img-clip d-none d-md-block"> --> */}
                    {/* <!-- animate__animated animate__fadeInUp --> */}

                    <div class="describe">
                        <h3 class="d-none d-md-block c-title ">風景</h3>
                        <p>
                            因其細緻自然的色調而成為人像、和婚禮攝影師的最愛。低對比度柔和的色調這款濾鏡可以讓您營造出美麗而寧靜的美感
                        </p>
                    </div>
                    <div class="title-block">
                        <div class="title-dec d-none d-md-block"></div>
                        <h3 class="e-title">Scenery</h3>
                    </div>
                </div>
            </div>
            {/* <!-- md 以上filterbar --> */}
            <div class="container">
                <div class="d-none d-lg-block">
                    <FilterBarContent />
                </div>
            </div>
            {/* <!-- card --> */}
            <div class="container">
                <div class="card-group row my-4 mt-md-5 my-2">
                    <div class="col-6 col-md-3">
                        <div class="card-border " data-tilt>
                            {/* <!-- data-tilt 特效 看是否保留 --> */}
                            <div class="card-img ">
                                <div class="ratios">
                                    <img src={cardDemo} alt="" />
                                </div>
                            </div>
                            <div class="card-body text-start p-0 my-2 my-md-4">
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="card-title">婚禮／Wedding-1</p>
                                    <i class="fas fa-heart"></i>
                                </div>
                                <div class="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="card-border ">
                            <div class="card-img ">
                                <div class="ratios">
                                    <img src={cardDemo} alt="" />
                                </div>
                            </div>
                            <div class="card-body text-start p-0 my-2 my-md-4">
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="card-title">婚禮／Wedding-1</p>
                                    <i class="fas fa-heart"></i>
                                </div>
                                <div class="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="card-border">
                            <div class="card-img ">
                                <div class="ratios">
                                    <img src={cardDemo} alt="" />
                                </div>
                            </div>
                            <div class="card-body text-start p-0 my-2 my-md-4">
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="card-title">婚禮／Wedding-1</p>
                                    <i class="fas fa-heart"></i>
                                </div>
                                <div class="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="card-border">
                            <div class="card-img ">
                                <div class="ratios">
                                    <img src={cardDemo} alt="" />
                                </div>
                            </div>
                            <div class="card-body text-start p-0 my-2 my-md-4">
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="card-title">婚禮／Wedding-1</p>
                                    <i class="fas fa-heart"></i>
                                </div>
                                <div class="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="card-border">
                            <div class="card-img ">
                                <div class="ratios">
                                    <img src={cardDemo} alt="" />
                                </div>
                            </div>
                            <div class="card-body text-start p-0 my-2 my-md-4">
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="card-title">婚禮／Wedding-1</p>
                                    <i class="fas fa-heart"></i>
                                </div>
                                <div class="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="card-border">
                            <div class="card-img ">
                                <div class="ratios">
                                    <img src={cardDemo} alt="" />
                                </div>
                            </div>
                            <div class="card-body text-start p-0 my-2 my-md-4">
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="card-title">婚禮／Wedding-1</p>
                                    <i class="fas fa-heart"></i>
                                </div>
                                <div class="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="card-border">
                            <div class="card-img ">
                                <div class="ratios">
                                    <img src={cardDemo} alt="" />
                                </div>
                            </div>
                            <div class="card-body text-start p-0 my-2 my-md-4">
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="card-title">婚禮／Wedding-1</p>
                                    <i class="fas fa-heart"></i>
                                </div>
                                <div class="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="card-border">
                            <div class="card-img ">
                                <div class="ratios">
                                    <img src={cardDemo} alt="" />
                                </div>
                            </div>
                            <div class="card-body text-start p-0 my-2 my-md-4">
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="card-title">婚禮／Wedding-1</p>
                                    <i class="fas fa-heart"></i>
                                </div>
                                <div class="text-start">NT 20</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Pagination --> */}
            <div class="container">
                <div class="pagination">
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
            <div class="container">
                <div class="recommend mt-5">
                    <div class="recommend-title">
                        <div class="text-box">
                            <div class="phone-title">
                                <h3>熱銷排行</h3>
                                <img class="d-md-none" src={decBar} alt="" />
                                <p class="d-none d-md-block">
                                    暢銷色調值得您擁有 強化風格與色調
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="recommend-card">
                        <div class="card-group row my-4 mt-md-5 my-2">
                            <div class="col-6 col-md-3">
                                <div class="card-border " data-tilt>
                                    {/* <!-- data-tilt 特效 看是否保留 --> */}
                                    <div class="card-img ">
                                        <div class="ratios">
                                            <img src={cardDemo} alt="" />
                                        </div>
                                    </div>
                                    <div class="card-body text-start p-0 my-2 my-md-4">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <p class="card-title">
                                                婚禮／Wedding-1
                                            </p>
                                            <i class="fas fa-heart"></i>
                                        </div>
                                        <div class="text-start">NT 20</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="card-border ">
                                    <div class="card-img ">
                                        <div class="ratios">
                                            <img src={cardDemo} alt="" />
                                        </div>
                                    </div>
                                    <div class="card-body text-start p-0 my-2 my-md-4">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <p class="card-title">
                                                婚禮／Wedding-1
                                            </p>
                                            <i class="fas fa-heart"></i>
                                        </div>
                                        <div class="text-start">NT 20</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="card-border">
                                    <div class="card-img ">
                                        <div class="ratios">
                                            <img src={cardDemo} alt="" />
                                        </div>
                                    </div>
                                    <div class="card-body text-start p-0 my-2 my-md-4">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <p class="card-title">
                                                婚禮／Wedding-1
                                            </p>
                                            <i class="fas fa-heart"></i>
                                        </div>
                                        <div class="text-start">NT 20</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="card-border">
                                    <div class="card-img ">
                                        <div class="ratios">
                                            <img src={cardDemo} alt="" />
                                        </div>
                                    </div>
                                    <div class="card-body text-start p-0 my-2 my-md-4">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <p class="card-title">
                                                婚禮／Wedding-1
                                            </p>
                                            <i class="fas fa-heart"></i>
                                        </div>
                                        <div class="text-start">NT 20</div>
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
