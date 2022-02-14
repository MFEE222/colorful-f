import React from 'react';

import Navbar from '../../utils/Navbar';
import Footer from '../../utils/Footer';

import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

function Product(props) {
    return (
        <>
            <Navbar />

            {/* <ProductList /> */}
            <ProductDetail />

            <Footer />
        </>
    );
}

export default Product;
