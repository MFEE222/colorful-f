import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { API } from '../config';

// Context
const ProductContext = React.createContext(
    'please wrap element in <ProductProvider></ProductProvider>'
);

// Provider
export function ProductProvider(props) {
    // state, hook
    const [products, setProducts] = useState({});
    // const products = [
    //     { id: 1, name: 'rosa' },
    //     { id: 2, name: 'chris' },
    // ];

    // variable (shared)
    const { option } =
        props.option !== undefined ? props : { option: { limit: 5 } };
    const { other } = props.other !== undefined ? props : { other: {} };
    const shared = {
        other,
        state: products,
        setState: function (p) {
            const ps = [...products];
            ps.push(p);
            ps.sort(function (e1, e2) {
                return e1.id > e2.id;
            });
            setProducts(ps);
        },
        get: async function (params) {
            const res = await axios.get(API.PRODUCTS, {
                params,
            });
            const ps = [...products];
            ps.push(p);
            ps.sort(function (e1, e2) {
                return e1.id > e2.id;
            });
            setProducts(ps);
        },
        say: 'Hey, Good Night',
    };

    // life cycle
    useEffect(async function () {
        // axios.get 向後端要資料
        // const res = await axios.get(API.PRODUCTS, {
        //     params: {
        //         limit: option.limit,
        //     },
        // });
        // set state 設定狀態
        // setProducts();
        setProducts([{ id: 1, name: 'chris' }]);

        console.log('Here is DidMount');

        return function () {
            console.log('Here is WillUnMount');
        };
    }, []); // DidMount

    // useEffect(
    //     function () {
    //         console.log('Here is DidUpdate');
    //     },
    //     [products]
    // ); // DidUpdate

    // render
    return (
        <ProductContext.Provider value={shared}>
            {props.children}
        </ProductContext.Provider>
    );
}

// Consumer
export function ProductConsumer(props) {
    // props.children must be {function (value) {......}}
    return <ProductContext.Consumer>{props.children}</ProductContext.Consumer>;
}

// useContext
export function useProductContext() {
    return React.useContext(ProductContext);
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
