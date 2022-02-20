import React, { useState, useEffect } from 'react';

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

    // shared
    const { other } = props.other !== undefined ? props : { other: {} };
    const shared = {
        other,
        products,
        setProducts,
        say: 'Hey, Good Night',
    };

    // life cycle
    useEffect(function () {
        // axios
        // set state
        setProducts([{ id: 1, name: 'chris' }]);

        return function () {
            console.log('Here is WillUnMount');
        };
    }, []); // DidMount

    useEffect(
        function () {
            console.log('Here is DidUpdate');
        },
        [products]
    );

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
