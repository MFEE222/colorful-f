import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
// import img from '../../images/navbar-ex-1.jpg';
import { API_URL, IMG_URL, IMG_URL2 } from '../../utils/config';

function ReviewSlider(props) {
    //傳圖片陣列進來
    const settings = {
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const { img } = props;
    return (
        <>
            <Slider {...settings} className="review-slider">
                {/* //傳圖片陣列進來 map 出來*/}
                {img.map((v, i) => {
                    return (
                        <div className="box ratio ratio-1x1" key={i}>
                            <img src={v} />
                        </div>
                    );
                })}
            </Slider>
        </>
    );
}
export default ReviewSlider;
