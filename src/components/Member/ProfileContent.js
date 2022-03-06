import React from 'react';
import ProductImg from '../../images/product-img.jpeg';
import Content from './Content';

function ProfileContent(props) {
    return (
        // <Content col-12 col-md-10n>
        <div className="member-comment  member-profile-main">
            {/* <!-- title --> */}
            <div className="row justify-content-between mb-3">
                <div className="col-12 col-md-auto me-md-3">
                    <h5>個人資料</h5>
                    <p>完成填寫個人資料可享有更多會員專屬權益</p>
                </div>
                <label htmlFor="photos" className="custom-file-upload me-4">
                    上傳圖片
                </label>
                <input
                    name="photos"
                    id="photos"
                    type="file"
                    // onChange={handleUploadFile}
                    multiple
                />
                <div
                    className="upload-box p-0 me-2 "
                    // onClick={() => setModalShow(true)}
                >
                    <div
                        className="delete-btn"
                        // onClick={() => {
                        //     const current = img.name;
                        //      handleRemoveImg(current);
                        // }}
                    >
                        <i className="fas fa-times "></i>
                    </div>
                    <div className=" ratio ratio-1x1">
                        {/* 即時顯示圖片 */}
                        {/* <img key={i} src={img.resource} /> */}
                    </div>
                </div>
            </div>
            {/* <!-- form --> */}
            <form>
                {/* <!-- name --> */}
                <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        <div className="row">
                            <label
                                htmlFor="member-name"
                                className="col-auto col-md-1 col-form-label"
                            >
                                姓名
                            </label>
                            <div className="col ">
                                <input
                                    type="text"
                                    name="member-name"
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <fieldset className="row mb-3">
                            <label className="col-auto col-md-1 col-form-label">
                                性別
                            </label>
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
                                        className="form-check-label me-2"
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
                                        className="form-check-label me-2"
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
                    </div>
                </div>

                {/* <!-- gender --> */}

                {/* <!-- birthday --> */}
                <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        <div className="row">
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
                                />
                            </div>
                        </div>
                    </div>
                    {/* <!-- phone --> */}
                    <div className="col-12 col-md-6 mb-3">
                        <div className="row">
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
                                    maxLength="10"
                                    className="form-control"
                                />{' '}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- email --> */}
                <div className="row">
                    <div className="col-12  col-md-6 mb-3">
                        <div className="row">
                            <label
                                htmlFor="email"
                                className="col-auto col-md-1 col-form-label"
                            >
                                Email
                            </label>
                            <div className="col  ps-0">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="example@mail.com"
                                />{' '}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- submit --> */}
                <span
                    className="btn submit float-end mt-5"
                    //     onClick={handleSubmit}
                >
                    完成
                </span>
            </form>
        </div>
        // </Content>
    );
}

export default ProfileContent;
