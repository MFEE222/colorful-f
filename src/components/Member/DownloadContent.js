import React from 'react';

import Img1 from '../../images/婚禮_5.jpg';
import Img2 from '../../images/portrait01.jpg';

function DownloadContent(props) {
    return (
        <main className="col-12 col-md-10 member-profile-main">
            {/* <!-- title --> */}
            <div className="row m-3 border border-secondary rounded-3 p-3 align-items-center">
                <div className="col-7">
                    <h1>下載區</h1>
                </div>

                {/* <!-- search --> */}
                <div className="col-4">
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
            </div>

            {/* <!-- line --> */}
            <div className="row justify-content-center">
                <div className="col-6 border my-5"></div>
            </div>

            {/* <!-- top content left --> */}
            <div className="row justify-content-center">
                <div className="col-auto col-lg-5 p-0 ">
                    <div className="card border-0" style={{ width: '18rem' }}>
                        <img src={Img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="text-center fw-bold">WEDDING</h5>
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
                            <button
                                type="button"
                                className="btn btn-lg btn-warning mt-2 col-8 rounded-pill text-light"
                            >
                                DOWNLOAD
                            </button>
                            <button
                                type="button"
                                className="btn btn-lg btn-light border mt-2 col-2 rounded-pill text-black-50"
                            >
                                <i className="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="fs-5">YOU MAY ALSO LIKE</p>
                        </div>
                    </div>

                    {/* <!-- line --> */}
                    <div className="row justify-content-center">
                        <div className="col-4 border mb-5"></div>
                    </div>

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
            <div className="card-group row my-1 mx-5 p-3">
                <div className="col-6 col-md-3">
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
                <div className="col-6 col-md-3">
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
                <div className="col-6 col-md-3">
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
                <div className="col-6 col-md-3">
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
                <div className="col-6 col-md-3">
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
                <div className="col-6 col-md-3">
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
                <div className="col-6 col-md-3">
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
                <div className="col-6 col-md-3">
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
            <div className="row justify-content-center">
                <div className="col-7 border mb-5"></div>
            </div>
        </main>
    );
}

export default DownloadContent;
