import React, { useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import {
    ProductProvider,
    useProductContext,
} from './utils/context/ProductContext';

function Test1() {
    const products = useProductContext();

    console.log('products.state :>> ', products.state);

    useEffect(function () {
        //
        const res = axios.get(API_GET_PRODUCTS, {});

        setPr;
    }, []);

    products.get({ id: 1 });

    return (
        <>
            <Link to="/test2">test 2</Link>
            <button
                className="btn btn-primary"
                onClick={function () {
                    products.setState({ id: Math.random(), name: 'liz' });
                }}
            >
                Test 1
            </button>
        </>
    );
}

export default Test1;
