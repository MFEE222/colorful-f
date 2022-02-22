import React from 'react';

function ProductListContent(props) {
    return (
        <>
            {/* card */}
            <div className="container">
                <div className="card-group row my-4 mt-md-5 my-2">
                    {products.map((product) => {
                        const goTo = `${match.path}/detail/${product.id}`;
                        return (
                            <div className="col-6 col-md-3">
                                <Card
                                    key={product.id}
                                    product={product}
                                    goTo={goTo}
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
