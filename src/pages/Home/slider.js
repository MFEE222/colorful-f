import React from 'react';
import ReactDOM from 'react-dom';
import { LinkContainer } from 'react-router-bootstrap';
import classNames from 'classnames';
import {
    IMG_HOME_PORTRAIT_BANNER,
    IMG_HOME_SCENERY_BANNER,
    IMG_HOME_FILM_BANNER,
    IMG_HOME_WEDDING_BANNER,
    IMG_HOME_FOOD_BANNER,
} from 'utils/config';
import { routes } from 'utils/routes';

const slides = [
    {
        city: 'Scenery',
        country: '24+ Adventure Lightroom Presets',
        img: 'https://tour.taitung.gov.tw/image/26555/1024x768',
        to: routes.product.scenery,
    },
    {
        city: 'Food',
        country: 'Make their shots tasty and powerful',
        img: 'https://as.chdev.tw/web/article/c/f/4/c13e2895-f32f-40da-be70-38ef46142e431571737530.jpg',
        to: routes.product.food,
    },
    {
        city: 'Wedding',
        country: 'Light and airy photography style',
        img: 'https://wedding.esdlife.com/timthumb.php?src=https://wedding.esdlife.com/uploads/2020/10/%E8%A5%BF%E5%BC%8F%E5%A9%9A%E7%A6%AE.jpg',
        to: routes.product.wedding,
    },
    {
        city: 'Film',
        country: 'Classic Film Presets',
        img: 'https://www.wdreamcastle.com/wp-content/uploads/2020/06/JJJ_1676-scaled.jpg',
        to: routes.product.film,
    },
    {
        city: 'Portrait',
        country: 'The Perfect Skin Tone Presets',
        img: 'https://www.cafephoto.pro/wp4/wp-content/uploads/2018/11/2018-11-14-17.51.32-1-1067x700.jpg',
        to: routes.product.portrait,
    },
];
// const slides = [
//     {
//         city: 'Paris',
//         country: 'France',
//         img: IMG_HOME_FOOD_BANNER,
//     },
//     {
//         city: 'Singapore',
//         img: IMG_HOME_WEDDING_BANNER,
//     },
//     {
//         city: 'Prague',
//         country: 'Czech Republic',
//         img: IMG_HOME_FILM_BANNER,
//     },
//     {
//         city: 'Amsterdam',
//         country: 'Netherlands',
//         img: IMG_HOME_SCENERY_BANNER,
//     },
//     {
//         city: 'Moscow',
//         country: 'Russia',
//         img: IMG_HOME_PORTRAIT_BANNER,
//     },
// ];
class CitiesSlider extends React.Component {
    constructor(props) {
        super(props);

        this.IMAGE_PARTS = 4;

        this.changeTO = null;
        this.AUTOCHANGE_TIME = 4000;

        this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }

    componentWillUnmount() {
        window.clearTimeout(this.changeTO);
    }

    componentDidMount() {
        this.runAutochangeTO();
        setTimeout(() => {
            this.setState({ activeSlide: 0, sliderReady: true });
        }, 0);
    }

    runAutochangeTO() {
        this.changeTO = setTimeout(() => {
            this.changeSlides(1);
            this.runAutochangeTO();
        }, this.AUTOCHANGE_TIME);
    }

    changeSlides(change) {
        window.clearTimeout(this.changeTO);
        // const { length } = this.props.slides;
        const { length } = slides;
        const prevSlide = this.state.activeSlide;
        let activeSlide = prevSlide + change;
        if (activeSlide < 0) activeSlide = length - 1;
        if (activeSlide >= length) activeSlide = 0;
        this.setState({ activeSlide, prevSlide });
    }

    render() {
        const { activeSlide, prevSlide, sliderReady } = this.state;
        return (
            <div
                className={classNames('slider', {
                    's--ready': sliderReady,
                })}
            >
                {/* <p className="slider__top-heading">Travelers</p> */}
                <div className="slider__slides">
                    {/* {this.props.slides.map((slide, index) => ( */}
                    {slides.map((slide, index) => (
                        <div
                            className={classNames('slider__slide', {
                                's--active': activeSlide === index,
                                's--prev': prevSlide === index,
                            })}
                            key={slide.city}
                        >
                            <div className="slider__slide-content">
                                <h3 className="slider__slide-subheading">
                                    {slide.country || slide.city}
                                </h3>
                                <h2 className="slider__slide-heading">
                                    {slide.city.split('').map((l, i) => (
                                        <span key={i}>{l}</span>
                                    ))}
                                </h2>
                                <LinkContainer to={slide.to}>
                                    <p className="slider__slide-readmore">
                                        read more
                                    </p>
                                </LinkContainer>
                            </div>
                            <div className="slider__slide-parts">
                                {[...Array(this.IMAGE_PARTS).fill()].map(
                                    (x, i) => (
                                        <div
                                            className="slider__slide-part"
                                            key={i}
                                        >
                                            <div
                                                className="slider__slide-part-inner"
                                                style={{
                                                    backgroundImage: `url(${slide.img})`,
                                                }}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="slider__control"
                    onClick={() => this.changeSlides(-1)}
                />
                <div
                    className="slider__control slider__control--right"
                    onClick={() => this.changeSlides(1)}
                />
            </div>
        );
    }
}

export default CitiesSlider;
