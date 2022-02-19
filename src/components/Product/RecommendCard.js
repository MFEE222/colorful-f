import React, { useEffect, useState } from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';
import cardDemo from '../../images/navbar-ex-1.jpg';
import Card from './Card';
import decBar from '../../icons/dec-bar.png';
import axios from 'axios';
import { API_URL } from '../../utils/config';

function RecommendCard(props) {
    const match = useRouteMatch();
    let [rows, setRows] = useState([]);
    //TODO:api取得銷售前幾名
    //TODO:api要推薦
    const fetchRank = async () => {
        const response = await axios.get(`${API_URL}/product/rank`);
        const rankData = response.data;
        console.log(rankData.rank);
        // console.log(Array.isArray(rankData.rank));
        // console.log(typeof rankData.rank);
        setRows(rankData.rank);
    };

    useEffect(() => {
        console.log('1234');
        fetchRank();
    }, []);

    return (
        <>
            <div className="container">
                <div className="recommend mt-5">
                    <div className="recommend-title">
                        <div className="text-box">
                            <div className="phone-title">
                                <h3>熱銷排行</h3>
                                <img
                                    className="d-md-none"
                                    src={decBar}
                                    alt=""
                                />
                                <p className="d-none d-md-block">
                                    暢銷色調值得您擁有 強化風格與色調
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="recommend-card row">
                        {rows.map((rank) => {
                            return (
                                <div className="col-6 col-md-3">
                                    <Card
                                        key={rank.id}
                                        detail={
                                            (rank.img, rank.name, rank.price)
                                        }
                                        to={`${match.path}/detail/${rank.id}`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecommendCard;
