import React from 'react';
import {
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';
import { routes } from '../../utils/routes';


// import MailDetail from './mailDetail';


function MailContent(props) {
    const match = useRouteMatch();
    // console.log('match :>> ', match);

    return (
        <div className="col-12 col-md-10 member-mail">
            <div className="container">
                {/* title */}
                <div className="row">
                    <div className="col-auto">
                        <h2 className="mail-title">信件總覽</h2>
                    </div>
                </div>
                {/* card */}
                <div className="row mail-card">
                    <div className="col-auto">
                        <h4>訂單通知</h4>
                        <p>
                            註冊會員成功，電子信箱已驗證，可以開始立即享受購物樂趣!
                            註冊會員成功，電子信箱已驗證，可以開始立即享受購物樂趣!
                            註冊會員成功，電子信箱已驗證，可以開始立即享受購物樂趣!
                        </p>
                        <p>2022/01/18</p>
                        <Link className="btn ms-auto d-block"  to={routes.member + routes.mailDetail}>
                            <span>查看信件</span>
                        </Link>
                    </div>
                </div>
                <div className="row mail-card">
                    <div className="col-auto">
                        <h4>訂單通知</h4>
                        <p>
                            註冊會員成功，電子信箱已驗證，可以開始立即享受購物樂趣!
                            註冊會員成功，電子信箱已驗證，可以開始立即享受購物樂趣!
                            註冊會員成功，電子信箱已驗證，可以開始立即享受購物樂趣!
                        </p>
                        <p>2022/01/18</p>
                        <Link className="btn ms-auto d-block"  to={routes.member + routes.mailDetail}>
                            <span>查看信件</span>
                        </Link>
                    </div>
                </div>
                <div className="row mail-card">
                    <div className="col-auto">
                        <h4>訂單通知</h4>
                        <p>
                            註冊會員成功，電子信箱已驗證，可以開始立即享受購物樂趣!
                            註冊會員成功，電子信箱已驗證，可以開始立即享受購物樂趣!
                            註冊會員成功，電子信箱已驗證，可以開始立即享受購物樂趣!
                        </p>
                        <p>2022/01/18</p>
                        <Link className="btn ms-auto d-block"  to={routes.member + routes.mailDetail}>
                            <span>查看信件</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MailContent;
