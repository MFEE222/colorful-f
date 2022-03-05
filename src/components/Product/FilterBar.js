import React, { useState, useEffect } from 'react';

import axios from 'axios';
// import { Input, Icon } from 'semantic-ui-react';
import searchImg from '../../icons/Sortbar/Search.png';
import sortImg from '../../icons/Sortbar/Sort.png';
import deleteImg from '../../icons/Sortbar/Delete.png';

import { API_GET_PRODUCT_TAGS_SERIES } from '../../utils/config';
import { useRWDContext } from '../../utils/context/RWDContext';
import { useProductsContext } from '../../utils/context/ProductsContext';

function FilterBar(props) {
    // Context
    const rwd = useRWDContext();
    const products = useProductsContext();

    // 狀態
    const [display, setDisplay] = useState({});

    // 排序 JSX
    function orderJSX() {
        let html = '';
        switch (products.option.order) {
            case 0:
                // 上箭頭
                html = (
                    <i
                        className="fas fa-sort-up text-secondary col-auto"
                        onClick={(e) => products.optionPriceSort(e, 1)}
                    ></i>
                );
                break;
            case 1:
                // 下箭頭
                html = (
                    <i
                        className="fas fa-sort-down text-secondary col-auto"
                        onClick={(e) => products.optionPriceSort(e, 0)}
                    ></i>
                );
                break;
            default:
                // 上下箭頭
                html = (
                    <i
                        className="fas fa-sort text-secondary col-auto"
                        onClick={(e) => products.optionPriceSort(e, 0)}
                    ></i>
                );
        }
        return html;
    }

    // 生命週期
    useEffect(function () {
        (async function () {
            try {
                const res = await axios.get(API_GET_PRODUCT_TAGS_SERIES);
                // console.log('res :>> ', res);
                setDisplay(res.data);
            } catch (err) {
                // console.log('err :>> ', err);
            }
        })();
    }, []);

    // 渲染
    return (
        <div className="container d-md-flex">
            <div className="container my-md-3 search-box p-0">
                <div className="row flex-nowrap justify-content-between phone-search">
                    <div className="col-8 col-md-9 px-0 algin-self-center phone-search">
                        {products.option.keyword === '' ? (
                            <i className="fas fa-search ps-3 pe-1 text-secondary"></i>
                        ) : (
                            <i
                                className="far fa-times-circle ps-3 pe-1 text-secondary"
                                onClick={function (e) {
                                    products.optionKeywordReset(e);
                                }}
                            ></i>
                        )}
                        <input
                            type="search"
                            className="input-style text-secondary"
                            placeholder="Search"
                            value={products.option.keyword}
                            onChange={function (e) {
                                products.optionKeyword(e, e.target.value);
                            }}
                        />
                    </div>
                    <div className="col-4 col-md-3 price-filter">
                        <div className="row flex-nowrap justify-content-center align-items-center">
                            <input
                                type="search"
                                className="col px-0 text-center"
                                placeholder="min"
                                name="min-price"
                                value={
                                    !products.option.price[0]
                                        ? ''
                                        : products.option.price[0]
                                }
                                onChange={function (e) {
                                    const arr = [...products.option.price];
                                    arr[0] = Number(e.target.value);
                                    products.optionPriceRange(e, arr);
                                }}
                            />
                            <p className="col-auto m-0 pb-1">-</p>
                            <input
                                type="search"
                                className="col px-0 text-center"
                                placeholder="max"
                                name="max-price"
                                value={
                                    !products.option.price[1]
                                        ? ''
                                        : products.option.price[1]
                                }
                                onChange={function (e) {
                                    const arr = [...products.option.price];
                                    arr[1] = Number(e.target.value);
                                    products.optionPriceRange(e, arr);
                                }}
                            />
                            {orderJSX()}
                        </div>
                    </div>
                </div>
                <div className="row px-3 mt-3 tags">
                    {display.tags &&
                        display.tags.map(function (e) {
                            return (
                                <div
                                    key={e.id}
                                    className="col-auto text-secondary"
                                    onClick={function (e) {
                                        products.optionTags(e, e.id);
                                    }}
                                >
                                    <i className="fas fa-hashtag pe-1"></i>
                                    {e.name}
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default FilterBar;
