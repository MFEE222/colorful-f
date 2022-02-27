import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

// 第三方庫
import axios from 'axios';
// import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
// import { css } from '@emotion/react';

// 共用
import { API_GET_PRODUCT_TAGS_SERIES } from '../../utils/config';
import {
    ProductsConsumer,
    useProductsContext,
} from '../../utils/context/ProductsContext';

//自己
import Banner from '../../components/Product/Banner';
import PSearchFilter from '../../components/Product/PSearchFilter';
import FilterBarContent from '../../components/Product/FilterBarContent';
import Tags from '../../components/Product/Tags';
import ProductListContent from '../../components/Product/ProductListContent';
import Pagination from '../../components/Pagination/Pagination';
import Card from '../../components/Product/Card';

function ProductList(props) {
    const { show } = props;
    const match = useRouteMatch();
    const products = useProductsContext();
    //狀態
    const [init, setInit] = useState({}); //初始的tags,series
    //記錄過濾的 狀態
    // const[filter,setFilter] = useState([]) //篩選條件放一起
    const [choseTags, setChoseTags] = useState(''); //表單元素（過濾用的）狀態 『事件處理器』
    //price seach series 狀態
    const [price, setPrice] = useState([0, 0]);
    const [search, setSearch] = useState('');
    const [choseSeries, setChoseSeries] = useState(0);

    // 生命週期
    useEffect(() => {
        (async () => {
            const response = await axios.get(API_GET_PRODUCT_TAGS_SERIES);
            setInit(response.data);
        })();
    }, []); // 初次掛載

    useEffect(
        function () {
            const option = {};
            // // if (choseSeries == 0) option.series = '';
            if (choseSeries == 1) {
                option.orderby = 'created_at';
                option.order = 1;
            }
            setTimeout(() => {
                products.reset({
                    series: choseSeries,
                    keyword: search,
                    price: price,
                    tags: choseTags,
                    limit: 8,
                });
            }, 300);
        },
        [(choseSeries, choseTags, search, price, products.all)]
    ); //TODO:放要監控的狀態 =>reset
    // products.reset(); //預設8筆
    // products.reset({}); // 抓到全部商品
    // product.reset({ limit: 30 });
    //[]=> 監控狀態

    // 四個表單元素的處理方法

    //渲染
    return (
        <>
            {/* （事件處理器）函式方法傳進去 */}
            <Banner init={init} choseSeries={choseSeries} />
            {/* 手機版 search & filter */}
            <PSearchFilter
                init={init}
                price={price}
                setPrice={setPrice}
                choseSeries={choseSeries}
                setChoseSeries={setChoseSeries}
                search={search}
                setSearch={setSearch}
                choseTags={choseTags}
                setChoseTags={setChoseTags}
            />
            {/* md 以上 search & filter */}
            <FilterBarContent
                init={init}
                price={price}
                setPrice={setPrice}
                search={search}
                setSearch={setSearch}
                choseSeries={choseSeries}
                setChoseSeries={setChoseSeries}
                choseTags={choseTags}
                setChoseTags={setChoseTags}
            />
            <Tags
                init={init}
                choseTags={choseTags}
                setChoseTags={setChoseTags}
            />

            {/* 商品卡 */}

            <div className="container">
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
            </div>
            <Pagination />
        </>
    );
}

export default ProductList;
