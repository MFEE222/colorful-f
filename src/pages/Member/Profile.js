import axios from 'axios';
import { format } from 'prettier';
import React, { useState } from 'react';
import ProfileContent from '../../components/Member/ProfileContent';
import { API_POST_MEMBER_PROFILE } from '../../utils/config';

function Profile(props) {
    // if(auth.current)
    //拿到登入會員的詳細資料
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
    const [profile, setProfile] = useState({
        uid: 1,
        name: 'queena',
        gender: 'female',
        birthDay: '1998/12/1',
        phone: '0123456789',
        email: '123@gmail.com',
        avator: '',
    });

    // 設定回狀態
    function handleChange(e) {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    }
    //送出
    async function handleSubmit(e) {
        //關掉預設
        e.preventDefault();
        try {
            let formData = new FormData();

            //圖片上傳
        } catch (err) {
            console.error(err);
        }
    }
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
