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
import PSearchFilter from '../../components/Product/PSearchFilter';
import FilterBarContent from '../../components/Product/FilterBarContent';
import Tags from '../../components/Product/Tags';
import ProductListContent from '../../components/Product/ProductListContent';
import Pagination from '../../components/Pagination/Pagination';
import Card from '../../components/Product/Card';

function ProductList(props) {
    // Context
    const products = useProductsContext();
    // 勾子
    const match = useRouteMatch();
    //狀態
    const [init, setInit] = useState({});
    const [choseSeries, setChoseSeries] = useState(0);
    const [search, setSearch] = useState('');
    const [price, setPrice] = useState([0, 0]);
    const [choseTags, setChoseTags] = useState([]);

    console.log('match.path :>> ', match.path);

    // 生命週期
    useEffect(() => {
        // 取得系列、篩選標籤
        (async () => {
            const response = await axios.get(API_GET_PRODUCT_TAGS_SERIES);
            setInit(response.data);
        })();
    }, []);

    useEffect(
        function () {
            const option = {};
            // 篩選系列
            switch (choseSeries) {
                case 0: // 全部
                    break;
                case 1: // 最新
                    option.orderby = 'created_at';
                    option.order = 1; // DESC
                    break;
                case 2: // 食物
                    option.series = 2;
                    break;
                case 3: // 婚禮
                    option.series = 3;
                    break;
                case 4: // 復古
                    option.series = 4;
                    break;
                case 5: // 風景
                    option.series = 5;
                    break;
                case 6: // 人像
                    option.series = 6;
                    break;
                default:
            }
            // 篩選關鍵字
            if (search !== '') {
                option.keyword = search;
            }
            // 篩選價格
            if (price[0] !== 0 && price[1] !== 0) {
                option.price = price;
                option.orderby = 'price';
                // option.order = ASC;
            }
            // 篩選標籤
            if (choseTags.length != 0) {
                option.tags = choseTags;
            }
            // 篩選分頁
            option.limit = 8;
            option.offset = 1;
            // 發送請求
            setTimeout(() => {
                products.reset(option);
            }, 300);
        },
        [choseSeries, search, price, choseTags]
    );

    // 測試
    useEffect(
        function () {
            console.log('products.all :>> ', products.all);
        },
        [products.all]
    );

    useEffect(
        function () {
            console.log('choseSeries :>> ', choseSeries);
        },
        [choseSeries]
    );

    useEffect(
        function () {
            console.log('search :>> ', search);
        },
        [search]
    );

    useEffect(
        function () {
            console.log('price :>> ', price);
        },
        [price]
    );

    useEffect(
        function () {
            console.log('choseTags :>> ', choseTags);
        },
        [choseTags]
    );

    //渲染
    return (
        <>
            {/* （事件處理器）函式方法傳進去 */}
            <Banner init={init} choseSeries={choseSeries} />
            {/* 手機版 search & filter */}
            {/* <PSearchFilter
                init={init}
                price={price}
                setPrice={setPrice}
                choseSeries={choseSeries}
                setChoseSeries={setChoseSeries}
                search={search}
                setSearch={setSearch}
                choseTags={choseTags}
                setChoseTags={setChoseTags}
            /> */}
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
