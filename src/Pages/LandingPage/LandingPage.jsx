import React from 'react';
import MorphingBackground from '../../Components/MorphingBackground/MorphingBackground';
import './LandingPage.css';
import Navbar from '../../Components/Navbar/NavigationBar';

const LandingPage = () => {
    return (

        <div className="landing-page">
            <Navbar />
            <MorphingBackground />
        </div>
    );
};

export default LandingPage;