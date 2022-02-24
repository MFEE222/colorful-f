import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import {
    ProductProvider,
    useProductContext,
} from './utils/context/ProductContext';

function Test2() {
    const products = useProductContext();
    console.log('products.state :>> ', products.state);
    console.log('products.other.say :>> ', products.other.say);
    return (
        <>
            <Link to="/test1">test 1</Link>
            <button
                className="btn btn-primary"
                onClick={function () {
                    products.setState({ id: Math.random(), name: 'bella' });
                }}
            >
                Test 2
            </button>
        </>
    );
}

export default Test2;
