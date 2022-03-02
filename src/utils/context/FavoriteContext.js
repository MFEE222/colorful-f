//內建庫
import React, { useState, useEffect } from 'react';
// 第三方庫
import axios from 'axios';
// 共用
import { API_POST_AUTH_LOGIN, API_GET_PRODUCTS } from '../config';
import { useAuthContext } from './AuthContext';

//provider
export function wishlistProvider(props) {
    const auth = useAuthContext();
    const [favorites, setFavorites] = useState([]);
}
//身分驗證
