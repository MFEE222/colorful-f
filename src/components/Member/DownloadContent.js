import React from 'react';

import Img1 from '../../images/book1.jpg';
import Img2 from '../../images/book1.jpg';
import Img3 from '../../images/book1.jpg';
import Img4 from '../../images/film003.jpg';
import Img5 from '../../images/film004.jpg';
import Img6 from '../../images/film005.jpg';
import Img7 from '../../images/film006.jpg';
import Img8 from '../../images/film007.jpg';
import Img9 from '../../images/film008.jpg';
import Img10 from '../../images/film009.jpg';

function DownloadContent(props) {
    return (
        <main className="col-12 col-md-10 px-5 member-profile-main border">
            {/* <!-- title --> */}
            {/* <div className="col-7"> */}
            {/* me是右邊的意思 用margin去擠開 */}
            {/* <!-- line --> */}

            {/* <!-- 上半部 --> */}
            <div className="row m-5 border p-2 justify-content-evenly position-relative topSectionBorder">
                {/* <!-- 小圓形區塊 --> */}

                <div className="row col-5">
                    {/* <!-- <div id="circle"></div> --> */}
                    <div className="d-flex flex-row justify-content-center align-items-end">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <button
                                type="button"
                                className="btn btn-default btn-circle border me-4 mb-2 fw-bold "
                            >
                                FO
                            </button>
                            <span className="me-4 mb-1 text-black-50">3</span>
                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <button
                                type="button"
                                className="btn btn-default btn-circle border me-4 mb-2 fw-bold"
                            >
                                D
                            </button>
                            <span className="me-4 mb-1 text-black-50">3</span>
                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <button
                                type="button"
                                className="btn btn-default btn-circle border me-4 mb-2 fw-bold"
                            >
                                N
                            </button>
                            <span className="me-4 mb-1 text-black-50">3</span>
                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <button
                                type="button"
                                className="btn btn-default btn-circle border me-4 mb-2 fw-bold"
                            >
                                FI
                            </button>
                            <span className="me-4 mb-1 text-black-50">3</span>
                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <button
                                type="button"
                                className="btn btn-default btn-circle border me-4 mb-2 fw-bold"
                            >
                                P
                            </button>
                            <span className="me-4 mb-1 text-black-50">4</span>
                        </div>
                    </div>
                </div>

                {/* <!-- 搜尋 / 篩選區塊 --> */}
                <div className="col-12 col-lg-4">
                    <div className="col-12 mb-2">
                        <input
                            type="text"
                            className="form-control fs-5"
                            id="exampleFormControlInput1"
                            placeholder="搜尋"
                        />
                    </div>
                    <div className="">
                        <button
                            type="button"
                            className="btn btn-outline-secondary col-12 fs-5"
                        >
                            <i className="fas fa-caret-down me-2"></i>
                            依照購買日期排序
                        </button>
                    </div>
                </div>
                <div className="position-absolute circle-number ">
                    {/* 加入數字 */}
                    <p className="toponenumber">5</p>
                    <p className="topnumber">
                        已擁有的
                        <br />
                        色調包總數
                    </p>
                </div>
            </div>
            {/* 寫在這一行裡面 */}

            {/* 上面這一條是線  這裡的程式碼是第一張圖*/}
            <div className="row justify-content-around mt-5">
                <div className="col-auto col-xl-5 p-0 ">
                    <div className="card border-0" style={{ width: '30rem' }}>
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
                <div className="col-12 col-xl-5">
                    <div className="row">
                        <div className="col-12 text-center mb-4">
                            {/* 第一顆按鈕 */}
                            <button
                                type="button"
                                className="btn btn-lg btn-light mt-2 col-8 rounded-pill text-dark fw-bold downloadButton"
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
                        <div className="col-12 text-center mb-3">
                            <h4 className="fs-5">YOU MAY ALSO LIKE</h4>
                        </div>
                    </div>

                    {/* <!-- line --> */}
                    <div className="row justify-content-center">
                        <div className="col-4 border mb-5"></div>

                        <p className="cardbodyareatext">
                            The upholstery of the bar stool consists of straight
                            polyester fibres with small gaps between them
                            providing comfy elasticity and better ventilation so
                            you enjoy a pleasant temperature when sitting. The
                            seat's bowl-shaped bottom is adapted for your sit
                            bones and those of most of the world's population.
                            And with an innovative technique, the seat's padding
                            is shaped to maximise your comfort.
                        </p>
                    </div>
                    {/* 第二顆的DOWNLOAD按鈕 */}
                    {/* <div className="row">
                        <div className="col-6 text-center">
                            <button
                                type="button"
                                className="btn btn-lg btn-light mt-5 col-8 rounded-pill text-black-50 downloadButton"
                            >
                                未下載
                            </button>
                        </div>
                        <div className="col-6 text-center">
                            <button
                                type="button"
                                className="btn btn-lg btn-light mt-5 col-8 rounded-pill text-black-50 downloadButton"
                            >
                                已下載
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* 150-152是隔開的線 */}
            {/* <div className="row">
                <div className="col-6 border my-5 "></div>
            </div> */}
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
