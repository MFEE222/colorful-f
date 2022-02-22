import React from 'react';
function FilterBarContent(props) {
    const series = props.series;
    return (
        <div className="container">
            <div className="d-none d-lg-block">
                <div className="filter mt-sm-5 mb-3 mt-5">
                    <div className="filter-box d-flex">
                        <ul className="sort-series p-0">
                            <li className="active py-1 px-2 py-md-2 px-md-3">
                                全部
                            </li>
                            {series.map((v) => {
                                return (
                                    <>
                                        <li
                                            className="py-1 px-2 py-md-2 px-md-3"
                                            key={v.id}
                                        >
                                            {v.descp}
                                        </li>
                                    </>
                                );
                            })}
                            {/* <li className="py-1 px-2 py-md-2 px-md-3">風景</li>
                            <li className="py-1 px-2 py-md-2 px-md-3">婚禮</li>
                            <li className="py-1 px-2 py-md-2 px-md-3">底片</li>
                            <li className="py-1 px-2 py-md-2 px-md-3">人像</li> */}
                        </ul>
                        <ul className="sort-icon d-flex">
                            <li>
                                <i className="fas fa-search fa-lg"></i>
                            </li>
                            <input
                                type="search"
                                className="md-input-style"
                                placeholder="在此輸入關鍵字"
                            />
                            <li className=" ">
                                <i className="fas fa-sort-amount-up fa-lg "></i>
                            </li>
                            <li>
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
