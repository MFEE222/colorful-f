import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

// 第三方庫
import axios from 'axios';
// import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
// import { css } from '@emotion/react';

// 共用
import { API_GET_PRODUCT_TAGS_SERIES } from '../../utils/config';

//自己
import Banner from '../../components/Product/Banner';
import PSearchFilter from '../../components/Product/PSearchFilter';
import FilterBarContent from '../../components/Product/FilterBarContent';
import Tags from '../../components/Product/Tags';
import ProductListContent from '../../components/Product/ProductListContent';
import Pagination from '../../components/Pagination/Pagination';

function ProductList(props) {
    const origin = props.origin;
    console.log('origin :>> ', origin);
    const match = useRouteMatch();
    //狀態
    const [show, setShow] = useState([]); //過濾呈現用
    const [tags, setTags] = useState([]); //表單元素（過濾用的）狀態
    const [init, setInit] = useState({}); //初始的tags,series

    //函數
    const fetchList = async () => {
        const response = await axios.get(API_GET_PRODUCT_TAGS_SERIES);
        setInit(response.data);
        setShow(origin); //原資料設為呈現資料 //後續再用過濾後的資料設定回這裡
    };

    useEffect(function () {}, []); //TODO:放要監控的狀態

    // 生命週期
    useEffect(() => {
        fetchList(); // tag,series
        // console.log('origin :>> ', origin);
        // console.log('show :>> ', show);
    }, []); // 初次掛載

    //渲染
    return (
        <>
            <Banner />
            {/* 手機版 search & filter */}
            <PSearchFilter init={init} />
            {/* md 以上 search & filter */}
            <FilterBarContent init={init} />
            <Tags init={init} />
            <ProductListContent show={show} />
            <Pagination />
        </>
    );
}

export default ProductList;
