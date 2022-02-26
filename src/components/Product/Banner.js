import React from 'react';
import bannerDemo from '../../images/banner-demo-2.png';
import { IMG_URL, API_URL } from '../../utils/config';

function Banner(props) {
    const { series } = props.init;
    const banner = `${IMG_URL}/images/product/fo/fo-banner.gif`;

    console.log('series :>> ', series);
    return (
        <>
            <div className="product-list">
                {/* banner */}
                <div className="banner">
                    <div className="banner-img">
                        <div className="ratios">
                            <img src={banner} alt="" />
                        </div>
                    </div>
                    {/* banner遮罩 */}
                    {/* <div className="img-clip d-none d-md-block"> */}
                    {/* animate__animated animate__fadeInUp */}
                </div>
            </div>
        </>
    );
}

export default Banner;
