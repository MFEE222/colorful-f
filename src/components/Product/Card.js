// 內建
import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { ProductsConsumer } from '../../context/ProductsContext';
import { useCartContext } from '../../context/CartContext';
// 通用
//
import { useAuthContext } from '../../context/AuthContext';

function Card(props) {
    // Context
    const cart = useCartContext();
    // 屬性
    const { product, to, onEvent } = props;
    // 狀態
    const [isCart, setIsCart] = useState(false);
    const [isHeart, setIsHeart] = useState(false);

    //style
    const [active, setActive] = useState(false);

    // 商品封面圖
    const cover = process.env.REACT_APP_API_URL + '/' + product.img + '/a1.jpg';
    // console.log('cover :>> ', cover);
    const auth = useAuthContext();

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
                        <i
                            className={
                                active
                                    ? 'fas fa-heart heart active'
                                    : 'fas fa-heart '
                            }
                            onClick={() => {
                                // console.log('active :>> ', active);
                                setActive(!active);
                                if (!auth.current) {
                                    auth.setShowLoginModal(true);
                                }
                            }}
                        ></i>
                    </div>
                    <div className="text-start d-flex  justify-content-between">
                        NT. {product.price}
                        <i
                            className="fas fa-shopping-cart"
                            onClick={function () {
                                if (isCart) {
                                    cart.handleRemove(product);
                                    setIsCart(false);
                                } else {
                                    cart.handleAdd(product);
                                    setIsCart(true);
                                }
                            }}
                        ></i>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;
