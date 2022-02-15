import React from 'react';
import Navbar from '../../utils/Navbar';
import Footer from '../../utils/Footer';
import TeamContent from '../../components/Team/TeamContent';



function Team(props) {
    return (
        <>
            <Navbar />
            
            <TeamContent />

            <Footer />
        </>
    );
}

export default Team;
