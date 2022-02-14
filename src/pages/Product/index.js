import React from 'react';

import Navbar from '../../utils/Navbar';
import Footer from '../../utils/Footer';

import ProductList from './ProductList';

function Product(props) {
    return (
        <>
            <Navbar />

            <ProductList />

            <Footer />
        </>
    );
}

export default Product;
