import React from 'react';
import TeamPic from '../../images/team.jpg';
import SkillPic from '../../images/圓餅圖.png';
import Map from '../../images/map.png';

function TeamContent(props) {
    return (
        <main className="t-main">
            <div className="container">
                <div className="page-one">
                    <div className="t-head">
                        <h2 className="t-title">OUR TEAM</h2>
                        <p className="t-subtitle">COLORFUL</p>
                    </div>
                    {/* <!-- 1. 圖文 + 文字方塊 --> */}
                    <div className="row t-aboutus">
                        {/* <!-- 圖片 --> */}
                        <div className="col-12 col-lg-6 p-0">
                            <div className="ratio ratio-16x9">
                                <img src={TeamPic} alt="" />
                            </div>
                        </div>
                        {/* <!-- 文字 --> */}
                        <div className="col-12 col-lg-6 t-text">
                            <h2 className="d-block text-n">陶靖宇</h2>
                            <p className="d-block text-p">
                                切版、RWD、動態效果
                                <br />
                                商品列表 商品內容
                                <br />
                                Functional map、Site map建置
                                <br /> MYSQL資料庫建立
                                <br />
                                網站UI/UX設計與規劃
                                <br />
                                資料蒐集、文案撰寫 企劃書撰寫
                            </p>
                        </div>
                    </div>
                    {/* <!-- 2. 圖文 + 文字方塊 --> */}
                    <div className="row flex-row-reverse t-aboutus">
                        {/* <!-- 圖片 --> */}
                        <div className="col-12 col-lg-6 p-0 pic-right">
                            <div className="ratio ratio-16x9">
                                <img src={TeamPic} alt="" />
                            </div>
                        </div>
                        {/* <!-- 文字 --> */}
                        <div className="col-12 col-lg-6 t-text">
                            <h2 className="d-block text-n">陳博榆</h2>
                            <p className="d-block text-p">
                                切版、RWD、動態效果
                                <br />
                                商品列表 商品內容
                                <br />
                                Functional map、Site map建置
                                <br /> MYSQL資料庫建立
                                <br />
                                網站UI/UX設計與規劃
                                <br />
                                資料蒐集、文案撰寫 企劃書撰寫
                            </p>
                        </div>
                    </div>
                    {/* <!-- 3. 圖文 + 文字方塊 --> */}
                    <div className="row t-aboutus">
                        {/* <!-- 圖片 --> */}
                        <div className="col-12 col-lg-6 p-0">
                            <div className="ratio ratio-16x9">
                                <img src={TeamPic} alt="" />
                            </div>
                        </div>
                        {/* <!-- 文字 --> */}
                        <div className="col-12 col-lg-6 t-text">
                            <h2 className="d-block text-n">江致緯</h2>
                            <p className="d-block text-p">
                                切版、RWD、動態效果
                                <br />
                                商品列表 商品內容
                                <br />
                                Functional map、Site map建置
                                <br /> MYSQL資料庫建立
                                <br />
                                網站UI/UX設計與規劃
                                <br />
                                資料蒐集、文案撰寫 企劃書撰寫
                            </p>
                        </div>
                    </div>
                    {/* <!-- 4. 圖文 + 文字方塊 --> */}
                    <div className="row flex-row-reverse t-aboutus">
                        {/* <!-- 圖片 --> */}
                        <div className="col-12 col-lg-6 p-0">
                            <div className="ratio ratio-16x9">
                                <img src={TeamPic} alt="" />
                            </div>
                        </div>
                        {/* <!-- 文字 --> */}
                        <div className="col-12 col-lg-6 t-text">
                            <h2 className="d-block text-n">梁詩葶</h2>
                            <p className="d-block text-p">
                                切版、RWD、動態效果
                                <br />
                                商品列表 商品內容
                                <br />
                                Functional map、Site map建置
                                <br /> MYSQL資料庫建立
                                <br />
                                網站UI/UX設計與規劃
                                <br />
                                資料蒐集、文案撰寫 企劃書撰寫
                            </p>
                        </div>
                    </div>
                    {/* <!-- 5. 圖文 + 文字方塊 --> */}
                    <div className="row t-aboutus">
                        {/* <!-- 圖片 --> */}
                        <div className="col-12 col-lg-6 p-0">
                            <div className="ratio ratio-16x9">
                                <img src={TeamPic} alt="" />
                            </div>
                        </div>
                        {/* <!-- 文字 --> */}
                        <div className="col-12 col-lg-6 t-text">
                            <h2 className="d-block text-n">蔣頌蓮</h2>
                            <p className="d-block text-p">
                                切版、RWD、動態效果
                                <br />
                                商品列表 商品內容
                                <br />
                                Functional map、Site map建置
                                <br /> MYSQL資料庫建立
                                <br />
                                網站UI/UX設計與規劃
                                <br />
                                資料蒐集、文案撰寫 企劃書撰寫
                            </p>
                        </div>
                    </div>
                    <div className="row t-skill">
                        <div className="col-12 col-lg-3 t-left">
                            <h2 className="t-k-title">Skill Tree</h2>
                            <p>
                                React
                                <br />
                                Javascript
                                <br />
                                PHP
                                <br />
                                Node.js
                                <br />
                            </p>
                        </div>
                        <div className="col-12 col-lg-9 t-right">
                            <img className="t-circle" src={SkillPic} alt="" />
                        </div>
                    </div>

                    <div className="row t-contact">
                        <h2 className="t-c-title">Contact us</h2>
                        <div className="col-12 col-lg-6 t-c-left">
                            <img className="t-map" src={Map} alt="" />
                        </div>
                        <div className="col-12 col-lg-6 t-c-right">
                            <form action="">
                                <div className="t-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="email"
                                    />
                                    <label htmlfor="email"></label>
                                </div>
                                <div className="t-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="text"
                                        placeholder="text"
                                    />
                                    <label htmlfor="text"></label>
                                </div>
                                <button className="t-c-btn" type=" submit">
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TeamContent;
