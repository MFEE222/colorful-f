// 內建
import React, { useEffect } from 'react';
// 圖片
import searchImg from '../../icons/Sortbar/Search.png';
import sortImg from '../../icons/Sortbar/Sort.png';
import deleteImg from '../../icons/Sortbar/Delete.png';

function PSearchFilter(props) {
    // 屬性
    const {
        series,
        choseSeries,
        search,
        price,
        choseTags,
        setChoseSeries,
        setSearch,
        setPrice,
        setChoseTags,
    } = props.state;

    // 生命週期
    useEffect(
        function () {
            // console.log('search d:>> ', search);
            // console.log('choseSeries d:>> ', choseSeries);
            // console.log('props.price :>> ', props.price);
        },
        [props.price, props.search, props.choseSeries]
    );

    // 渲染
    return (
        <>
            <div className="container d-md-flex">
                <div className="container d-md-flex d-lg-none my-md-3 search-box p-0">
                    <div className="phone-search d-flex justify-content-between ">
                        <input
                            type="search"
                            className="input-style"
                            placeholder="在此輸入關鍵字"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
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
                                <img
                                    className="icon-img"
                                    src={searchImg}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* xs,sm filterbar */}
                <div className="container d-flex justify-content-around  align-items-center my-2 d-lg-none phone-filter p-0 ms-md-3">
                    <div className="d-lg-none ms-1 ">
                        <i className="fas fa-dollar-sign me-3 money-icon "></i>
                        <input
                            type="search"
                            className="md-input-style price-input w-25 me-2"
                            placeholder="最低"
                            value={price[0] === 0 ? '' : price[0]}
                            onChange={function (e) {
                                // 檢查輸入是否與上次相同 X

                                // 檢查是否是空字串（是的話設為 0）
                                const p = [...price];
                                p[0] =
                                    e.target.value === '' ? 0 : e.target.value;
                                setPrice(p);
                            }}
                        />
                        ～
                        <input
                            type="search"
                            className="md-input-style price-input w-25 mx-2"
                            placeholder="最高"
                            value={price[1] === 0 ? '' : price[1]}
                            onChange={function (e) {
                                const p = [...price];
                                p[1] =
                                    e.target.value === '' ? 0 : e.target.value;
                                setPrice(p);
                            }}
                        />
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                        <div className="dropdown-style my-auto me-2">
                            <select
                                // name="filter-select"
                                // id="filter-select"
                                className="filter-select"
                                value={choseSeries}
                                onChange={(e) => setChoseSeries(e.target.value)}
                            >
                                <option value="">篩選</option>
                                <option value="">全部</option>
                                {series &&
                                    series.map((v) => {
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
                                <img
                                    className="icon-img"
                                    src={sortImg}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PSearchFilter;
