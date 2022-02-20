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
    // 狀態、勾子
    // const [detailData, setDetailData] = useState({});
    // const params = useParams();

    // 屬性
    // const detailData = props.detailData;

    // 變數
    // const id = params.id;

    // 生命週期
    // useEffect(() => {
    //     (async () => {
    //         const api = `${API_URL}/product/detail/${id}`;
    //         const response = await axios.get(api);

    //         // console.log('api :>> ', api);
    //         // console.log('response :>> ', response);
    //         setDetailData(response.data.detail[0]);
    //     })();
    // }, []); // 掛載

    // 渲染
    return (
        <Main>
            {/* 重新安排商品頁架構時候再來改傳遞屬性 */}
            <ProductDetailContent detailData={detailData} />
        </Main>
    );
}

export default ProductDetail;
