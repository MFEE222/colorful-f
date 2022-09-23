import { Routes, Route } from 'react-router-dom';
import Teamdo from 'images/多多.jpg';
import Teamji from 'images/致緯.jpg';
import Teamla from 'images/頌蓮.jpg';
import Teamfi from 'images/博榆.jpg';
import Teamti from 'images/詩葶.jpg';
import Github from 'images/git.png';
import './index.scss';

function Team(props) {
    const render = () => (
        <main className="t-main">
            <div className="container">
                <div className="page-one" id="table">
                    <div className="t-head" id="centeralign">
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
                                <a
                                    href="https://github.com/queena40723"
                                    target="_blank"
                                >
                                    <img
                                        className="github"
                                        src={Github}
                                        alt=""
                                    />
                                </a>
                                <p className="d-block">
                                    <b>前端</b>{' '}
                                    商品列表、商品細節、Navbar一、會員下載區、會員評論區二
                                    <br />
                                    <b>後端</b>{' '}
                                    API串接、資料庫建立、資料庫更新：會員下載功能、評論上傳圖檔功能
                                    <br />
                                    <b>其他</b> 資料蒐集、文案撰寫、企劃書撰寫
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
                                <a
                                    href="https://github.com/pyshif"
                                    target="_blank"
                                >
                                    <img
                                        className="github"
                                        src={Github}
                                        alt=""
                                    />
                                </a>
                                <p className="d-block">
                                    <b>前端</b> 會員訂單區、會員個人資料區
                                    Navbar二
                                    <br />
                                    <b>後端</b>{' '}
                                    API串接、資料庫建立、資料庫更新：會員下載功能、評論上傳圖檔功能
                                    <br />
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
                                <a
                                    href="https://github.com/Art-liang"
                                    target="_blank"
                                >
                                    <img
                                        className="github"
                                        src={Github}
                                        alt=""
                                    />
                                </a>
                                <p className="d-block">
                                    <b>前端</b>{' '}
                                    會員下載區一、會員付款區、使用教學、心理測驗
                                    <br />
                                    <b>後端</b> 資料庫建立
                                    <br />
                                    <b>其他</b>{' '}
                                    資料蒐集、文案撰寫、企劃書撰寫、簡報、商品素材數據製作、Banner設計、主頁影片剪輯、使用教學影片剪輯、
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
                                <a
                                    href="https://github.com/chiang-song-lang"
                                    target="_blank"
                                >
                                    <img
                                        className="github"
                                        src={Github}
                                        alt=""
                                    />
                                </a>
                                <p className="d-block">
                                    <b>前端</b>{' '}
                                    首頁、團隊介紹、會員登入、會員忘記密碼、會員註冊、會員信箱區、會員評論區一、購物車二、Footer
                                    <br />
                                    <b>後端</b>{' '}
                                    API串接、資料庫建立、資料庫更新：首頁、會員註冊、會員登入、會員忘記密碼、會員信箱區
                                    <br />
                                    <b>其他</b> 資料蒐集、文案撰寫、企劃書撰寫
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
                                <h5 className="text-n2">組員</h5>
                                <a
                                    href="https://github.com/jim60702"
                                    target="_blank"
                                >
                                    <img
                                        className="github"
                                        src={Github}
                                        alt=""
                                    />
                                </a>
                                <p className="d-block">
                                    <b>前端</b> 購物車一、會員蒐藏區
                                    <br />
                                    <b>後端</b>{' '}
                                    API串接、資料庫建立、資料庫更新：會員蒐藏區
                                    <br />
                                    資料蒐集、文案撰寫、企劃書撰寫、簡報
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row t-skill">
                        <TeamSkill />
                        <div className="col-12 col-lg-3 t-left">
                            <h2 className="t-k-title">Skill Tree</h2>
                        </div>

                        <div className="col-12 col-lg-9 t-right">
                            <img className="t-circle" src={SkillPic} alt="" />
                        </div>
                    </div> */}

                    <div className="row t-contact">
                        <h2 className="t-c-title">Contact us</h2>
                        <div className="col-12 col-lg-6 t-c-left">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7441.974339534148!2d121.54158120775575!3d25.032108628815774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd379a5ec97%3A0xedc006d25a9e35df!2z6LOH5bGV5ZyL6Zqb6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1645680791896!5m2!1szh-TW!2stw"
                                className="t-map"
                                allowFullScreen=""
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
                                        placeholder="message"
                                    ></textarea>
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

    return (
        <>
            <Routes>
                <Route index element={render()}></Route>
            </Routes>
        </>
    );
}

export default Team;
