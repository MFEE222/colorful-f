import React from 'react';

function FilterBar(props) {
    return (
        <div className="member-order-filter-bar">
            <ul className="nav">
                <li className="nav-item">
                    <button className="nav-link btn">全部</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn">未付款</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn">已付款</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn">完成</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn">不成立</button>
                </li>
            </ul>
            <hr />
        </div>
    );
}

export default FilterBar;
