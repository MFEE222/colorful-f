import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';

function ReviewThumbUp(props) {
    const likes = props.children;
    // const auth = React.useContext(AuthContext);
    const auth = false;

    // 這個 like 是該會員是否已經對該評論點擊過讚
    const [liked, setLiked] = useState(null);

    // 生命週期
    // useEffect(async function () {
    //     if (!auth) return;
    //     // 取得會員一開始對該評論的點讚狀態
    //     const api = `${API_URL}/...`;
    //     const res = await axios.get(api);
    //     setLiked(res.data);
    // }, []); // 掛載

    // useEffect(
    //     async function () {
    //         if (!auth) return;
    //         // 將最新的資料設定回去資料庫
    //         const res = await axios.post(api, { liked });
    //     },
    //     [liked]
    // ); // 更新

    // const handler = () => {
    //     if (!auth) {
    //         console.log('彈跳出視窗，提示必須先登入');
    //         return;
    //     }

    //     setLiked(!liked);
    // };

    // const isLike = () => {
    //     // console.log('123');
    //     const isliked = liked;
    //     if (isliked) {
    //         if (isliked) {
    //             likes = likes--;
    //             liked(false);
    //         } else {
    //             likes = likes++;
    //             liked(true);
    //         }
    //     } else {
    //         likes = likes++;
    //         liked(true);
    //     }
    // };
    return (
        <></>
        // <li onClick={handler}>
        //     {/* 按過顯示fas */}
        //     {liked ? (
        //         <i className="fas fa-thumbs-up"></i>
        //     ) : (
        //         <i className="far fa-thumbs-up"></i>
        //     )}
        //     {likes}
        // </li>
    );
}
export default ReviewThumbUp;
