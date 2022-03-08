import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

function Landing(props) {
    return (
        <div className="landing animate__animated animate__bounce animate__faster">
            <div class="container animated bounceInDown">
                <div class="container__item landing-page-container">
                    <div class="content__wrapper">
                        <p class="coords">
                            N 49° 16' 35.173" / W 0° 42' 11.30"
                        </p>

                        <div class="ellipses-container">
                            <h2 class="greeting">Hello colorful</h2>

                            <div class="ellipses ellipses__outer--thin">
                                <div class="ellipses ellipses__orbit"></div>
                            </div>

                            <div class="ellipses ellipses__outer--thick"></div>
                        </div>

                        <div class="scroller">
                            <a href="#page1">
                                <p class="page-title">home</p>
                            </a>

                            <div class="timeline">
                                <span class="timeline__unit"></span>
                                <span class="timeline__unit timeline__unit--active"></span>
                                <span class="timeline__unit"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
