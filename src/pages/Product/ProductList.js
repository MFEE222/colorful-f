import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

// 第三方庫
import axios from 'axios';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { css } from '@emotion/react';

// 共用
import { API_URL, IMG_URL, API_GET_PRODUCTS } from '../../utils/config';

//自己
import ProductListContent from '../../components/Product/ProductListContent';
import FilterBarContent from '../Filterbar/FilterBarContent';
import RecommendCard from './RecommendCard';
import Pagination from '../Pagination/Pagination';
import Card from './Card';
import Banner from './Banner';
import PSearchFilter from './PSearchFilter';
import Tags from './Tags';

//context
import {
    ProductProvider,
    useProductContext,
} from './utils/context/ProductContext';

function ProductList(props) {
    const products = useProductContext();
    const match = useRouteMatch();
    //狀態
    const [tags, setTags] = useState([]); //表單元素狀態
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(false); //載入顯示 ok
    const [color, setColor] = useState('#cf9d3f');

    // Loading 設定值
    const override = css`
        display: block;
        margin: auto;
        width: 100vh;
        height: 100vh;
    `;
    //函數
    const fetchList = async () => {
        const api = `${API_GET_PRODUCTS}/list`;
        const response = await axios.get(api);
        // console.log('response :>> ', response.data);
        setTags(response.data.tags);
        setSeries(response.data.series);
        setLoading(false);
    };

    // 生命週期
    useEffect(() => {
        products.reset;
        setLoading(true);
        fetchList(); // 下載商品資料
    }, []); // 掛載

    useEffect(() => {
        if (products !== []) {
            setLoading(false);
        }
    }, [loading]); // 更新 loading
    const productList = (
        <>
            <Banner />
            <PSearchFilter series={series} />
            {/* md 以上filterbar */}
            <FilterBarContent series={series} />
            <Tags tags={tags} />
            <ProductListContent />
            <Pagination />
            <RecommendCard />
        </>
    );
    const spinner = (
        <div className="sweet-loading">
            <ClimbingBoxLoader
                color={color}
                loading={loading}
                css={override}
                size={13}
            />
        </div>
    );
    return <>{loading ? spinner : productList}</>;
}

export default ProductList;
