// 內建
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { ProductsConsumer } from '../../utils/context/ProductsContext';

// 通用
import { routes } from '../../utils/routes';

function Card(props) {
    // 屬性
    const { product, to, onEvent } = props;

    // 商品封面圖
    const cover = process.env.REACT_APP_API_URL + '/' + product.img + '/a1.jpg';
    // console.log('cover :>> ', cover);

    // 渲染
    return (
        <>
            <div className="card-border ">
                <LinkContainer to={{ pathname: to }} onClick={onEvent}>
                    <div className="card-img ">
                        <div className="ratios">
                            <img src={cover} alt="" />
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
