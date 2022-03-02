import React, { useState, useEffect } from 'react';

function ClickStar(props) {
    // const [current, setCurrent] = useState(0);
    const { starCurrent, setStarCurrent } = props;
    console.log('props :>> ', props);

    // Didupdate
    useEffect(
        function () {
            // 如果變化就發 post 到後端寫入評價
            console.log('starCurrent :>> ', starCurrent);
        },
        [starCurrent]
    );

    return (
        <>
            {[1, 2, 3, 4, 5].map(function (e) {
                return (
                    <li>
                        <i
                            key={e}
                            className={
                                e <= starCurrent
                                    ? 'far fa-star active'
                                    : 'far fa-star'
                            }
                            onClick={function () {
                                setStarCurrent(e);
                            }}
                        ></i>
                    </li>
                );
            })}
        </>
    );
}
export default ClickStar;
