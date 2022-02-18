import React from 'react';

import Img1 from '../../images/book1.jpg';
import Img2 from '../../images/film001.jpg';
import Img3 from '../../images/film002.jpg';
import Img4 from '../../images/film003.jpg';
import Img5 from '../../images/film004.jpg';
import Img6 from '../../images/film005.jpg';
import Img7 from '../../images/film006.jpg';
import Img8 from '../../images/film007.jpg';
import Img9 from '../../images/film008.jpg';
import Img10 from '../../images/film009.jpg';

function DownloadContent(props) {
    return (
        <main className="col-12 col-md-10 member-profile-main">
            {/* <!-- title --> */}
            {/* <div className="col-7"> */}
            {/* me是右邊的意思 用margin去擠開 */}
            {/* <!-- line --> */}
            <div className="row m-3 border border-secondary rounded-3 p-3 align-items-center big-search">
                <div className="console-container">
                    <div className="row justify-content-center">
                        <div class="col-lg-auto me-auto"></div>

                        {/* <!-- search --> */}
                    </div>
                    <div className="col-lg-4"></div>
                </div>
                <section>
                    <div className="inner">
                        <ul className="activity">
                            <li>
                                <a href="#">FO</a>
                            </li>
                            <li>
                                <a href="#">WE</a>
                            </li>
                            <li>
                                <a href="#">PO</a>
                            </li>
                            <li>
                                <a href="#">FI</a>
                            </li>
                            <li>
                                <a href="#">SC</a>
                            </li>
                        </ul>{' '}
                    </div>
                </section>

                {/* <div className="d-flex">
                    <button className="activity">FO</button>
                    <button className="activity">WE</button>
                    <button className="activity">PO</button>
                    <button className="activity">FI</button>
                    <button className="activity">SC</button>
                </div> */}
                <div className="row">
                    <div className="mb-2">
                        <i className="fa-solid fa-magnifying-glass"></i>
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
            {/* 寫在這一行裡面 */}

            <div className="circle-number ">
                {/* 加入數字 */}
                <p className="toponenumber">5</p>
                <p className="topnumber">
                    已擁有的
                    <br />
                    色調包總數
                </p>
            </div>
            {/* <!-- top content left --> */}
            <div className="col-6 border my-5 "></div>
            {/* 上面這一條是線 */}
            <div className="row justify-content-around">
                <div className="col-auto col-lg-5 p-0 ">
                    <div className="card border-0" style={{ width: '18rem' }}>
                        <img src={Img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="text-center fw-bold">FILM</h5>
                            <p className="card-text text-center text-black-50">
                                Recycle Boucle Knit Cardigan Pink
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!-- top content right --> */}
                <div className="col-12 col-lg-5">
                    <div className="row">
                        <div className="col-12 text-center mb-3">
                            {/* 第一顆按鈕 */}
                            <button
                                type="button"
                                className="btn btn-lg btn-warning mt-2 col-8 rounded-pill text-light"
                            >
                                DOWNLOAD
                            </button>
                            {/* <button
                                type="button"
                                className="btn btn-lg btn-light border mt-2 col-2 rounded-pill text-black-50"
                            >
                                <i className="fas fa-heart"></i>
                            </button> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h4 className="fs-5">YOU MAY ALSO LIKE </h4>
                        </div>
                    </div>

                    {/* <!-- line --> */}
                    <div className="row justify-content-center">
                        <div className="col-4 border mb-5"></div>
                    </div>

                    {/* 第二顆的DOWNLOAD按鈕 */}
                    <div className="row">
                        <div className="col-12 text-center">
                            <button
                                type="button"
                                className="btn btn-lg btn-warning mt-5 col-8 rounded-pill text-light"
                            >
                                DOWNLOAD
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- card --> */}
            {/* 用row-cols-數字去控制一行有多少個 */}
            <div className="card-group row row-cols-2 row-cols-md-2 row-cols-lg-3 my-1 mx-3 p-3 card-house">
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
                                    底片／FILM-1
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
                                <img className="img-fluid" src={Img3} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    底片／FILM-2
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
                                <img className="img-fluid" src={Img4} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    底片/FILM-3
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
                                <img className="img-fluid" src={Img5} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    底片/FILM-4
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
                                <img className="img-fluid" src={Img6} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    底片/FILM-5
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
                                <img className="img-fluid" src={Img7} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    底片/FILM-6
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
                                <img className="img-fluid" src={Img8} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    底片/FILM-7
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
                                <img className="img-fluid" src={Img9} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    底片/FILM-8
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

                {/* 第10張卡 */}
                <div className="col">
                    <div className="card-border ">
                        <div className="card-img ">
                            <div className="ratios">
                                <img className="img-fluid" src={Img10} alt="" />
                            </div>
                        </div>
                        <div className="card-body text-start p-0 my-2 my-md-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-title fw-bold">
                                    底片/FILM-9
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
            <h2 className="background">
                <div className="row justify-content-center diamod">
                    <svg
                        className="spinner"
                        width="65px"
                        height="65px"
                        viewBox="0 0 66 66"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* <div className="col-7 border mb-5"></div> */}
                        {/* <div className="diamod "></div> */}

                        <circle
                            className="path"
                            fill="none"
                            stroke-width="6"
                            stroke-linecap="round"
                            cx="33"
                            cy="33"
                            r="30"
                        ></circle>
                    </svg>
                </div>
                {/* <span>Line-behind title</span> */}
            </h2>
        </main>
    );
}

export default DownloadContent;
