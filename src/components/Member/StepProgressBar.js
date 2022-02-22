import React from 'react';

function StepProgressBar(props) {
    return (
        <div className="member-step-progressbar">
            <ul className="row">
                <li className="col-3 active">
                    <span className="text">訂單成立</span>
                    <span className="d-block date">01/18 14:16</span>
                </li>
                <li className="col-3">
                    <span className="text">已付款</span>
                    <span className="d-block date">01/19 09:22</span>
                </li>
                <li className="col-3">
                    <span className="text">已下載</span>
                    <span className="d-block date">01/19 19:15</span>
                </li>
                <li className="col-3">
                    <span className="text">已關閉</span>
                    <span className="d-block date">01/20 08:15</span>
                </li>
            </ul>
        </div>
    );
}

export default StepProgressBar;
