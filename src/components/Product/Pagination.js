import React from 'react';

// const { useProductsContext } from '../../utils/context/ProductsContex';

function Pagination(props) {
    // 屬性
    const { option, setOption } = props;
    const { limit } = props;
    // 變數

    // 函數
    function handleOffset(offset) {
        const o = { ...option };
        o.limit = limit;
        o.offset = o.offset;
        setOption(o);
    }

    return (
        <>
            <div className="container">
                <div className="pagination">
                    <ul>
                        {[1, 2, 3, 4, 5].map(e, i) {
                        }}
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Pagination;
