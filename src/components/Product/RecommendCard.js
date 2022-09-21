import Slider from 'react-slick';
import { useLocation } from 'react-router-dom';

// 共用
import { routes, reverse } from 'utils/routes';
import { API_URL } from 'utils/config';
import { useProductsContext } from 'contexts/ProductsContext';

// 自己
import Card from './Card';

// 圖片
import decBar from 'images/dec-bar.png';

function RecommendCard(props) {
    const location = useLocation();
    const products = useProductsContext();
    const recommend = props.recommend.recommend;
    //設定slider
    var settings = {
        centerPadding: 30,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };
    // 渲染
    return (
        <>
            <div className="container">
                <div className="recommend mt-5">
                    <div className="recommend-title">
                        <div className="text-box">
                            <div className="phone-title">
                                <h3 className="">熱銷排行</h3>
                                <div className="mb-2">
                                    <img
                                        className="d-md-none"
                                        src={decBar}
                                        alt=""
                                    />
                                </div>
                                <p className="d-none d-md-block">
                                    暢銷色調值得您擁有 強化風格與色調
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="recommend-card row flex-nowrap overflow-scroll ">
                        <Slider {...settings}>
                            {recommend &&
                                recommend.map((v) => {
                                    const goTo = `${location.pathname}/detail/${v.id}`;
                                    return (
                                        <div
                                            key={v.id}
                                            className="col-6 col-md-3 solve-padding"
                                        >
                                            <Card
                                                className="mx-4"
                                                product={v}
                                                to={reverse(
                                                    routes.product.detail,
                                                    { detail: v.id }
                                                )}
                                                onEvent={function () {
                                                    products.find(v);
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecommendCard;
