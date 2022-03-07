import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';
import Slider from 'react-slick';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { routes } from '../../utils/routes';
import portrait from '../../images/人像B.jpg';
import portrait1 from '../../images/人像A.jpg';
import circle from '../../images/colorful.svg';
import circle1 from '../../images/colorful_1.svg';
import video from '../../images/home/bg-banner-home.mp4';
import Slideshow from './slider';
import Game from '../Game';

function Home() {
    return (
        <div className="home">
            {/* 影片 */}
            <div className="h-page1" id="page1">

                <video className="w-100" autoPlay muted loop preload="true">
                    <source src={video} alt="home-video" type="video/mp4"/>

                </video>

                {/* <div className="scroll-down"></div> */}
            </div>
            {/* before/after */}
            <div className="h-page2" id="page2">
                <div className="container">
                    <div className="row ">
                        <div className="col-12 h-text">
                            <div>
                                <h4 className="h-p2-title">
                                    還在擔心拍不出好看的照片嗎
                                </h4>
                                <h4 className="h-p2-title">
                                    拯救廢片！手殘也能修出大片！
                                </h4>
                            </div>
                            <div>
                                {/* <p className="h-p2-text">
                                    你羨慕 IG 上那些看起來很厲害的攝影作品嗎？
                                    <br />
                                    但礙於繁瑣的修圖令人退卻
                                    <br />
                                    美感直覺更是望天興嘆
                                    <br />
                                    別擔心！ 在 COLORFUL
                                    肯定能找到最適合你的濾鏡
                                </p> */}
                            </div>
                            <div>
                                <p className="h-p2-text">
                                    我行我色，讓你輕鬆玩色
                                    <br />
                                    什麼 color 都能 cover
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* slide 系列圖 */}
            <div className="h-page3">
                <Slideshow />
            </div>

        
            {/* 網站介紹 */}
            <div className="h-page4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-5">
                            <h2 className="title">COLORFUL</h2>
                            <div className="text">
                                <p>
                                    無論你是部落客、Vlogger、內容創作者，或你只是喜歡使用社群媒體與朋友分享生活，為照片加上完美的調色或濾鏡，都可讓照片從平凡晉升為非凡！除了花費時間學習如何編輯
                                    Instagram
                                    人氣照片，獲得和諧一致、高質感的影像色調以外，你還可以直接使用市面上熱門的照片濾鏡
                                    ，它能讓你的照片快速變成專業攝影照。
                                    不論是任何程度的使用者都適合，介面簡單且濾鏡功能強大，能夠協助創作者快速製作出精美的圖像作品。
                                </p>
                                <br />
                                <p>
                                    COLORFUL的定位就是讓新手小白在不費力的過程中一鍵套用，
                                    也能輕鬆濾出滿意的數位圖像，將您的攝影技巧提升到更高境界，
                                    用對比度和飽和度等編輯工具讓照片更突出，也可以使用顆粒效果和淡化效果來增添質感並模仿類比電影效果。
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
