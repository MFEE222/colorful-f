import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { API_GET_PRODUCT_DETAIL } from '../config';

// Context
const ProductDetailContext = React.createContext(
    'please wrap element in <ProductDetailProvider></ProductDetailProvider>'
);

// Provider
export function ProductDetailProvider(props) {
    // state, hook
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
        reset();
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
