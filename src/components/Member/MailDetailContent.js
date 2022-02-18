import React from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import { routes } from '../../utils/routes';

function MailDetailContent(props) {
    const match = useRouteMatch();

    return (
        <div className="col-12 col-md-10 member-mail-detail">
            <div className="container">
                {/* card */}
                <div className="row mail-card">
                    <div className="col-auto">
                        <h4>訂單通知</h4>
                        <hr />
                        <p>
                            註冊會員成功，電子信箱已驗證，可以開始立即享受購物樂趣!
                            註冊會員成功，電子信箱已驗證，可以開始立即享受購物樂趣!
                            註冊會員成功，電子信箱已驗證，可以開始立即享受購物樂趣!
                        </p>
                        <p>2022/01/18</p>
                        <Link
                            className="btn ms-auto d-block"
                            to={routes.member + routes.mail}
                        >
                            <span>關閉</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MailDetailContent;
