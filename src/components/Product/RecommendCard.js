import React from 'react';
import cardDemo from '../../images/navbar-ex-1.jpg';
import Card from './Card';
import decBar from '../../icons/dec-bar.png';

function RecommendCard(props) {
    //TODO:api取得銷售前幾名
    return (
        <>
            <div className="container">
                <div className="recommend mt-5">
                    <div className="recommend-title">
                        <div className="text-box">
                            <div className="phone-title">
                                <h3>熱銷排行</h3>
                                <img
                                    className="d-md-none"
                                    src={decBar}
                                    alt=""
                                />
                                <p className="d-none d-md-block">
                                    暢銷色調值得您擁有 強化風格與色調
                                </p>
                            </div>
                        </div>
                        <Card />
                    </div>
                    <div className="recommend-card"></div>
                </div>
            </div>
        </>
    );
}

export default RecommendCard;
