import React from 'react';

function FilterBarContent(props) {
    return (
        <div className="filter mt-sm-5 my-sm-3 my-md-5">
            <div className="filter-box d-flex">
                <ul className="sort-series p-0">
                    <li className="active py-1 px-2 py-md-2 px-md-3">全部</li>
                    <li className="py-1 px-2 py-md-2 px-md-3">制度</li>
                    <li className="py-1 px-2 py-md-2 px-md-3">食物</li>
                    <li className="py-1 px-2 py-md-2 px-md-3">風景</li>
                    <li className="py-1 px-2 py-md-2 px-md-3">婚禮</li>
                    <li className="py-1 px-2 py-md-2 px-md-3">底片</li>
                    <li className="py-1 px-2 py-md-2 px-md-3">人像</li>
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
                    <li>
                        <i className="fas fa-sort-amount-up fa-lg"></i>
                    </li>
                    <li>
                        <i className="fas fa-sort-amount-down-alt fa-lg"></i>
                    </li>
                </ul>
            </div>
            <div className="line"></div>
        </div>
    );
}

export default FilterBarContent;
