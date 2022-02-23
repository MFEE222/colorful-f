import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { API_GET_PRODUCT_DETAIL } from '../config';

// 取得 Products 狀態
// 是否會因為 products 狀態更新而同步更新造成無限迴圈 or 影響效能
import { useProductsContext } from './ProductsContext';

// Context
const ProductDetailContext = React.createContext(
    'please wrap element in <ProductDetailProvider></ProductDetailProvider>'
);

// Provider
export function ProductDetailProvider(props) {
    // state, hook
    const products = useProductsContext();
    const [productDetail, setProductDetail] = useState({});

    // variable
    const { option } =
        props.option !== undefined ? props : { option: { id: 1 } };
    const shared = {
        state: productDetail,
        option,
        reset,
    };

    // 生命週期
    useEffect(function () {
        // search data from `products` 狀態
        const p = products.find(function (e) {
            return e.id === option.id;
        });

        if (p) setProductDetail(p);
        // axios
        else reset();
    }, []);

    // 函數
    async function reset(option = shared.option) {
        // console.log('option :>> ', option);
        try {
            const res = await axios.get(API_GET_PRODUCT_DETAIL, {
                params: option,
            });
            // console.log('res :>> ', res);
            setProductDetail(res.data);
        } catch (err) {
            console.log(__filename, ': axios products api failed...');
        }
    }

    // 渲染
    return (
        <ProductDetailContext.Provider value={shared}>
            {props.children}
        </ProductDetailContext.Provider>
    );
}

// Consumer
export function ProductDetailConsumer(props) {
    return (
        <ProductDetailContext.Consumer>
            {props.children}
        </ProductDetailContext.Consumer>
    );
}

// useContext
export function useProductsContext() {
    return React.useContext(ProductDetailContext);
}
