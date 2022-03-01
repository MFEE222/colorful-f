import React, { useState, useEffect } from 'react';

function Pagination(props) {
    const { option, setOption, limit, total } = props;

    // console.log('limit :>> ', limit);
    console.log('total :>> ', total);
    if (!total || !limit) return <></>;

    const pages = new Array(Math.floor(total / limit) + 1);
    pages.fill(0);
    // console.log('pages :>> ', pages);

    function handleOffset(offset) {
        const o = { ...option };
        o.limit = limit;
        o.offset = offset;
        setOption(o);
    }

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
                                        key={i + 1}
                                        onClick={function () {
                                            handleOffset(i);
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
