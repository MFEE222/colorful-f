import React from 'react';
import cardDemo from '../../images/navbar-ex-1.jpg';
import { IMG_URL } from '../../utils/config';
import { routes } from '../../utils/routes';
import { Route, Link, Switch } from 'react-router-dom';
import { imgName } from '../../utils/imageName';
function Card(props) {
    const { id, name, descp, img, price, favorites, owners, stars } =
        props.detail;
    console.log(props);
    // console.log('img :>> ', `${IMG_URL}/${img}/${imgName.a0}`);
    return (
        <>
            //TODO:父層傳進來 //TODO:
            {/* 因為細節頁的推薦卡點進去也是細節頁 */}
            <Link
                // to={routes.product + routes.productDetail}
                to={{
                    pathname: props.to,
                    state: props.detail,
                }}
                className="link"
            >
                <div className="card-border " data-tilt>
                    {/* <!-- data-tilt 特效 看是否保留 --> */}
                    <div className="card-img ">
                        <div className="ratios">
                            <img
                                src={`${IMG_URL}/${img}${imgName.a0}`}
                                alt=""
                            />
                            {/* <img src={`${IMG_URL}/${img}/f00.jpg`} alt="" /> */}
                        </div>
                    </div>
                    <div className="card-body text-start p-0 mt-2 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="card-title mb-0">{name}</p>
                            <i className="fas fa-heart"></i>
                        </div>
                        <div className="text-start">NT {price}</div>
                    </div>
                </div>
            </Link>
        </>
    );
}
export default Card;

{
    /* <div className="col-6 col-md-3">
<div className="card-border ">
    <div className="card-img ">
        <div className="ratios">
            <img src={cardDemo} alt="" />
        </div>
    </div>
    <div className="card-body text-start p-0 my-2 my-md-4">
        <div className="d-flex justify-content-between align-items-center">
            <p className="card-title">婚禮／Wedding-1</p>
            <i className="fas fa-heart"></i>
        </div>
        <div className="text-start">NT 20</div>
    </div>
</div>
</div>
<div className="col-6 col-md-3">
<div className="card-border">
    <div className="card-img ">
        <div className="ratios">
            <img src={cardDemo} alt="" />
        </div>
    </div>
    <div className="card-body text-start p-0 my-2 my-md-4">
        <div className="d-flex justify-content-between align-items-center">
            <p className="card-title">婚禮／Wedding-1</p>
            <i className="fas fa-heart"></i>
        </div>
        <div className="text-start">NT 20</div>
    </div>
</div>
</div>
<div className="col-6 col-md-3">
<div className="card-border">
    <div className="card-img ">
        <div className="ratios">
            <img src={cardDemo} alt="" />
        </div>
    </div>
    <div className="card-body text-start p-0 my-2 my-md-4">
        <div className="d-flex justify-content-between align-items-center">
            <p className="card-title">婚禮／Wedding-1</p>
            <i className="fas fa-heart"></i>
        </div>
        <div className="text-start">NT 20</div>
    </div>
</div>
</div> */
}
