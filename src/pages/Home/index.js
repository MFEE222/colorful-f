import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Slider from 'react-slick';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { routes } from 'utils/routes';
import Slideshow from './slider';
import Game from 'pages/Game';

//圖片

//
// import Game from '../Game';
// import Landing from './landing';

//
import portrait from 'images/人像B.jpg';
import portrait1 from 'images/人像A.jpg';
import circle from 'images/colorful.svg';
import circle1 from 'images/colorful_1.svg';
import page4 from 'images/b0.jpg';
import page2 from 'images/home/home-page2.jpg';
import video from 'images/home/bg-banner-index.mp4';
import game from 'images/home/home-page4.jpg';

function Home() {
    return (
        <div className="home">
            {/* 影片 */}
            <div className="h-page1" id="page1">
                <video
                    className="w-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="true"
                >
                    <source src={video} alt="home-video" type="video/mp4" />
                </video>

                {/* <div className="scroll-down"></div> */}
            </div>
            {/* before/after */}
            <div className="h-page2" id="page2">
                <img className="p2-pic" src={page2} alt="" />
            </div>
            {/* slide 系列圖 */}
            <div className="h-page3">
                <Slideshow />
            </div>
            {/* <Game /> */}
            <Link to={routes.game}>
                <button className="game-btn">
                    <img className="h-game" src={game} alt="" />
                </button>
            </Link>

            {/* 網站介紹 */}
            <div className="h-page4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-5 page4-text">
                            <h2 className="title">COLORFUL</h2>
                            <div className="text">
                                <p>
                                    無論你是部落客、Vlogger，或只是喜歡在社群上與朋友分享生活
                                    <br />
                                    為照片套上屬於你的專屬濾鏡，都可以讓照片從平凡晉升為非凡！
                                    <br />
                                    你還可以直接使用熱門的照片濾鏡
                                    ，它能讓你的照片快速變成專業
                                    <br />
                                    攝影照，
                                    不論任何程度的使用者都適合，介面簡單且濾鏡功能強大
                                    <br />
                                    能夠協助創作者快速製作出精美的圖像作品。
                                    讓您充分展現自我， <br />
                                    我們提供照片濾鏡工具以及靈感，讓您有個地方做自己。
                                </p>
                                <br />
                                <p>
                                    COLORFUL的定位就是讓新手小白在不費力的過程中一鍵套用
                                    <br />
                                    也能輕鬆濾出滿意的數位圖像，將您的攝影技巧提升到更高境界
                                    <br />
                                    【美化圖片 –
                                    輕鬆玩出質感照】多款風格濾鏡，怎麼選都好看！
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
