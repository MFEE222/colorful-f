import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import img from '../../images/navbar-ex-1.jpg';
function ReviewSlider(props) {
    //傳圖片陣列進來
    // const img = props.img;
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
                    <img src={img} />
                </div>
                <div className="box ratio ratio-1x1">
                    <img src={img} />
                </div>
                <div className="box ratio ratio-1x1">
                    <img src={img} />
                </div>
                <div className="box ratio ratio-1x1">
                    <img src={img} />
                </div>
                <div className="box ratio ratio-1x1">
                    <img src={img} />
                </div>
                {/* <div className="ratio">
                        <img src={img} />
                    </div>
                    <div className="ratio">
                        <img src={img} />
                    </div>
                    <div className="ratio">
                        <img src={img} />
                    </div> */}
            </Slider>
        </>
    );
}
export default ReviewSlider;
