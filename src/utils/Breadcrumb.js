import React from 'react';

function Breadcrumb(props) {
    return (
        <nav className="vice-nav" aria-label="breadcrumb">
            <div className="container">
                <ol className="mb-0 breadcrumb align-items-center">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Library</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                        <a href="#">Data</a>
                    </li>
                </ol>
                {/* <!-- expand button --> */}
                <a
                    type="button"
                    href=".sidebar-left"
                    data-bs-toggle="collapse"
                    // aria-controls=".sidebar-left"
                    // aria-expand="false"
                    className="expand-alt"
                >
                    <i className="fas fa-chevron-down"></i>
                    {/* <!-- <i className="fas fa-expand-alt"></i> --> */}
                    {/* <!-- <i className="fas fa-arrows-alt-v"></i> --> */}
                </a>
            </div>
        </nav>
    );
}

export default Breadcrumb;
