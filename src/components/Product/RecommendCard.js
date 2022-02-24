// 內建
import React, { useEffect, useState } from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

// 第三方
import axios from 'axios';

// 共用
import { API_URL } from '../../utils/config';

// 自己
import Card from './Card';

// 圖片
import cardDemo from '../../images/navbar-ex-1.jpg';
import decBar from '../../icons/dec-bar.png';

function RecommendCard(props) {
    // 狀態、勾子
    const [products, setProducts] = useState([]); // 和商品列表的 products 狀態不一樣
    const match = useRouteMatch();

    // 函數
    const fetchRank = async () => {
        // const api = `${API_URL}/product/rank`;
        // const response = await axios.get(api);
        // console.log('response :>> ', response);
        // setProducts(response.data.rank);
    };

    // 生命週期
    useEffect(() => {
        fetchRank();
    }, []); // 掛載

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
                    <div className="recommend-card row">
                        {products &&
                            products.map((product) => {
                                const api = `/product/detail/${product.id}`;
                                /* const api = {routes.productDetail/${product.id}};  */
                                return (
                                    <div className="col-6 col-md-3">
                                        <Card
                                            key={product.id}
                                            product={product}
                                            goTo={api}
                                            className="link"
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecommendCard;
