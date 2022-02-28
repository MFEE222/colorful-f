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

function Banner(props) {
    let imgBanner = '';
    const match = useRouteMatch();
    // console.log('match.path :>> ', match.path);

    // 選擇要顯示的 Banner
    switch (match.path) {
        case routes.productNewest:
            imgBanner = IMG_PRODUCTS_NEWEST_BANNER;
            break;
        case routes.productFood:
            imgBanner = IMG_PRODUCTS_FOOD_BANNER;
            break;
        case routes.productWedding:
            imgBanner = IMG_PRODUCTS_WEDDING_BANNER;
            break;
        case routes.productFilm:
            imgBanner = IMG_PRODUCTS_FILM_BANNER;
            break;
        case routes.productScenery:
            imgBanner = IMG_PRODUCTS_SCENERY_BANNER;
            break;
        case routes.productPortrait:
            imgBanner = IMG_PRODUCTS_PORTRAIT_BANNER;
            break;
        case routes.product:
        default:
            // imgBanner = IMG_PRODUCTS_ALL_BANNER;
            imgBanner = IMG_PRODUCTS_FOOD_BANNER;
    }
    // console.log('imgBanner :>> ', imgBanner);

    return (
        <>
            <div className="product-list">
                <div className="banner">
                    <div className="banner-img">
                        <div className="ratios">
                            <img src={imgBanner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
