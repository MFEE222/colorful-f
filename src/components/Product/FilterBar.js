import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Input, Icon } from 'semantic-ui-react';
import searchImg from '../../icons/Sortbar/Search.png';
import sortImg from '../../icons/Sortbar/Sort.png';
import deleteImg from '../../icons/Sortbar/Delete.png';

import { API_GET_PRODUCT_TAGS_SERIES } from '../../utils/config';
import { useRWDContext } from '../../utils/context/RWDContext';
import { ListGroupItem } from 'react-bootstrap';

function FilterBar(props) {
    // Context
    const rwd = useRWDContext();
    // 屬性 (option 會包物件！請注意)
    const { option, setOption } = props;
    // 狀態
    const [display, setDisplay] = useState({});

    // 函數
    function clear(option) {
        option.series = 0;
        option.keyword = '';
        option.price = [0, 0];
        option.tags = [];
        option.orderby = '';
        option.order = 0;
    }
    function handleFilterAll() {
        return function () {
            const o = { ...option };
            clear(o);
            setOption(o);
        };
    }
    function handleFilterNewest() {
        return function () {
            const o = { ...option };
            clear(o);
            o.orderby = 'created_at';
            o.order = 1;
            setOption(o);
        };
    }
    function handleFilterSeries(id) {
        return function () {
            const o = { ...option };
            clear(o);
            o.series = id;
            setOption(o);
        };
    }
    // 關鍵字
    function handleFilterKeyword() {
        return function (e) {
            const o = { ...option };
            o.keyword = e.target.value;
            setOption(o);
        };
    }
    // 價格
    function handleFilterPrice(index) {
        return function (e) {
            const o = { ...option };
            const p = [...o.price];
            p[index] = e.target.value;
            o.price = p;
            o.orderby = 'price';
            setOption(o);
        };
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

    // RWD UI
    const mobile = (
        <div className="container d-md-flex">
            <div className="container d-md-flex d-lg-none my-md-3 search-box p-0">
                <div className="phone-search d-flex justify-content-between ">
                    <input
                        type="search"
                        className="input-style"
                        placeholder="在此輸入關鍵字"
                        value={option.keyword}
                        onChange={handleFilterKeyword()}
                    />
                    // FIXME: 刪除 or 調整 搜尋放大鏡和叉叉
                    <div className="search-icon d-flex my-2">
                        <div className="me-2">
                            <img
                                className="icon-img"
                                src={deleteImg}
                                alt=""
                                onClick={() => {
                                    setSearch('');
                                    setChoseSeries('');
                                    setPrice([0, 0]);
                                    setChoseTags('');
                                }}
                            />
                        </div>
                        <div className="me-2">
                            <img className="icon-img" src={searchImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-around  align-items-center my-2 d-lg-none phone-filter p-0 ms-md-3">
                <div className="d-lg-none ms-1 ">
                    <i className="fas fa-dollar-sign me-3 money-icon "></i>
                    <input
                        type="search"
                        className="md-input-style price-input w-25 me-2"
                        placeholder="最低"
                        // FIXME: 測試後端 price ['', ''] 是否會出錯
                        value={option.price[0]}
                        onChange={handleFilterPrice(0)}
                    />
                    ～
                    <input
                        type="search"
                        className="md-input-style price-input w-25 mx-2"
                        placeholder="最高"
                        // FIXME: 測試後端 price ['', ''] 是否會出錯
                        value={option.price[1]}
                        onChange={handleFilterPrice(1)}
                    />
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <div className="dropdown-style my-auto me-2">
                        <select
                            className="filter-select"
                            value={option.series}
                            onChange={function (e) {
                                handleFilterSeries(e.target.value)();
                            }}
                        >
                            <option value="">篩選</option>
                            <option value="">全部</option>
                            {display.series &&
                                display.series.map((v) => {
                                    return (
                                        <option key={v.id} value={v.id}>
                                            {v.descp}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>
                    <div className="icon-g d-flex">
                        <div>
                            <img className="icon-img" src={sortImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    const desktop = (
        <div className="container">
            <div className="d-none d-lg-block">
                <div className="filter mt-sm-5 mb-3 mt-5">
                    <div className="filter-box">
                        <ul className="sort-series ps-0 flex-nowrap mb-0">
                            <li
                                className="py-1 px-2 py-md-2 px-md-3"
                                key=""
                                onClick={handlerAll()}
                            >
                                全部
                            </li>
                            {display.series &&
                                display.series.map(function (e) {
                                    return (
                                        <li
                                            className="py-1 px-2 py-md-2 px-md-3"
                                            key={e.id}
                                            onClick={handleFilterSeries(e.id)}
                                        >
                                            {e.descp}
                                        </li>
                                    );
                                })}
                        </ul>

                        <ul className="sort-icon d-flex justify-content-end ps-0 align-items-center">
                            <Input
                                icon="search"
                                placeholder="Search..."
                                value={option.keyword}
                                onChange={handleFilterKeyword()}
                            />
                            <Icon name="dollar sign" />
                            <Input
                                placeholder="最低$..."
                                className="input-sm"
                                value={option.price[0]}
                                onChange={handleFilterPrice(0)}
                            />
                            ~
                            <Input
                                placeholder="最高$..."
                                size="mini"
                                className="input-sm"
                                value={option.price[1]}
                                onChange={handleFilterPrice(1)}
                            />
                            // FIXME: 刪除 or 調整 搜尋放大鏡和叉叉
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
    // 渲染
    return rwd.md() ? desktop : mobile;
    // return rwd.md() ? (
    //     <>
    //         <button
    //             className="btn btn-primary m-3"
    //             onClick={function () {
    //                 filterAll();
    //             }}
    //         >
    //             全部
    //         </button>
    //         <button
    //             className="btn btn-primary m-3"
    //             onClick={function () {
    //                 filterNewest();
    //             }}
    //         >
    //             最新
    //         </button>
    //         {[2, 3, 4, 5, 6].map(function (e) {
    //             return (
    //                 <button
    //                     key={e}
    //                     className="btn btn-primary m-3"
    //                     // onClick={function () {
    //                     //     filterSeries(e);
    //                     // }}
    //                     onClick={filterSeries(e)}
    //                 >
    //                     {e}
    //                 </button>
    //             );
    //         })}
    //         <input
    //             type="text"
    //             placeholder="最低"
    //             value={option.price[0]}
    //             onChange={function (e) {
    //                 filterPrice(e.target.value, 0);
    //             }}
    //         />
    //         ~
    //         <input
    //             type="text"
    //             placeholder="最高"
    //             value={option.price[1]}
    //             onChange={function (e) {
    //                 filterPrice(e.target.value, 1);
    //             }}
    //         />
    //         {[1, 2, 3, 4, 5, 6].map(function (e) {
    //             return (
    //                 <button
    //                     key={e}
    //                     className="btn btn-primary m-3"
    //                     onClick={function () {
    //                         filterTags(e);
    //                     }}
    //                 >
    //                     {e}
    //                 </button>
    //             );
    //         })}
    //     </>
    // ) : (
    //     <h1>Mobile</h1>
    // );
}

export default FilterBar;
