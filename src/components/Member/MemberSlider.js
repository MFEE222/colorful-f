import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import img from '../../images/navbar-ex-1.jpg';
function MemberSlider(props) {
    //傳圖片陣列進來
    const { imgs } = props;
    // console.log('props :>> ', img);
    const settings = {
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Slider {...settings} className="review-slider">
                {/* //傳圖片陣列進來 map 出來*/}
                <div className="box ratio ratio-1x1">
                    {img.map(function (e, j) {
                        return <img key={j} src={e} />;
                    })}
                </div>
            </Slider>
        </>
    );
}
export default MemberSlider;
