import React, { useEffect, useState, useRef } from 'react';
import ProductImg from '../../images/product-img.jpeg';
import Content from './Content';

function ProfileContent(props) {
    const { profile, setProfile, handleChange, handleSubmit } = props;
    const [imgs, setImgs] = useState([]); //照片顯示
    const collect = useRef([]); //接收照片
    // const filesCollect = useRef([]); //接收照片
    // const [files, setFiles] = useState([]); //照片傳給後端

    // console.log('props :>> ', props);

    //把圖片顯示出來（建立在狀態）
    const handleUploadFile = (e) => {
        const reader = new FileReader();
        // console.log('reader :>> ', e.target.files[0].name);
        reader.readAsDataURL(e.target.files[0]);
        // console.log('e.target.files[i] :>> ', e.target.files[0]);
        reader.addEventListener('load', function () {
            collect.current.push({
                resource: reader.result,
            });
            // console.log('collect :>> ', collect);
            const newImgs = [...collect.current]; //接收照片在設定給state
            // const newFiles = [...filesCollect.current];
            // console.log('newImgs :>> ', newImgs);
            setImgs(newImgs);
            // console.log('imgs :>> ', imgs);
            // setFiles(newFiles);
        });
    };
    useEffect(() => {
        // console.log('imgs :>> ', imgs);
    }, [imgs]);
    return (
        <>
            <div className="member-comment  member-profile-main row justify-content-between">
                {/* <!-- title --> */}
                <div className="col-12 col-md-6">
                    <div className=" mb-5">
                        <div className="col-12 col-md-auto me-md-3">
                            <h5>個人資料</h5>
                            <p>完成填寫個人資料可享有更多會員專屬權益</p>
                        </div>
                    </div>
                    {/* <!-- form --> */}
                    <form className="mt-5 ">
                        {/* <!-- name --> */}
                        <div className="row">
                            <div className="col-12 col-md-10 mb-3">
                                <div className="row">
                                    <label
                                        htmlFor="member-name"
                                        className="col-auto col-md-1 col-form-label"
                                    >
                                        姓名
                                    </label>
                                    <div className="col">
                                        <input
                                            value={profile.name}
                                            type="text"
                                            name="member-name"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-10 mb-3">
                                <div className="row">
                                    <label
                                        id="birthday"
                                        className="col-auto col-md-1 col-form-label"
                                    >
                                        生日
                                    </label>
                                    <div className="col">
                                        <input
                                            value={profile.birthDay}
                                            // type="date"
                                            name="birthday"
                                            id="birthday"
                                            type="text"
                                            className="form-control"
                                            onChange={handleChange}
                                            placeholder="YYYY/MM/DD"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- birthday --> */}
                        <div className="row">
                            <div className="col-12 col-md-10 mb-3">
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
                                            value={profile.phone}
                                            onChange={handleChange}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- mail --> */}
                        <div className="row">
                            <div className="col-12 col-md-10 mb-3">
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
                                            value={profile.email}
                                            onChange={handleChange}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-12 col-md-6">
                    {/* <div className="row"> */}
                    <label htmlFor="photo" className="custom-file-upload me-4">
                        上傳圖片
                    </label>
                    <input
                        name="photo"
                        id="photo"
                        type="file"
                        onChange={(e) => {
                            handleUploadFile(e);
                            // 圖片儲存的方式不太一樣
                            setProfile({
                                ...profile,
                                photo: e.target.files[0],
                            });
                        }}
                    />
                    <div className="upload-box p-0 me-2 col-6 border">
                        <div className=" ratio ratio-1x1">
                            {profile.photo && <img src={profile.photo} />}
                            {/* 即時顯示圖片 */}
                            <img src={imgs[0] && imgs[0].resource} />
                        </div>
                    </div>
                    {/* </div> */}
                </div>
                {/* <!-- submit --> */}
                <span
                    className="btn submit mt-5 text-center"
                    onClick={handleSubmit}
                >
                    完成
                </span>
            </div>
        </>
        // </Content>
    );
}

export default ProfileContent;
