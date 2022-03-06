import React from 'react';

function ShowStar(props) {
    let stars = props.children || '';
    let score = stars.toString();
    let scoreArray = score.split('.');
    // 滿星
    let fullstar = parseInt(scoreArray[0]);
    // 半星
    let halfstar = parseInt(scoreArray[1]) >= 5 ? 1 : 0;
    // 灰星
    let nullstar = 5 - fullstar - halfstar;
    let starjsx = [];
    // 渲染满星
    for (let i = 0; i < fullstar; i++) {
        starjsx.push(
            <li key={i + 'full'} className="">
                <i className="far fa-star active"></i>
            </li>
        );
    }
    // 渲染半星
    if (halfstar) {
        for (let i = 0; i < halfstar; i++) {
            starjsx.push(
                <li key={i + 'half'}>
                    <i className="far fa-star-half active"></i>
                </li>
            );
        }
    }
    // 渲染灰星
    if (nullstar) {
        for (let i = 0; i < nullstar; i++) {
            starjsx.push(
                <li key={i + 'null'} className="">
                    <i className="far fa-star"></i>
                </li>
            );
        }
    }
    // console.log(starjsx);
    return starjsx;
}
export default ShowStar;
