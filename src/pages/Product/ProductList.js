// 內建
import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

// 第三方庫
import axios from 'axios';

// 通用
import { API_GET_PRODUCT_TAGS_SERIES } from '../../utils/config';
import {
    ProductsConsumer,
    useProductsContext,
} from '../../utils/context/ProductsContext';

// 自己
import Banner from '../../components/Product/Banner';
import FilterBar from '../../components/Product/FilterBar';

import ProductListContent from '../../components/Product/ProductListContent';
import Pagination from '../../components/Pagination/Pagination';
import Card from '../../components/Product/Card';

function ProductList(props) {
    // Context
    const products = useProductsContext();
    // 勾子
    const match = useRouteMatch();
    // 狀態
    const [option, setOption] = useState({
        series: 0,
        keyword: '',
        price: ['', ''],
        tags: [],
        orderby: 'created_at',
        limit: 8,
        offset: 0,
    });

    // 生命週期
    useEffect(
        function () {
            // products.reset(option);
        },
        [option]
    );

    // 測試
    useEffect(
        function () {
            console.log('option :>> ', option);
        },
        [option]
    );

    //渲染
    return (
        <>
            <Banner />
            <FilterBar option={option} setOption={setOption} />
            {/* <Pagination option={option} /> */}
            {/* 手機版 search & filter */}
            {/* <PSearchFilter state={state} setOption={setOption} /> */}
            {/* md 以上 search & filter */}
            {/* <FilterBarContent
                init={init}
                price={price}
                setPrice={setPrice}
                search={search}
                setSearch={setSearch}
                choseSeries={choseSeries}
                setChoseSeries={setChoseSeries}
                choseTags={choseTags}
                setChoseTags={setChoseTags}
            /> */}
            {/* <Tags
                init={init}
                choseTags={choseTags}
                setChoseTags={setChoseTags}
            /> */}

            {/* 商品卡 */}
            {/* <div className="container">
                <div className="card-group row my-4 mt-md-5 my-2">
                    {products.all.length > 0 ? (
                        products.all.map((v) => {
                            const goTo = `${match.path}/detail/${v.id}`;
                            return (
                                <div key={v.id} className="col-6 col-md-3">
                                    <Card
                                        product={v}
                                        goTo={goTo}
                                        find={products.find}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <h5 className="text-center">對不起，查無商品</h5>
                    )}
                </div>
            </div> */}
            {/* 頁籤 */}
            {/* <Pagination /> */}
        </>
    );
}

export default ProductList;

// products.reset(); //預設8筆
// products.reset({}); // 抓到全部商品
// product.reset({ limit: 30 });
//[]=> 監控狀態

// 四個表單元素的處理方法
