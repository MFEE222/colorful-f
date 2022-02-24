// 內建
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

//第3方
import { Label, Segment } from 'semantic-ui-react';
// 共用
import { IMG_URL } from '../../utils/config';
import { routes } from '../../utils/routes';

// 自己
import { imgName } from '../../utils/imageName';

// 圖片
import cardDemo from '../../images/navbar-ex-1.jpg';

function Card(props) {
    // 屬性
    const { product, goTo } = props;

    // 變數
    const imgUrl = `${IMG_URL}/${product.img}${imgName.a0}`;

    // 渲染
    return (
        <>
            <div className="card-border " data-tilt>
                {/* data-tilt 特效 看是否保留 */}
                <LinkContainer
                    to={{
                        pathname: goTo,
                        state: { product },
                    }}
                    onClick={function () {
                        // product.reset(product);
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
                        <div>
                            <i className="fas fa-heart heart"></i>
                            <i className="fas fa-cart-plus"></i>
                        </div>
                    </div>
                    <div className="text-start d-flex  justify-content-between">
                        NT. {product.price}
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </>
    );
}
export default Card;
