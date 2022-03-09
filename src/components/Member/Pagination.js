import React, { useState, useEffect } from 'react';

function Pagination(props) {
    const [active, setActive] = useState(0);
    const { limit, total, offset, setOffset } = props;

    // console.log('limit :>> ', limit);
    // console.log('total :>> ', total);
    if (!total || !limit) return <></>;

    const pages = new Array(Math.ceil(total / limit));
    pages.fill(0);
    // console.log('pages :>> ', pages);

    return (
        <>
            <div className="container mt-4 ">
                <div className="pagination">
                    <ul>
                        {pages &&
                            pages.map(function (e, i) {
                                {
                                    /* console.log('i :>>', i); */
                                }
                                return (
                                    <li
                                        className={active == ++i && 'active'}
                                        key={i + 1}
                                        onClick={function () {
                                            setOffset(i * limit);
                                            setActive(++i);
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
