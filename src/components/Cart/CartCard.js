import React from 'react';

function CartCard(props) {
    return (
        <div className="cart-card">
            <div className="box">
                <div className="align-self-center">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            value=""
                            id="flexCheckDefault"
                        />
                        <div
                            className="card border-dark bg-transparent mb-3"
                            style="max-width: 540px;"
                        >
                            <div className="row g-0">
                                <div className="col-md-2">
                                    <div className="ratio ratio-1x1">
                                        <img
                                            src="../../images/CartCard/cartcard.png"
                                            alt="..."
                                        ></img>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            Food DNG Presets
                                        </h6>
                                        <p className="card-text">
                                            <small className="text-muted">
                                                food03
                                            </small>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-2 align-self-center">
                                    <div className="card-body ">
                                        <h5 className="mb-0 card-title bg-transparent">
                                            $10
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-md-1"> </div>
                                <div className="col-md-1 align-self-center">
                                    <div>
                                        <i className="fas fa-trash-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCard;
