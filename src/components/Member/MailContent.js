import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'utils/routes';

// import MailDetail from './mailDetail';

function MailContent(props) {
    return (
        <div className="col-12 col-md-12 member-mail">
            <div className="container">
                {/* title */}
                <div className="row">
                    <div className="col-auto mail-title mb-3">
                        <h2 className="title">信件總覽</h2>
                    </div>
                </div>
                {/* card */}
                <div className="row mail-card">
                    <div className="col-12 ps-0 align-items-center align-content-center">
                        <h4>會員通知</h4>
                        <p>
                            Hi！恭喜您成功註冊會員，歡迎加入輕鬆修圖的行列，可以立即享受購物的樂趣!
                        </p>
                        <p>2022/03/09</p>
                        <Link
                            className="btn me-2 align-self-end"
                            to={routes.member.mail.self}
                        >
                            <span>查看信件</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MailContent;
