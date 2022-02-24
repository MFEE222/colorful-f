import React from 'react';
import { Input, Icon } from 'semantic-ui-react';
function FilterBarContent(props) {
    const { series } = props.init;
    return (
        <div className="container">
            <div className="d-none d-lg-block">
                <div className="filter mt-sm-5 mb-3 mt-5">
                    <div className="filter-box">
                        <ul className="sort-series ps-0 flex-nowrap mb-0">
                            <li className="active py-1 px-2 py-md-2 px-md-3">
                                全部
                            </li>
                            <li className=" py-1 px-2 py-md-2 px-md-3">最新</li>
                            {series &&
                                series.map((v) => {
                                    return (
                                        <li
                                            className="py-1 px-2 py-md-2 px-md-3"
                                            key={v.id}
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
                            <Input icon="search" placeholder="Search..." />
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
                            />
                            ~
                            <Input
                                placeholder="最高$..."
                                size="mini"
                                className="input-sm"
                            />
                            {/* 點擊切換 */}
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
