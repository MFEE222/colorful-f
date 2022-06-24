// 內建
import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

// 第三方庫
import axios from 'axios';

// 通用
import { routes } from '../../utils/routes';
import { API_GET_PRODUCT_TAGS_SERIES } from '../../utils/config';
import { useProductsContext } from '../../context/ProductsContext';
// 自己
import Banner from '../../components/Product/Banner';
import FilterBar from '../../components/Product/FilterBar';

import ProductListContent from '../../components/Product/ProductListContent';
import Pagination from '../../utils/Pagination';
import Card from '../../components/Product/Card';

function ProductList(props) {
    // Context
    const products = useProductsContext();

    const match = useRouteMatch();

    //渲染
    return (
        <>
            <Banner />
            <FilterBar />

            <div className="container">
                <div className="card-group row my-4 mt-md-5 my-2">
                    {products.all.length > 0 ? (
                        products.all.map(function (e) {
                            return (
                                <div key={e.id} className="col-6 col-md-3">
                                    <Card
                                        product={e}
                                        to={routes.productDetail(e.id)}
                                        onEvent={function () {
                                            products.find(e);
                                        }}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <h5 className="text-center">對不起，查無商品</h5>
                    )}
                </div>
            </div>

            <Pagination
                onEvent={function (e, limit, offset) {
                    products.optionLimitOffset(e, limit, offset);
                }}
                limit={8}
                total={products.total}
            />
        </>
    );
}

export default ProductList;

// products.reset(); //預設8筆
// products.reset({}); // 抓到全部商品
// product.reset({ limit: 30 });
//[]=> 監控狀態

// 四個表單元素的處理方法
