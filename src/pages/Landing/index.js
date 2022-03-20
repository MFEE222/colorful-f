import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import 'animate.css';
import { routes } from '../../utils/routes';

function Landing(props) {
    return (
        <div className="landing animate__animated animate__bounce animate__faster">
            <div className="container animated bounceInDown">
                <div className="container__item landing-page-container">
                    <div className="content__wrapper">
                        <p className="coords">
                            N 24° 25' 6.812" / W 121° 13' 19.59"
                        </p>

                        <div className="ellipses-container">
                            <h2 className="greeting">Hello</h2>

                            <div className="ellipses ellipses__outer--thin">
                                <div className="ellipses ellipses__orbit"></div>
                            </div>

                            <div className="ellipses ellipses__outer--thick"></div>
                        </div>

                        <div className="scroller">
                            <Link to={routes.home}>
                                <p className="page-title">home</p>
                            </Link>

                            <div className="timeline">
                                <span className="timeline__unit"></span>
                                <span className="timeline__unit timeline__unit--active"></span>
                                <span className="timeline__unit"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
