import React, { useState, useEffect } from 'react';

function Pagination(props) {
    //style
    const [active, setActive] = useState('');

    const { onEvent, limit, total } = props;
    // console.log('limit :>> ', limit);
    // console.log('total :>> ', total);
    if (!total || !limit) return <></>;

    const pages = new Array(Math.ceil(total / limit));
    pages.fill(0);
    // console.log('pages :>> ', pages);

    return (
        <>
            <div className="container">
                <div className="pagination">
                    <ul>
                        {pages &&
                            pages.map(function (e, i) {
                                {
                                    /* console.log('i :>>', i); */
                                }
                                return (
                                    <li
                                        // style="color:red"
                                        // className="active"
                                        className={active == i ? 'active' : ''}
                                        key={i + 1}
                                        onClick={function (e) {
                                            onEvent(e, limit, i * limit);
                                            setActive(i);
                                        }}
                                    >
                                        {i + 1}
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Pagination;
