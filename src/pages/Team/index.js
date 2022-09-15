import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeamContent from '../../components/Team/TeamContent';

function Team(props) {
    return (
        <>
            <Routes>
                <Route index element={<TeamContent />}></Route>
            </Routes>
        </>
    );
}

export default Team;
