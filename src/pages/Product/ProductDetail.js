import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import Main from '../../components/Product/Main';
import ProductDetailContent from '../../components/Product/ProductDetailContent';

function ProductDetail(props) {
    // useParams()
    //TODO:解析網址拿到id（全部有關資料）評論之類的 再傳進(props)card
    const pid = props.match.params.pid;
    const response = async () => {
        return await axios.get(`${API_URL}/product/detail/${pid}`);
    };
    const detailData = response.data;
    // url = "/product/detail/3"

    return (
        <Main>
            <ProductDetailContent detailData={detailData} />
        </Main>
    );
}

export default ProductDetail;
