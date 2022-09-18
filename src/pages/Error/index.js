import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { routes } from 'utils/routes';

import ErrorContent from 'components/Error/ErrorContent';

function Error(props) {
    return (
        <>
            <Routes>
                <Route path="*" element={<ErrorContent />} />
            </Routes>
        </>
    );
}

export default Error;
