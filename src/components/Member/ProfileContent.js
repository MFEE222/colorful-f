import React from 'react';
import ProductImg from '../../images/product-img.jpeg';

function ProfileContent(props) {
    return (
        <div className="col-12 col-md-10 member-profile-main">
            {/* <!-- title --> */}
            <div className="row mb-3">
                <div className="col-12 col-md-auto me-md-3">
                    <h1>個人資料</h1>
                    <h2>完成填寫個人資料可享有更多會員專屬權益</h2>
                </div>
                <div className="col-auto avator">
                    <div className="ratio ratio-1x1">
                        <img src={ProductImg} alt="" />
                    </div>
                </div>
            </div>
            {/* <!-- form --> */}
            <form>
                {/* <!-- name --> */}
                <div className="row mb-3">
                    <label
                        htmlFor="member-name"
                        className="col-auto col-md-1 col-form-label"
                    >
                        姓名
                    </label>
                    <div className="col">
                        <input
                            type="text"
                            name="member-name"
                            className="form-control"
                        />{' '}
                    </div>
                </div>
                {/* <!-- gender --> */}
                <fieldset className="row mb-3">
                    <legend className="col-auto col-md-1 col-form-label">
                        性別
                    </legend>
                    <div className="col align-self-center">
                        <div className="form-check ps-0 d-inline py-2">
                            <input
                                type="radio"
                                name="gender"
                                id="gender-male"
                                value="male"
                            />{' '}
                            <label
                                htmlFor="gender-male"
                                className="form-check-label"
                            >
                                男生
                            </label>
                        </div>
                        <div className="form-check ps-0 d-inline py-2">
                            <input
                                type="radio"
                                name="gender"
                                id="gender-female"
                                value="female"
                            />{' '}
                            <label
                                htmlFor="gender-female"
                                className="form-check-label"
                            >
                                女生
                            </label>
                        </div>
                        <div className="form-check ps-0 d-inline py-2">
                            <input
                                type="radio"
                                name="gender"
                                id="gender-private"
                                value="private"
                            />{' '}
                            <label
                                htmlFor="gender-private"
                                className="form-check-label"
                            >
                                不公開
                            </label>
                        </div>
                    </div>
                </fieldset>
                {/* <!-- birthday --> */}
                <div className="row mb-3">
                    <label
                        id="birthday"
                        className="col-auto col-md-1 col-form-label"
                    >
                        生日
                    </label>
                    <div className="col">
                        <input
                            type="date"
                            name="birthday"
                            id="birthday"
                            className="form-control"
                        />{' '}
                    </div>
                </div>
                {/* <!-- phone --> */}
                <div className="row mb-3">
                    <label
                        htmlFor="phone"
                        className="col-auto col-md-1 col-form-label"
                    >
                        手機
                    </label>
                    <div className="col">
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            maxlength="10"
                            className="form-control"
                        />{' '}
                    </div>
                </div>
                {/* <!-- email --> */}
                <div className="row mb-3">
                    <label
                        htmlFor="email"
                        className="col-auto col-md-1 col-form-label"
                    >
                        Email
                    </label>
                    <div className="col">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="example@mail.com"
                        />{' '}
                    </div>
                </div>
                {/* <!-- submit --> */}
                <button type="submit" className="btn">
                    儲存
                </button>
            </form>
        </div>
    );
}

export default ProfileContent;
