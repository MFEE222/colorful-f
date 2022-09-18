// standarad library
import { useState, useEffect } from 'react';

// internal library
import {
    useAuthContext,
    useEditAvatar,
    useEditEmail,
    useEditPersonalInfo,
} from 'contexts/AuthContext';
import { useLoadingContext } from 'contexts/LoadingContext';

// TODO: 網路請求修改資料後，自動刷新
// FIXME: 當 useAuth 失敗時，自動檢查 accessToken 時效性並進行更新

// components
function Profile(props) {
    // context
    const { user, accessToken } = useAuthContext();
    const { UILoading } = useLoadingContext();
    // state
    const [query, setQuery] = useState({
        name: '',
        email: '',
        birthday: '',
        phone: '',
        avatar: '',
        avatarPreview: '',
        submit: false,
    });
    // hook
    const data = {
        person: useEditPersonalInfo(query, setQuery),
        email: useEditEmail(query, setQuery),
        avatar: useEditAvatar(query, setQuery),
    };

    // event
    function eventInput(e) {
        const newQuery = { ...query };
        newQuery[e.target.name] = e.target.value;
        setQuery(newQuery);
    }

    function eventFile(e) {
        const avatar = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setQuery({
                ...query,
                avatar: avatar,
                avatarPreview: reader.result,
            });
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    function eventSubmit(e) {
        e.preventDefault();
        setQuery({ ...query, submit: true });
    }

    // render
    const render = () => {
        if (data.avatar.loading || data.email.loading) {
            return <UILoading />;
        }

        return (
            <div className="member-comment  member-profile-main row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="text-center mb-5">
                        <div className="col-12 col-md-auto me-md-3">
                            <h5>個人資料</h5>
                            <p>完成填寫個人資料可享有更多會員專屬權益</p>
                        </div>
                    </div>
                    {/* <!-- form --> */}
                    <form className="mt-5 ">
                        <div className="row justify-content-center">
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
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={query.name}
                                            placeholder={user.name}
                                            onChange={eventInput}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 mb-3">
                                <div className="row justify-content-center">
                                    <label
                                        id="birthday"
                                        className="col-auto col-md-1 col-form-label"
                                    >
                                        生日
                                    </label>
                                    <div className="col">
                                        <input
                                            id="birthday"
                                            type="text"
                                            className="form-control"
                                            name="birthday"
                                            value={query.birthday}
                                            placeholder={
                                                user.birthday
                                                    ? user.birthday
                                                    : 'YYYY-MM-DD'
                                            }
                                            onChange={eventInput}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 mb-3">
                                <div className="row justify-content-center">
                                    <label
                                        htmlFor="phone"
                                        className="col-auto col-md-1 col-form-label"
                                    >
                                        手機
                                    </label>
                                    <div className="col">
                                        <input
                                            type="text"
                                            id="phone"
                                            maxLength="10"
                                            className="form-control"
                                            name="phone"
                                            value={query.phone}
                                            placeholder={
                                                user.phone
                                                    ? user.phone
                                                    : '09xxxxxxxx'
                                            }
                                            onChange={eventInput}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 mb-3">
                                <div className="row ">
                                    <label
                                        htmlFor="email"
                                        className="col-auto col-md-1 col-form-label"
                                    >
                                        Email
                                    </label>
                                    <div className="col  ps-0">
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            name="email"
                                            value={query.email}
                                            placeholder={
                                                user.email
                                                    ? user.email
                                                    : 'example@gmail.com'
                                            }
                                            onChange={eventInput}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-12 col-md-6 text-center">
                    <label htmlFor="photo" className="custom-file-upload mb-4">
                        上傳圖片
                    </label>
                    <input
                        id="photo"
                        type="file"
                        name="avatar" // must be naming 'avatar'
                        onChange={eventFile}
                    />
                    <div className="upload-box p-0 m-auto col-6 border">
                        <div className=" ratio ratio-1x1">
                            {query.avatarPreview ? (
                                <img src={query.avatarPreview} alt="avatar" />
                            ) : (
                                <img src={user.avatar} alt="avatar" />
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <span
                        className="btn submit mt-5 text-center"
                        onClick={eventSubmit}
                    >
                        完成
                    </span>
                </div>
            </div>
        );
    };

    return <>{render()}</>;
}

export default Profile;
