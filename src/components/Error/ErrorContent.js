import React from 'react';

function ErrorContent(props) {
    return (
        <main className="er-main">
            <div className="container">
                <div className="row er-text">
                    <div className="col-12">
                        <h2 className="er-title">404</h2>
                        <p className="er-subtitle">你要找的頁面迷路了</p>
                        <p className="er-subtitle-en">
                            The page you are looking for lost
                        </p>
                    </div>
                </div>
                <div className="row er-btn">
                    <div className="col-12">
                        <a className="er-button" href="">
                            返回首頁
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ErrorContent;
