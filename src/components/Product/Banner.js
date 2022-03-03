import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
// 通用
import {
    IMG_PRODUCTS_ALL_BANNER,
    IMG_PRODUCTS_NEWEST_BANNER,
    IMG_PRODUCTS_FOOD_BANNER,
    IMG_PRODUCTS_WEDDING_BANNER,
    IMG_PRODUCTS_FILM_BANNER,
    IMG_PRODUCTS_SCENERY_BANNER,
    IMG_PRODUCTS_PORTRAIT_BANNER,
} from '../../utils/config';
import { routes } from '../../utils/routes';

// Context
import { useProductsContext } from '../../utils/context/ProductsContext';

function Banner(props) {
    // hook
    const match = useRouteMatch();
    const products = useProductsContext();
    // state
    // console.log('match.path :>> ', match.path);
    let imgBanner = '';

    // 選擇要顯示的 Banner (是否可以做一個 OnEvent 在 ProductsContext 中，讓個元件註冊 option didupdate 後要執行的 callback)
    // FIXME: 影片播放中途路由切換，無法正確變更成新的影片
    switch (match.path) {
        case routes.productNewest:
            imgBanner = (
                <div className="ratios">
                    <img src={IMG_PRODUCTS_NEWEST_BANNER} alt="newest-banner" />
                </div>
            );
            break;
        case routes.productFood:
            imgBanner = (
                // <video className="w-100" controls autoPlay muted loop preload="true">
                <video className="w-100" autoPlay muted loop preload="true">
                    <source
                        src={IMG_PRODUCTS_FOOD_BANNER}
                        alt="food-banner"
                        type="video/mp4"
                    />
                </video>
            );
            break;
        case routes.productWedding:
            imgBanner = (
                // <video className="w-100" controls autoPlay muted loop preload="true">
                <video className="w-100" autoPlay muted loop preload="true">
                    <source
                        src={IMG_PRODUCTS_WEDDING_BANNER}
                        alt="food-banner"
                        type="video/mp4"
                    />
                </video>
            );
            break;
        case routes.productFilm:
            imgBanner = (
                // <video className="w-100" controls autoPlay muted loop preload="true">
                <video className="w-100" autoPlay muted loop preload="true">
                    <source
                        src={IMG_PRODUCTS_FILM_BANNER}
                        alt="food-banner"
                        type="video/mp4"
                    />
                </video>
            );
            break;
        case routes.productScenery:
            imgBanner = (
                // <video className="w-100" controls autoPlay muted loop preload="true">
                <video className="w-100" autoPlay muted loop>
                    <source
                        src={IMG_PRODUCTS_SCENERY_BANNER}
                        alt="food-banner"
                        type="video/mp4"
                    />
                </video>
            );
            break;
        case routes.productPortrait:
            imgBanner = (
                // <video className="w-100" controls autoPlay muted loop preload="true">
                <video className="w-100" autoPlay muted loop preload="true">
                    <source
                        src={IMG_PRODUCTS_PORTRAIT_BANNER}
                        alt="food-banner"
                        type="video/mp4"
                    />
                </video>
            );
            break;
        case routes.product:
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
