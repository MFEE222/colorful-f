import React, { useEffect } from 'react';
import { useProductsContext } from '../../utils/context/ProductsContext';
import { Input, Icon } from 'semantic-ui-react';
function FilterBarContent(props) {
    const products = useProductsContext();
    const { series } = props.init;
    const {
        choseSeries,
        setChoseSeries,
        search,
        setSearch,
        price,
        setPrice,
        choseTags,
        setChoseTags,
    } = props;
    // console.log('price d:>> ', price);

    useEffect(
        function () {
            console.log('search d:>> ', search);
            console.log('choseSeries d:>> ', choseSeries);
            console.log('props.price :>> ', props.price);
        },
        [props.price, props.search, props.choseSeries]
    );

    return (
        <div className="container">
            <div className="d-none d-lg-block">
                <div className="filter mt-sm-5 mb-3 mt-5">
                    <div className="filter-box">
                        <ul className="sort-series ps-0 flex-nowrap mb-0">
                            <li
                                className="py-1 px-2 py-md-2 px-md-3"
                                key=""
                                onClick={() => {
                                    setSearch('');
                                    setChoseSeries('');
                                    setPrice([0, 0]);
                                    setChoseTags('');
                                }}
                            >
                                全部
                            </li>
                            {series &&
                                series.map((v) => {
                                    return (
                                        <li
                                            className="py-1 px-2 py-md-2 px-md-3"
                                            key={v.id}
                                            onClick={(e) =>
                                                setChoseSeries(v.id)
                                            }
                                        >
                                            {v.descp}
                                        </li>
                                    );
                                })}
                        </ul>

                        <ul className="sort-icon d-flex justify-content-end ps-0 align-items-center">
                            {/* <li>
                                <i className="fas fa-search fa-lg"></i>
                            </li> */}
                            <Input
                                icon="search"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            {/* <input
                                type="search"
                                className="md-input-style "
                                placeholder="在此輸入關鍵字"
                            /> */}
                            <Icon name="dollar sign" />
                            {/* <p className="mb-0 ">價格</p> */}
                            <Input
                                placeholder="最低$..."
                                className="input-sm"
                                value={price[0] === 0 ? '' : price[0]}
                                onChange={function (e) {
                                    // 檢查輸入是否與上次相同 X

                                    // 檢查是否是空字串（是的話設為 0）
                                    const p = [...price];
                                    p[0] =
                                        e.target.value === ''
                                            ? 0
                                            : e.target.value;
                                    setPrice(p);
                                }}
                            />
                            ~
                            <Input
                                placeholder="最高$..."
                                size="mini"
                                className="input-sm"
                                value={price[1] === 0 ? '' : price[1]}
                                onChange={function (e) {
                                    const p = [...price];
                                    p[1] =
                                        e.target.value === ''
                                            ? 0
                                            : e.target.value;
                                    setPrice(p);
                                }}
                            />
                            {/* 點擊切換 */}
                            <li>
                                <i
                                    className="fas fa-times fa-lg me-3"
                                    onClick={() => {
                                        setSearch('');
                                        setChoseSeries('');
                                        setPrice([0, 0]);
                                        setChoseTags('');
                                    }}
                                ></i>
                                <i className="fas fa-sort-amount-down-alt fa-lg"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    );
}

export default FilterBarContent;
