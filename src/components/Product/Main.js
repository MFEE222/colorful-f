import React from 'react';

function Main(props) {
    return (
        // <div class="container content py-3"></div>;
        <main className="container-fluid container-md product-main">
            <div className="">{props.children}</div>
        </main>
    );
}

export default Main;
