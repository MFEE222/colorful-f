import { clearConfigCache } from 'prettier';
import React from 'react';

import { useProductsContext } from './utils/context/ProductsContext';
import { API_GET_PRODUCTS } from './utils/config';
import axios from 'axios';

function Test(props) {
    const products = useProductsContext();

    return (
        <>
            <button
                className="btn btn-primary m-3"
                onClick={function () {
                    console.log('event handler');
                    products.find({ id: 28 });
                }}
            >
                Find
            </button>
            <button
                className="btn btn-primary m-3"
                onClick={async function () {
                    const res = await axios.get(API_GET_PRODUCTS);
                    console.log('res :>>', res);
                }}
            >
                Test
            </button>
        </>
    );
}

export default Test;
