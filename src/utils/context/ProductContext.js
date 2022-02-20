import React, { useState, useEffect } from 'react';

// Context
const ProductContext = React.createContext(
    'please wrap element in <ProductProvider></ProductProvider>'
);

// Provider
export function ProductProvider(props) {
    // state, hook

    // shared
    const shared = {
        say: 'Hey, Good Night',
    };

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
    return React.useContext();
}

export default ProductContext;
