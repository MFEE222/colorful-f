import React from 'react';

function Teach() {
    return (
        <div className="container-fluid teach">
            {/* <!-- 第一頁 --> */}
            <div className="row justify-content-center align-items-center page-one">
                {/* <!-- 標題 --> */}
                <div className="col-12 col-sm-4 p-3 page-one-left">
                    <h1 className="text-center">COLORFUL</h1>
                    <br />
                    <p className="text-center">
                        A Better Way to Organize Your Recipe
                    </p>
                </div>

                {/* <!-- 右側圖 --> */}
                <div className="col-12 col-sm-8 row page-one-right">
                    {/* <!-- iphone - 1 --> */}
                    <div className="col-12 col-sm-6 text-center iphone">
                        <div className="iphone-screen">
                            <img src="../../images/iphone-p1.png" alt="" />
                        </div>
                        {/* <!-- 螢幕內容全部用這個包 --> */}
                        {/* <!-- <div className="screen-content">
                          <div className="product">
                              <img src="../../images/product-img.jpeg" alt=""/>
                          </div>
                      </div> --> */}
                    </div>
                    {/* <!-- iphone - 2 --> */}
                    <div className="col-12 col-sm-6 text-center iphone">
                        <div className="iphone-screen">
                            <img src="../../images/iphone-p1.png" alt="" />
                        </div>
                        {/* <!-- 螢幕內容全部用這個包 --> */}
                        <div className="screen-content">
                            <img src="../../images/product-img.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- 第二頁 --> */}
            {/* <!-- flex container --> */}
            <div className="row justify-content-center align-items-center page-two">
                {/* <!-- flex item --> */}
                <div className="col-12 col-lg-7 page-two-headline overflow-hidden">
                    <h1 className="teach-font fs-1 fw-bold m-5 pe-4">
                        How to Install Lightroom Presets for Desktop and Mobile?
                    </h1>
                    <p className="m-5 pe-5">
                        Build your site in a few seconds based on ready-to-use
                        blocks and sections, it's a lot of fun.
                    </p>
                    <div className="shape-ex3 m-5 overflow-hidden">
                        <p>PDF download ↗</p>
                    </div>
                </div>

                {/* <!-- flex item --> */}
                <div className="col-12 col-lg-5 p-0">
                    <img
                        className="test w-100"
                        src="./../../images/iphone-p2.jpg"
                        alt=""
                    />
                </div>
            </div>

            {/* <!-- 第三頁 --> */}
            <div className="row justify-content-center align-items-center page-three">
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
                                <iframe
                                    className="video"
                                    src="https://www.youtube.com/embed/-EKH1f1DdC8"
                                    frameborder="0"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <div
                                className="overflow-hidden t-v-text"
                            >
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
                            <div
                                className="overflow-hidden t-v-text"
                            >
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
                <div className="page-four px-0">
                    <img class="image-4" src="./../../images/R.jpg" alt="" />
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
