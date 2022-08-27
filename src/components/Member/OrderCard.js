import React from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import routes, { reverse } from '../../utils/routes';
import ImgProduct from '../../images/product-img.jpeg';

function OrderCard(props) {
    const match = useRouteMatch();

    return (
        <div className="container p-0">
            {/* <!-- header --> */}

            <div className="d-flex review-card flex-wrap">
                <p className="col-12 col-lg-4 mb-3">2020/01/01 00:00</p>
                <p className="col-12 col-lg-8 mb-3">
                    訂單編號 <span>2135276BRUYSBNYK</span>
                </p>

                <div className="row">
                    <div className="col-auto col-md-10 review-card-img me-4">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 row align-items-center align-content-center">
                        <h4 className="col-10  align-self-center m-0">
                            Product
                        </h4>
                        <h4 className="col-2 order-card-price">$10</h4>
                        <p className="col-10 me-auto order-card-descp content">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vitae omnis, distinctio deleniti culpa
                            voluptate odio perferendis quisquam ipsam, doloribus
                            ab nulla hic asperiores? Quaerat repellendus
                            suscipit voluptate eum itaque. Veniam.
                        </p>
                    </div>
                </div>

                <div className="col align-self-end order-card-status">
                    <div className="d-none d-md-block">
                        <hr />
                    </div>
                    {/* FIXME: fix id */}
                    <LinkContainer
                        to={reverse(routes.member.order.id, { id: 1 })}
                    >
                        <button className="ms-auto d-block btn">Pending</button>
                    </LinkContainer>
                </div>
            </div>
        </div>
    );
}

export default OrderCard;
