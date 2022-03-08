import React from 'react';
import { Link } from 'react-router-dom';

//
import page1 from '../../images/教學頁/lr使用塗.jpg';
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
                            How to Install Lightroom Presets for Desktop and
                            Mobile?
                        </h1>
                        <p className="m-5 pe-5">
                            Build your site in a few seconds based on
                            ready-to-use blocks and sections, it's a lot of fun.
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
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <div className="overflow-hidden t-v-text">
                                <h2 className="my-3 fw-bold">
                                    Photographer's retouching process
                                </h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Eveniet natus expedita
                                    laboriosam ratione atque sapiente porro
                                    numquam enim neque dolor rem, fuga eos,
                                    maxime velit quibusdam veritatis recusandae
                                    harum voluptatum.
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
                                    src="https://www.youtube.com/embed/-EKH1f1DdC8"
                                    frameborder="0"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <div className="overflow-hidden t-v-text">
                                <h2 className="my-3 fw-bold">
                                    Photographer's retouching process
                                </h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Eveniet natus expedita
                                    laboriosam ratione atque sapiente porro
                                    numquam enim neque dolor rem, fuga eos,
                                    maxime velit quibusdam veritatis recusandae
                                    harum voluptatum.
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
