import React from 'react';

function Main(props) {
    return (
        <main className="container-fluid container-md member-main">
            <div className="row">{props.children}</div>
        </main>
    );
}

export default Main;
