import React from 'react';
import { useLoadingContext } from '../../utils/context/LoadingContext';

function Try(props) {
    const loading = useLoadingContext();

    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={function () {
                    loading.start();
                    setTimeout(function () {
                        loading.end();
                    }, 3000);
                }}
            >
                Loading
            </button>
        </div>
    );
}

export default Try;
