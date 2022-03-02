import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';
import { API_GET_PRODUCTS } from '../config';
import '../others/status';
import { STATUS_MSG } from '../others/status';
import { routes } from '../routes';

// Context
const ProductsContext = React.createContext(
    'please wrap element in <ProductProvider></ProductProvider>'
);

// Provider
// 元件作用域只有狀態改變時才會進入
export function ProductsProvider(props) {
    // hook
    const location = useLocation();
    // state
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [product, setProduct] = useState({});
    const [option, setOption] = useState({
        series: 0,
        keyword: '',
        price: [0, 0],
        tags: [],
        orderby: 'price',
        order: -1,
        limit: 8,
        offset: 0,
    });

    // variable (shared)
    // const { option } =
    //     props.option !== undefined ? props : { option: { limit: 8 } };
    const { other } = props.other !== undefined ? props : { other: {} };
    const shared = {
        other,
        option, // 設定 axios 參數
        optionSeries,
        optionKeyword,
        optionKeywordReset,
        optionPriceRange,
        optionPriceSort,
        optionTags,
        optionLimitOffset,
        find, // 請求單筆商品資料
        reset, // axios 請求商品資料（陣列）
        current: product, // 取用當前商品（單一，商品細節頁用）
        all: products, // 取用所有商品資料（陣列）
        total,
    };

    // 生命週期
    useEffect(function () {
        // DidMount
        (async function () {
            // 初始化系列
            // console.log('location.pathname :>> ', location.pathname);
            // console.log('routes.productFood :>> ', routes.productFood);
            switch (location.pathname) {
                case routes.productNewest:
                    optionSeries(null, 1);
                    break;
                case routes.productFood:
                    optionSeries(null, 2);
                    break;
                case routes.productWedding:
                    optionSeries(null, 3);
                    break;
                case routes.productFilm:
                    optionSeries(null, 4);
                    break;
                case routes.productScenery:
                    optionSeries(null, 5);
                    break;
                case routes.productPortrait:
                    optionSeries(null, 6);
                    break;
                case routes.product:
                    optionSeries(null, 0);
                    break;
                default:
                    break;
            }
            // axios 取得資料
            reset();
            // 此函式由於改變 option 狀態所以會渲染兩次 (目前存在渲染次數多餘的問題，待優化)
        })();

        // willUnMount
        return function () {
            console.log('Here is WillUnMount');
        };
    }, []);

    useEffect(
        function () {
            // DidUpdate
            reset();
            // 測試
            // console.log('option :>> ', option);
        },
        [option]
    );

    // 函數
    // 此方法會以添加的方式，將新資料放入 Products 狀態
    async function find(p) {
        // console.log('Function find | p :>> ', p);
        // 檢查當前商品資料是否就是要尋找的 (注意 undefined === undefined :>> true)
        // console.log('product :>> ', product);
        if (product.id && product.id === p.id) return;
        // 尋找本地商品陣列中是否已存在
        const poolLocal = [...products];
        if (
            poolLocal.some(function (e) {
                if (e.id === p.id) {
                    console.log('Find in local:>> ', e);
                    setProduct(e);
                    return true;
                }
                return false;
            })
        ) {
            return;
        }

        // 尋找後端資料庫中是否有該筆資料
        try {
            const res = await axios.get(API_GET_PRODUCTS, {
                params: {
                    ids: [p.id],
                },
            });
            // console.log('res :>> ', res);
            // 無該筆資料
            if (res.data.statusCode & 1) {
                throw new Error(STATUS_MSG[res.data.statusCode]);
            }
            // 有該筆資料
            const poolServer = res.data.products;
            if (poolServer) {
                // console.log('Find in server :>> ', poolServer[0]);
                setProduct(poolServer[0]);
                poolLocal.push(poolServer[0]);
                poolLocal.sort((a, b) => a.id - b.id);
                setProducts(poolLocal);
            }
        } catch (err) {
            setProduct(null);
            console.log(err);
        }
    }

    // 此方法會直接向後端獲取商品資料，並覆蓋掉 Products 狀態
    async function reset(option = shared.option) {
        // console.log('Function: reset | option :>> ', option);
        try {
            const res = await axios.get(API_GET_PRODUCTS, {
                params: option,
            });
            // console.log('res :>> ', res);
            if (res.data.statusCode & 1) {
                throw new Error(STATUS_MSG[res.data.statusCode]);
            }
            // if (res.data.products) {
            //     setProducts(res.data.products);
            //     setProduct(res.data.products[0]);
            //     setTotal(res.data.total);
            // }

            setProducts(res.data.products);
            setProduct(res.data.products[0]);
            setTotal(res.data.total);
        } catch (err) {
            console.log(err);
        }
    }
    // Option 設定
    function optionSeries(e, series_id) {
        const opt = { ...option };
        opt.series = series_id;
        opt.offset = 0;
        setOption(opt);
    }
    function optionKeyword(e, str) {
        const opt = { ...option };
        opt.keyword = str;
        opt.offset = 0; // 重置頁籤
        setOption(opt);
    }
    function optionKeywordReset(e) {
        const opt = { ...option };
        opt.keyword = '';
        opt.offset = 0;
        setOption(opt);
    }
    function optionPriceRange(e, arr) {
        const opt = { ...option }; // 注意，第二層展開運算子無法深拷貝
        opt.price = [...arr];
        opt.orderby = 'price';
        opt.offset = 0;
        setOption(opt);
    }
    function optionPriceSort(e, sort = 0) {
        const opt = { ...option };
        opt.orderby = 'price';
        opt.order = Number(sort);
        opt.offset = 0;
        setOption(opt);
    }
    function optionTags(e, tag_id) {
        const opt = { ...option };
        let tags;
        if (opt.tags.includes(tag_id)) {
            tags = opt.tags.filter(function (e) {
                return e != tag_id;
            });
        } else {
            tags = [...opt.tags];
            tags.push(tag_id);
        }
        opt.tags = tags;
        opt.offset = 0;
        setOption(opt);
    }
    function optionLimitOffset(e, limit, offset) {
        const opt = { ...option };
        opt.limit = limit;
        opt.offset = offset;
        setOption(opt);
    }
    // 測試用
    // useEffect(
    //     function () {
    //         console.log('shared.all :>> ', shared.all);
    //         console.log('DidUpdate : current :>> ', shared.current);
    //     },
    //     [product, products]
    // );

    // 渲染
    return (
        <ProductsContext.Provider value={shared}>
            {props.children}
        </ProductsContext.Provider>
    );
}

// Consumer
export function ProductsConsumer(props) {
    // props.children must be {function (value) {......}}
    return (
        <ProductsContext.Consumer>{props.children}</ProductsContext.Consumer>
    );
}

// useContext
export function useProductsContext() {
    return React.useContext(ProductsContext);
}

// State Format
// products = {
//     id,
//     name,
//     price,
// }

// shared (此設計允許使用者加入共享資料，但若同名時會被預設值覆蓋)
// let { shared } = props;
// if (shared === undefined) {
//     shared = {};
// }
// shared.say = 'Hey, Good Night';
