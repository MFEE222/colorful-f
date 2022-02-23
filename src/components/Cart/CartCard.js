import React from 'react';
import Img1 from '../../images/CartCard/cartcard.png';

function CartCard(props) {
    return (
        // card
        <div className="cart-card float-right">
            <div className="box">
                <div className="">
                    <div className="form-check ">
                        <div className="">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="flexCheckDefault"
                                value=""
                            />
                        </div>
                        <div className="card border-dark bg-transparent mb-3 cartcard-width">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="ratio ratio-1x1">
                                        <img src={Img1} alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <div>
                                            <h6 className="card-title">
                                                Food DNG Presets
                                            </h6>
                                        </div>
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
