import React from 'react';

function Container(props) {
    return (
        <main className="container-fluid container-md">
            <div className="row">{props.children}</div>
        </main>
    );
}

export default Container;
