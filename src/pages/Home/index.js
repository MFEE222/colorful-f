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
import Slideshow from './slider';

function Home() {
    
    return (
        <div className="home">
            <div className="h-page1" id="page1">
                <iframe
                    className="h-video"
                    width="100%"
                    height="1000px"
                    src="https://www.youtube.com/embed/Jut9YPJGhjE?rel=0&autoplay=1&loop=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>

                <div className="scroll-down"></div>
            </div>
            <div className="h-page2" id="page2">
                {/* <div className="orbit"></div> */}

                <div className="p2-text">
                    <h2 className="title">擔心照片不好看嗎？</h2>

                    <h5 className="sub-title">
                        新手小白也能
                        <br />
                        輕鬆修圖！！
                    </h5>
                </div>
                <div className="p2-product">
                    <img className="pic" src={portrait} alt="" />
                    <img className="pic" src={portrait1} alt="" />
                </div>
                <div className="p2-more">
                    <Link to={routes.product} className="more">
                        VIEW MORE
                    </Link>
                </div>
            </div>
            <div className="h-page3">
                <div className="slider">
                    <div id="arrow-left" className="arrow"></div>
                    <div className="slide slide1"></div>

                    {/* <div className="slide slide2"></div>
                    <div className="slide slide3"></div>
                    <div className="slide slide4"></div>
                    <div className="slide slide5"></div> */}
                    <div id="arrow-right" className="arrow"></div>
                </div>
            </div>
            <div className="h-page4">
                    <Slideshow />
            </div>
        </div>
    );
}

export default Home;
