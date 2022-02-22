import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { API_GET_PRODUCTS } from '../config';

// Context
const ProductsContext = React.createContext(
    'please wrap element in <ProductProvider></ProductProvider>'
);

// Provider
export function ProductsProvider(props) {
    // state, hook
    const [products, setProducts] = useState([]);
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
        state: products, // 取得狀態
        addState, // 新增資料（設定狀態）
        option, // 取得、設定 API GET 參數
        reset, // 重新獲取商品資料
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
    function addState(product) {
        // console.log('typeof products :>> ', typeof products);
        // console.log('products :>> ', products);
        // console.log('Array.isArray(products) :>> ', Array.isArray(products));
        const p = [...products];
        if (p.some((e) => e.id === product.id)) return;
        console.log('here');
        p.push(product);
        p.sort((a, b) => a.id - b.id);
        setProducts(p);
    }

    // 此方法會直接向後端獲取商品資料，並覆蓋掉 Products 狀態
    async function reset(option = this.option) {
        // console.log('option :>> ', option);
        try {
            const res = await axios.get(API_GET_PRODUCTS, {
                params: option,
            });
            // console.log('res :>> ', res);
            // console.log('__filename :>> ', __filename);
            setProducts(res.data);
        } catch (err) {
            console.log(__filename, ': axios products api failed...');
        }
    }

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
