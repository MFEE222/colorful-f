import React, { useState, useEffect } from 'react';

function Content(props) {
    return (
        <>
            <div className="container col-12 col-md-10 order-1 order-md-2 member">
                {props.children}
            </div>
        </>
    );
}

export default Content;
