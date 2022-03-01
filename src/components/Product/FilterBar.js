import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Input, Icon } from 'semantic-ui-react';
import searchImg from '../../icons/Sortbar/Search.png';
import sortImg from '../../icons/Sortbar/Sort.png';
import deleteImg from '../../icons/Sortbar/Delete.png';

import { API_GET_PRODUCT_TAGS_SERIES } from '../../utils/config';
import { useRWDContext } from '../../utils/context/RWDContext';


function FilterBar(props) {
    // Context
    const rwd = useRWDContext();
    // 屬性 (option 會包物件！請注意)
    const { option, setOption } = props;
    // 狀態
    const [display, setDisplay] = useState({});

    // 函數
    // 關鍵字搜尋
    function handleKeyword(e) {
        const o = { ...option };
        o.keyword = e.target.value;
        setOption(o);
    }
    function handleKeywordReset(e) {
        const o = { ...option };
        o.keyword = '';
        setOption(o);
    }
    // 價格
    function handleFilterPrice(e) {
        const o = { ...option };
        const p = [...o.price];
        if (e.target.name == 'min-price') p[0] = e.target.value;
        else if (e.target.name == 'max-price') p[1] = e.target.value;
        o.price = p;
        o.orderby = 'price';
        setOption(o);
    }
    // 標籤
    function handleFilterTags(id) {
        return function () {
            const o = { ...option };
            let t;
            // console.log('typeof t :>> ', typeof t);
            // console.log('typeof o.tags :>> ', typeof o.tags);
            if (o.tags.includes(id)) {
                t = o.tags.filter(function (e) {
                    return e != id;
                });
            } else {
                t = [...o.tags];
                t.push(id);
            }
            o.tags = t;
            setOption(o);
        };
    }

    // 生命週期
    useEffect(function () {
        (async function () {
            try {
                const res = await axios.get(API_GET_PRODUCT_TAGS_SERIES);
                // console.log('res :>> ', res);
                setDisplay(res.data);
            } catch (err) {
                console.log('err :>> ', err);
            }
        })();
    }, []);

    // 渲染
    return (
        <div className="container d-md-flex">
            <div className="container my-md-3 search-box p-0">
                <div className="row flex-nowrap justify-content-between phone-search">
                    <div className="col-8 col-md-9 px-0 algin-self-center phone-search">
                        {option.keyword === '' ? (
                            <i className="fas fa-search ps-3 pe-1 text-secondary"></i>
                        ) : (
                            <i
                                className="far fa-times-circle ps-3 pe-1 text-secondary"
                                onClick={handleKeywordReset}
                            ></i>
                        )}
                        <input
                            type="search"
                            className="input-style text-secondary"
                            placeholder="Search"
                            value={option.keyword}
                            onChange={handleKeyword}
                        />
                    </div>
                    <div className="col-4 col-md-3 price-filter">
                        <div className="row justify-content-center align-items-center">
                            <input
                                type="search"
                                className="col px-0 text-center"
                                placeholder="min"
                                name="min-price"
                                value={option.price[0]}
                                onChange={handleFilterPrice}
                            />
                            <p className="col-auto m-0 pb-1">-</p>
                            <input
                                type="search"
                                className="col px-0 text-center"
                                placeholder="max"
                                name="max-price"
                                value={option.price[1]}
                                onChange={handleFilterPrice}
                            />
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
