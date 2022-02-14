import React from 'react';

function FilterBarContent(props) {
    return (
        <div class="filter mt-sm-5 my-sm-3 my-md-5">
            <div class="filter-box d-flex">
                <ul class="sort-series p-0">
                    <li class="active py-1 px-2 py-md-2 px-md-3">全部</li>
                    <li class="py-1 px-2 py-md-2 px-md-3">制度</li>
                    <li class="py-1 px-2 py-md-2 px-md-3">食物</li>
                    <li class="py-1 px-2 py-md-2 px-md-3">風景</li>
                    <li class="py-1 px-2 py-md-2 px-md-3">婚禮</li>
                    <li class="py-1 px-2 py-md-2 px-md-3">底片</li>
                    <li class="py-1 px-2 py-md-2 px-md-3">人像</li>
                </ul>
                <ul class="sort-icon d-flex">
                    <li>
                        <i class="fas fa-search fa-lg"></i>
                    </li>
                    <input
                        type="search"
                        class="md-input-style"
                        placeholder="在此輸入關鍵字"
                    />
                    <li>
                        <i class="fas fa-sort-amount-up fa-lg"></i>
                    </li>
                    <li>
                        <i class="fas fa-sort-amount-down-alt fa-lg"></i>
                    </li>
                </ul>
            </div>
            <div class="line"></div>
        </div>
    );
}

export default FilterBarContent;
