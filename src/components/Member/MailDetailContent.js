import React from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import { routes } from '../../utils/routes';

function MailDetailContent(props) {
    const match = useRouteMatch();

    return (
        <div className="col-12 col-md-12 member-mail-detail">
            <div className="container">
                {/* card */}
                <div className="row mail-card">
                    <div className="col">
                        <h4>會員通知</h4>
                        <hr />
                        <p>
                        Hi！恭喜您成功註冊會員，歡迎加入輕鬆修圖的行列，可以立即享受購物的樂趣!
                        </p>
                        <p>2022/03/09</p>
                        <Link className="btn ms-auto d-block" to={routes.mail}>
                            <span>關閉</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MailDetailContent;
