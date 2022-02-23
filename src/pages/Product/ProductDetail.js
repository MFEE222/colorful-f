// 內建
import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// 通用元件
import axios from 'axios';
import { API_URL } from '../../utils/config';

// 自用元件
import Main from '../../components/Product/Main';
import ProductDetailContent from '../../components/Product/ProductDetailContent';

function ProductDetail(props) {
    // 渲染
    return (
        <Main>
            {/* 重新安排商品頁架構時候再來改傳遞屬性 */}
            {/* <ProductDetailContent detailData={detailData} /> */}
            <ProductDetailContent />
        </Main>
    );
}

export default ProductDetail;
