import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './routes';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-auto f-left">
                        <h4 className="f-logo">COLORFUL</h4>
                        <p className="f-text mb-4">
                            老馬識途，新手小白也能輕鬆濾圖
                            <br />
                            色調濾鏡自由配，隨心所欲當個高端調色player
                        </p>
                        <form className="row mt-3">
                            <div className="form-floating">
                                <input
                                    type="email"
                                    className="f-form-control"
                                    id="floatingInput"
                                    placeholder="Your email address"
                                />
                                <button type="submit" className="f-btn ms-4">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2 col-xs-auto f-right">
                        <h5 className="f-project">Services</h5>
                        <Link to={routes.productFood} className="f-link">
                            客戶服務
                        </Link>
                        <br />
                        <Link to={routes.productNewest} className="f-link">
                            照片調色
                        </Link>
                        <br />
                        <Link to={routes.productNewest} className="f-link">
                            產品目錄
                        </Link>
                        <br />
                        <Link to={routes.teach} className="f-link">
                            教學頁面
                        </Link>
                        <br />
                        <Link to={routes.game} className="f-link">
                            心理測驗
                        </Link>

                    </div>
                    <div className="col-md-2 col-xs-auto f-right">
                        <h5 className="f-project">About us</h5>
                        <Link to={routes.team} className="f-link">
                            團隊介紹
                        </Link>
                        <br />
                        <Link to="/" className="f-link">
                            網站介紹
                        </Link>
                        <br />
                    </div>
                    <div className="col-md-2 col-xs-auto f-right">
                        <h5 className="f-project">Support</h5>
                        {/* <Link to="" className="f-link">
                            專人客服
                        </Link>
                        <br /> */}
                        <Link to={routes.team} className="f-link">
                            聯絡我們
                        </Link>
                        <br />
                        <Link to={routes.team} className="f-link">
                            追蹤我們
                        </Link>
                        <br />
                    </div>
                </div>
                <div className="row f-statement">
                    <div className="col-md-8 col-xs-auto">
                        <p>&copy; 2022 Evok Collection. Designed by COLORFUL</p>
                    </div>
                    <div className="col-md-4 col-xs-auto">
                        <i className="f-icon fab fa-facebook"></i>
                        <i className="f-icon fab fa-instagram"></i>
                        <i className="f-icon fab fa-linkedin"></i>
                        <i className="f-icon fab fa-pinterest"></i>
                        <i className="f-icon fab fa-twitter"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
