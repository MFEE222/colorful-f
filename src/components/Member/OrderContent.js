import OrderCard from './OrderCard';
import Pagination from './Pagination';

function OrderContent(props) {
    return (
        <>
            <div className=" member-comment">
                {/* <div className="container"> */}
                {/* filterbar */}
                <div className="filter my-3">
                    <div className="filter-box d-flex">
                        <ul className="sort-series p-0">
                            <li
                                className="active py-2 px-3"
                                onClick={function () {}}
                            >
                                全部
                            </li>
                            <li className="py-2 px-3 " onClick={function () {}}>
                                未付款
                            </li>
                            <li className="py-2 px-3" onClick={function () {}}>
                                已付款
                            </li>
                            <li className="py-2 px-3 " onClick={function () {}}>
                                完成
                            </li>
                            <li className="py-2 px-3 " onClick={function () {}}>
                                不成立
                            </li>
                        </ul>
                    </div>
                    <div className="line d-none d-md-block"></div>
                </div>
                {/* card */}
                {/* <div className="row"> */}

                <div className="col-12 member-order-main p-0">
                    {[1, 2, 3].map(function (e, i) {
                        return <OrderCard key={i} />;
                    })}
                    {/* {order.orders &&
                        order.orders.map(function (e, i) {
                            return <OrderCard key={i} />;
                        })} */}
                </div>
            </div>
            <Pagination
            // total={counts}
            // limit={4}
            // offset={offset}
            // setOffset={setOffset}
            />
        </>
    );
}

export default OrderContent;
