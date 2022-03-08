import axios from 'axios';
import { format } from 'prettier';
import React, { useState, useEffect } from 'react';
import ProfileContent from '../../components/Member/ProfileContent';
import {
    API_POST_MEMBER_PROFILE_PHOTO,
    API_POST_MEMBER_PROFILE,
    IMG_URL2,
    API_GET_MEMBER_PROFILE_FIGURE,
} from '../../utils/config';

//
import { useAuthContext } from '../../utils/context/AuthContext';

function Profile(props) {
    // if(auth.current)
    const auth = useAuthContext();
    console.log('auth.user :>> ', auth.user);
    const user = auth.user;
    //TODO:拿到登入會員的詳細資料[1]
    // const uprofile= auth.user{
    //     uid: 1,
    //     name: 'queena',
    //     gender: 'female',
    //     birthDay: '1998/12/1',
    //     phone: '0123456789',
    //     email: '123@gmail.com',
    //     avator: '',
    // }
    //狀態
    //TODO:設定進狀態[2]
    const [profile, setProfile] = useState({
        // uid: 1,
        name: user.name,
        // name: 'queena',
        birthDay: user.birthday,
        // birthDay: '1998/12/1',
        phone: user.phone,
        // phone: '0123456789',
        email: user.email,
        // email: '123@gmail.com',
        // photo:user.figure,
        photo: `${IMG_URL2}/uploads/profile/u-${user.id}/${user.id}.jpg`,
    });

    // 設定回狀態函式
    function handleChange(e) {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    }
    //送出 發api
    async function handleSubmit(e) {
        //關掉預設
        e.preventDefault();
        // console.log('here :>> ', 'here');
        try {
            let formData = new FormData();
            formData.append('photo', profile.photo);
            //上傳照片
            let response = await axios.post(
                API_POST_MEMBER_PROFILE_PHOTO + `?uid=${user.id}`,
                formData
            );

            //更新資料庫
            let responseDetail = await axios.post(
                API_POST_MEMBER_PROFILE + `?uid=${user.id}`,
                {
                    name: profile.name,
                    birthDay: profile.birthDay,
                    phone: profile.phone,
                    email: profile.email,
                }
            );
            //圖片上傳
            //細節資訊
        } catch (err) {
            console.error(err);
        }
    }

    //
    useEffect(() => {
        // console.log('profile :>> ', profile);
    }, [profile]);
    //更新完成要發送api
    return (
        <ProfileContent
            profile={profile}
            setProfile={setProfile}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}

export default Profile;
