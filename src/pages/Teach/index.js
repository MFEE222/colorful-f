import React from 'react';
import { Link } from 'react-router-dom';

//
import page1 from '../../images/教學頁/teach-p1.jpg';
import page2 from '../../images/teach-p2.jpg';
import page4 from '../../images/教學頁/teach-p4.mp4';
import video from '../../images/英文版手機教學.mpg';
import Download from '../../images/教學頁/教學文件檔案.pdf';

function Teach() {
    return (
        <div className="teach">
            {/* <!-- 第一頁 --> */}
            <div className="align-items-center">
                <img className="page-one" src={page1} alt="" />
            </div>

            {/* <!-- 第二頁 --> */}
            {/* <!-- flex container --> */}
            <div className="justify-content-center align-items-center page-two">
                {/* <!-- flex item --> */}
                <div className="row">
                    <div className="col-12 col-lg-7 pt-5 page-two-headline overflow-hidden">
                        <h1 className="teach-font fs-1 fw-bold m-5">
                            如何在桌機及行動裝置上使用
                            <br /> Lightroom 濾鏡包<br />
                            點選下載按鈕，教您如何快速上手
                        </h1>
                        <p className="m-5 pe-5">
                            修圖不求人！新手小白也能輕鬆上手！附件為文件說明檔‧
                        </p>
                        <div className="shape-ex3 m-5 overflow-hidden">
                            <p>PDF download ↗</p>
                        </div>
                        {/* <Link to={Download} download>
                            <button
                                type="button"
                                class="btn btn-primary btn-lg"
                            >
                                Download
                            </button>
                        </Link> */}
                    </div>

                    {/* <!-- flex item --> */}
                    <div className="col-12 col-lg-5 p-0">
                        <img className="test w-100" src={page2} alt="" />
                    </div>
                </div>
            </div>

            {/* <!-- 第三頁 --> */}
            <div className="justify-content-center align-items-center page-three">
                <div className="col-12 ps-5 pt-5">
                    <h1 className="video-teach">
                        <i className="fas fa-play pe-3"></i>Video Teaching
                    </h1>
                </div>

                <div className="row">
                    {/* <!-- 第一個影片BOX --> */}
                    <div className="col-12 col-lg-6 vd-box">
                        <div className="box bg-light px-3 py-3 m-5">
                            <div className="ratios">
                                {/* <video
                                    className="w-100 video"
                                    autoPlay
                                    muted
                                    loop
                                    preload="true"
                                >
                                    <source
                                        src={video}
                                        alt="food-banner"
                                        type="video/mp4"
                                    />
                                </video> */}
                                <iframe
                                    className="video"
                                    src="https://www.youtube.com/embed/-EKH1f1DdC8"
                                    frameborder="0"
                                    title="YouTube video player"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <div className="overflow-hidden t-v-text">
                                <h2 className="my-3 fw-bold">
                                    專業攝影師修圖過程
                                </h2>
                                <p>
                                    1.步驟繁雜
                                    <br />
                                    2.需要長時間累積經驗
                                    <br />
                                    3.新手無法立即上手
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 第二個影片BOX --> */}
                    <div className="col-12 col-lg-6 vd-box">
                        <div className="box bg-light px-3 py-3 m-5">
                            <div className="ratios">
                                <iframe
                                    className="video"
                                    src="https://www.youtube.com/embed/6hPpFZKeaIY"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <div className="overflow-hidden t-v-text">
                                <h2 className="my-3 fw-bold">
                                    新手攝影師修圖過程
                                </h2>
                                <p>
                                    1.任何程度都能輕易上手
                                    <br />
                                    2.多款濾鏡隨時切換
                                    <br />
                                    3.全國最完整的中英文教學
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- 第四頁 --> */}
                <div className="page-four">
                    <video
                        className="w-100 video"
                        autoPlay
                        muted
                        loop
                        preload="true"
                    >
                        <source
                            src={page4}
                            alt="food-banner"
                            type="video/mp4"
                        />
                    </video>
                    {/* <img class="image-4" src={} alt="" /> */}
                </div>
            </div>

            {/* <!-- <div class="row vh-100">
              <section id="LP4">
                  <h1>測試用</h1>
                  <img class="test" src="./../../images/R.jpg" />
              </section>
          </div> --> */}
        </div>
    );
}

export default Teach;
