import React from 'react';

function StepProgressBar(props) {
    return (
        <div class="member-step-progressbar">
            <ul class="row">
                <li class="col-3 active">
                    <span class="text">訂單成立</span>
                    <span class="d-block date">01/18 14:16</span>
                </li>
                <li class="col-3">
                    <span class="text">已付款</span>
                    <span class="d-block date">01/19 09:22</span>
                </li>
                <li class="col-3">
                    <span class="text">已下載</span>
                    <span class="d-block date">01/19 19:15</span>
                </li>
                <li class="col-3">
                    <span class="text">已關閉</span>
                    <span class="d-block date">01/20 08:15</span>
                </li>
            </ul>
        </div>
    );
}

export default StepProgressBar;
