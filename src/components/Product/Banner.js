import React, { useState, useEffect } from 'react';
import bannerDemo from '../../images/banner-demo-2.png';
import { IMG_URL } from '../../utils/config';
function Banner(props) {
    //傳進來的系列choseSeris => series filter choseSeries  照片 =>series.img => 設定current
    const { choseSeries } = props;
    const [current, setCurrent] = useState('');
    const { series } = props.init;
    return (
        <>
            <div className="product-list">
                {/* banner */}
                <div className="banner">
                    <div className="banner-img">
                        <div className="ratios">
                            <img src={bannerDemo} alt="" />
                        </div>
                    </div>
                    {/* banner遮罩 */}
                    {/* <div className="img-clip d-none d-md-block"> */}
                    {/* animate__animated animate__fadeInUp */}

                    <div className="describe">
                        <h3 className="d-none d-md-block c-title ">風景</h3>
                        <p>
                            因其細緻自然的色調而成為人像、和婚禮攝影師的最愛。低對比度柔和的色調這款濾鏡可以讓您營造出美麗而寧靜的美感
                        </p>
                    </div>
                    <div className="title-block">
                        <div className="title-dec d-none d-md-block"></div>
                        <h3 className="e-title">Scenery</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
