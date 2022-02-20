import React from 'react';

function ShowSrar(props) {
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
            <li className="">
                <i key={i + 'full'} className="far fa-star active"></i>
            </li>
        );
    }
    // 渲染半星
    if (halfstar) {
        for (let j = 0; j < halfstar; j++) {
            starjsx.push(
                <li>
                    <i key={j + 'half'} class="far fa-star-half active"></i>
                </li>
            );
        }
    }
    // 渲染灰星
    if (nullstar) {
        for (let k = 0; k < nullstar; k++) {
            starjsx.push(
                <li className="">
                    <i key={k + 'full'} className="far fa-star"></i>
                </li>
            );
        }
    }
    // console.log(starjsx);
    return starjsx;
}
export default ShowSrar;
