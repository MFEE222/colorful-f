import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { API_GET_PRODUCTS } from '../config';
import '../others/status';
import { STATUS_MSG } from '../others/status';

// Context
const ProductsContext = React.createContext(
    'please wrap element in <ProductProvider></ProductProvider>'
);

// Provider
export function ProductsProvider(props) {
    // state, hook
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    // const products = [
    //     { id: 1, name: 'rosa' },
    //     { id: 2, name: 'chris' },
    // ];

    // variable (shared)
    const { option } =
        props.option !== undefined ? props : { option: { limit: 8 } };
    const { other } = props.other !== undefined ? props : { other: {} };
    const shared = {
        other,
        option, // 設定 axios 參數
        find, // 請求單筆商品資料
        reset, // axios 請求商品資料（陣列）
        current: product, // 取用當前商品（單一，商品細節頁用）
        all: products, // 取用所有商品資料（陣列）
    };

    // 生命週期
    useEffect(async function () {
        reset();
        // 測試用
        // const res = await axios.get(API_GET_PRODUCTS, {
        //     params: {
        //         keyword: '羅曼',
        //         date: ['2011-07-22', '2022-01-01'],
        //         // series: 6,
        //         price: [0, 0],
        //         favorites: 33,
        //         owners: 222,
        //         stars: 4.5,
        //         offset: 3,
        //         order: 0,
        //         limit: 3,
        //     },
        // });

        return function () {
            console.log('Here is WillUnMount');
        };
    }, []);

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
            if (res.data.products) {
                setProducts(res.data.products);
                setProduct(res.data.products[0]);
            }
        } catch (err) {
            console.log(err);
        }
    }

    // 測試用
    // useEffect(
    //     function () {
    //         console.log('DidUpdate : all :>> ', shared.all);
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
