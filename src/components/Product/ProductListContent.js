import React, { useEffect, useState } from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useNavigate,
    matchPath,
} from 'react-router-dom';
//共用
import { useProductsContext } from '../../context/ProductsContext';

//自己
import Card from './Card';

function ProductListContent(props) {
    const match = useRouteMatch();
    const products = useProductsContext();
    const { show } = props; //物件解構
    // console.log('show :>> ', show);
    return (
        <>
            {/* card */}
            <div className="container">
                <div className="card-group row my-4 mt-md-5 my-2">
                    {show.map((v) => {
                        const goTo = `${match.path}/detail/${v.id}`;
                        return (
                            <div key={v.id} className="col-6 col-md-3">
                                <Card
                                    product={v}
                                    goTo={goTo}
                                    find={products.find}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default ProductListContent;

//search filter tag 排序
//TODO:欄位搜尋+code query
//TODO:(拆成元件)filterbar 顯示
//TODO:(拆成元件)tag 顯示 => 點擊切換icon
//TODO:排序
//TODO:已購買顯示標記
//TODO:分頁
//TODO:商品卡點進去要商品詳情
//TODO:收藏愛心要加減（非會員加入localstorage)//=>收藏狀態設在這層
