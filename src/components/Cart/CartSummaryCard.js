import React from 'react';

function CartSummaryCard(props) {
    return (
        <>
            <div className="card bg-transparent summarycard-width">
                <div className="list-group list-group-flush">
                    <a className="list-group-item bg-transparent">
                        小結<span className="summary-text">NT$ 1,089</span>
                    </a>
                    <a className="list-group-item bg-transparent">
                        運費<span className="summary-text">免費</span>
                    </a>
                    <a className="list-group-item bg-transparent">
                        總額<span className="summary-text">NT$ 1,089</span>
                    </a>
                </div>
                <div className="card-body">
                    <div className="d-grid gap-2 mx-auto">
                        <button
                            className="btn btn-dark text color-white"
                            type="button"
                        >
                            前往結帳
                        </button>
                        <button
                            className="btn btn-transparent border-dark"
                            type="button"
                        >
                            繼續購物
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartSummaryCard;
