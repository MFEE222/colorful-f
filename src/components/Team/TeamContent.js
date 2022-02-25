import React from 'react';
import Teamdo from '../../images/多多.jpeg';
import Teamji from '../../images/致緯.jpeg';
import Teamla from '../../images/頌蓮.jpeg';
import Teamfi from '../../images/博榆.jpeg';
import Teamti from '../../images/詩葶.jpeg';
import SkillPic from '../../images/圓餅圖.png';

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
                                <img src={Teamdo} alt="" />
                            </div>
                        </div>
                        {/* <!-- 文字 --> */}
                        <div className="col-12 col-lg-6 t-text-p">
                            <div className="left">
                                <h2 className="d-block text-n">陶靖宇</h2>
                                <h5 className="text-n2">組長</h5>
                                <p className="d-block">
                                    <b>前端</b> 商品列表 商品內容 Navbar<br/>
                                    <b>後端</b> MySQL資料庫建立 API串接<br/>
                                    資料蒐集、文案撰寫、企劃書撰寫、簡報
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 2. 圖文 + 文字方塊 --> */}
                    <div className="row flex-row-reverse t-aboutus">
                        {/* <!-- 圖片 --> */}
                        <div className="col-12 col-lg-6 p-0 pic-right">
                            <div className="ratio ratio-16x9">
                                <img src={Teamfi} alt="" />
                            </div>
                        </div>
                        {/* <!-- 文字 --> */}
                        <div className="col-12 col-lg-6 t-text-p">
                            <div className="left">
                                <h2 className="d-block text-n">陳博榆</h2>
                                <h5 className="text-n2">技術長</h5>
                                <p className="d-block">
                                    <b>前端</b> 會員相關頁面 訂單管理 Navbar<br/>
                                    <b>後端</b> MySQL資料庫建立 API串接<br/>
                                    資料蒐集、文案撰寫、企劃書撰寫、簡報
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 3. 圖文 + 文字方塊 --> */}
                    <div className="row t-aboutus">
                        {/* <!-- 圖片 --> */}
                        <div className="col-12 col-lg-6 p-0">
                            <div className="ratio ratio-16x9">
                                <img src={Teamti} alt="" />
                            </div>
                        </div>
                        {/* <!-- 文字 --> */}
                        <div className="col-12 col-lg-6 t-text-p">
                            <div className="left">
                                <h2 className="d-block text-n">梁詩葶</h2>
                                <h5 className="text-n2">美術長</h5>
                                <p className="d-block">
                                    <b>前端</b> 會員相關頁面 教學頁<br/>
                                    <b>後端</b> MySQL資料庫建立 API串接<br/>
                                    資料蒐集、文案撰寫、企劃書撰寫、簡報
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 4. 圖文 + 文字方塊 --> */}
                    <div className="row flex-row-reverse t-aboutus">
                        {/* <!-- 圖片 --> */}
                        <div className="col-12 col-lg-6 p-0">
                            <div className="ratio ratio-16x9">
                                <img src={Teamla} alt="" />
                            </div>
                        </div>
                        {/* <!-- 文字 --> */}
                        <div className="col-12 col-lg-6 t-text-p">
                            <div className="left">
                                <h2 className="d-block text-n">蔣頌蓮</h2>
                                <h5 className="text-n2">組員</h5>
                                <p className="d-block">
                                    <b>前端</b> 登入 註冊 忘記密碼 會員相關頁面 關於我們 Footer<br/>
                                    <b>後端</b> MySQL資料庫建立 API串接<br/>
                                    資料蒐集、文案撰寫、企劃書撰寫、簡報
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 5. 圖文 + 文字方塊 --> */}
                    <div className="row t-aboutus">
                        {/* <!-- 圖片 --> */}
                        <div className="col-12 col-lg-6 p-0">
                            <div className="ratio ratio-16x9">
                                <img src={Teamji} alt="" />
                            </div>
                        </div>
                        {/* <!-- 文字 --> */}
                        <div className="col-12 col-lg-6 t-text-p">
                            <div className="left">
                                <h2 className="d-block text-n">江致緯</h2>
                                <h5 className="text-n2">組長</h5>
                                <p className="d-block">
                                    <b>前端</b> 主頁 購物車 會員相關頁面<br/>
                                    <b>後端</b> MySQL資料庫建立 API串接<br/>
                                    資料蒐集、文案撰寫、企劃書撰寫、簡報
                                </p>
                            </div>
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
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7441.974339534148!2d121.54158120775575!3d25.032108628815774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd379a5ec97%3A0xedc006d25a9e35df!2z6LOH5bGV5ZyL6Zqb6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1645680791896!5m2!1szh-TW!2stw"
                                className="t-map"
                                allowfullscreen=""
                                loading="lazy"
                            ></iframe>
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
                                    <label htmlFor="email"></label>
                                </div>
                                <div className="t-floating">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        cols="70"
                                        rows="5"
                                    >
                                        message
                                    </textarea>
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
