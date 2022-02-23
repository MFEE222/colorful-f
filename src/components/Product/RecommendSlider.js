import React, { Component } from 'react';
import Slider from 'react-slick';
import cardDemo from '../../images/navbar-ex-1.jpg';

export default class PauseOnHover extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
        };
        return (
            <div>
                <h2>Pause On Hover</h2>
                {/* <div className="card-border " data-tilt> */}
                {/* data-tilt 特效 看是否保留 */}
                {/* <LinkContainer
                    to={{
                        pathname: goTo,c
                        state: { product },
                    }}
                >
                    <div className="card-img ">
                        <div className="ratios">
                            <img src={imgUrl} alt="" />
                        </div>
                    </div>
                </LinkContainer>
                <div className="card-body text-start p-0 mt-2 mb-3">
                    <div className="d-flex justify-content-between align-items-baseline">
                        <p className="card-title mb-0">{product.name}</p>
                        <i className="fas fa-heart"></i>
                    </div>
                    <div className="text-start d-flex  justify-content-between">
                        NT. {product.price}
                        <button className="add-cart">加入購物車</button>
                    </div>
                </div>
            </div> */}
                <Slider {...settings}>
                    <div className="ratio ratio-1x1 p-3">
                        <img src={cardDemo} alt="" />
                    </div>
                    <div className="ratio ratio-1x1 p-3">
                        <img src={cardDemo} alt="" />
                    </div>
                    <div className="ratio ratio-1x1 p-3">
                        <img src={cardDemo} alt="" />
                    </div>
                    <div className="ratio ratio-1x1 p-3">
                        <img src={cardDemo} alt="" />
                    </div>
                    <div className="ratio ratio-1x1 p-3">
                        <img src={cardDemo} alt="" />
                    </div>
                    <div className="ratio ratio-1x1 p-3">
                        <img src={cardDemo} alt="" />
                    </div>
                    <div className="ratio ratio-1x1 p-3">
                        <img src={cardDemo} alt="" />
                    </div>
                    <div className="ratio ratio-1x1 p-3">
                        <img src={cardDemo} alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}
