// 內建
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

// 第三方
import { Label, Segment } from 'semantic-ui-react';
// 共用
import { IMG_URL } from '../../utils/config';
import { routes } from '../../utils/routes';

// 自己
import { imgName } from '../../utils/imageName';
//context
// import ProductListContext from './ProductListContent';
// 圖片
import cardDemo from '../../images/navbar-ex-1.jpg';

function Card(props) {
    // 屬性
    const { product, goTo, find } = props;

    // 變數
    const imgUrl = `${IMG_URL}/${product.img}${imgName.a0}`;

    // 渲染
    return (
        <>
            <div className="card-border ">
                <LinkContainer
                    to={{
                        pathname: goTo,
                    }}
                    onClick={function () {
                        console.log('goTo :>> ', goTo);
                        console.log('product :>> ', product);
                        find(product);
                    }}
                >
                    <div className="card-img ">
                        <div className="ratios">
                            <img src={imgUrl} alt="" />
                        </div>
                    </div>
                </LinkContainer>
                <div className="card-body  row d-flex text-start justify-content-between p-0 mt-2 mb-4 align-items-baseline">
                    <div className="d-flex justify-content-between align-items-baseline mb-1">
                        <p className="card-title mb-0">{product.name}</p>
                        <i className="fas fa-heart heart"></i>
                    </div>
                    <div className="text-start d-flex  justify-content-between">
                        NT. {product.price}
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;
