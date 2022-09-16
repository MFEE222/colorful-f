import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import IMG_PRODUCTS_ALL_BANNER from 'images/banner/all-banner.jpg';
import IMG_PRODUCTS_NEWEST_BANNER from 'images/banner/newest-banner.jpg';
import IMG_PRODUCTS_FOOD_BANNER from 'images/banner/food-banner.mp4';
import IMG_PRODUCTS_WEDDING_BANNER from 'images/banner/wedding-banner.mp4';
import IMG_PRODUCTS_FILM_BANNER from 'images/banner/film-banner.mp4';
import IMG_PRODUCTS_SCENERY_BANNER from 'images/banner/scenery-banner.mp4';
import IMG_PRODUCTS_PORTRAIT_BANNER from 'images/banner/portrait-banner.mp4';
import { routes } from 'utils/routes';

function Banner(props) {
    // hook
    const location = useLocation();
    let imgBanner = '';

    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [location.pathname]);

    switch (location.pathname) {
        case routes.product.newest:
            imgBanner = (
                <div className="ratios">
                    <img src={IMG_PRODUCTS_NEWEST_BANNER} alt="newest-banner" />
                </div>
            );
            break;
        case routes.product.food:
            imgBanner = (
                // <video className="w-100" controls autoPlay muted loop preload="true">
                <video
                    className="w-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="true"
                    ref={videoRef}
                >
                    <source
                        src={IMG_PRODUCTS_FOOD_BANNER}
                        alt="food-banner"
                        type="video/mp4"
                    />
                </video>
            );
            break;
        case routes.product.wedding:
            imgBanner = (
                // <video className="w-100" controls autoPlay muted loop preload="true">
                <video
                    className="w-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="true"
                    ref={videoRef}
                >
                    <source
                        src={IMG_PRODUCTS_WEDDING_BANNER}
                        alt="food-banner"
                        type="video/mp4"
                    />
                </video>
            );
            break;
        case routes.product.film:
            imgBanner = (
                // <video className="w-100" controls autoPlay muted loop preload="true">
                <video
                    className="w-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="true"
                    ref={videoRef}
                >
                    <source
                        src={IMG_PRODUCTS_FILM_BANNER}
                        alt="food-banner"
                        type="video/mp4"
                    />
                </video>
            );
            break;
        case routes.product.scenery:
            imgBanner = (
                // <video className="w-100" controls autoPlay muted loop preload="true">
                <video
                    className="w-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="true"
                    ref={videoRef}
                >
                    <source
                        src={IMG_PRODUCTS_SCENERY_BANNER}
                        alt="food-banner"
                        type="video/mp4"
                    />
                </video>
            );
            break;
        case routes.product.portrait:
            imgBanner = (
                // <video className="w-100" controls autoPlay muted loop preload="true">
                <video
                    className="w-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="true"
                    ref={videoRef}
                >
                    <source
                        src={IMG_PRODUCTS_PORTRAIT_BANNER}
                        alt="food-banner"
                        type="video/mp4"
                    />
                </video>
            );
            break;
        case routes.product.self:
        default:
            imgBanner = (
                <div className="ratios">
                    <img src={IMG_PRODUCTS_ALL_BANNER} alt="all-banner" />
                </div>
            );
    }
    // console.log('imgBanner :>> ', imgBanner);

    return (
        <>
            <div className="product-list">
                <div className="banner">
                    <div className="banner-img">{imgBanner}</div>
                </div>
            </div>
        </>
    );
}

export default Banner;
