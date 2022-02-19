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
    // 勾子
    const params = useParams();
    // 狀態
    const [detailData, setDetailData] = useState([]);

    //TODO:解析網址拿到id（全部有關資料）評論之類的 再傳進(props)card

    // DidMount
    useEffect(() => {
        (async () => {
            const id = params.id;
            // console.log('api :>>', `${API_URL}/product/detail/${id}`);
            const response = await axios.get(`${API_URL}/product/detail/${id}`);

            // console.log('response :>> ', response);
            setDetailData(response.data.detail);
        })();
    }, []);

    // 渲染
    return (
        <Main>
            <ProductDetailContent detailData={detailData} />
        </Main>
    );
}

export default ProductDetail;
