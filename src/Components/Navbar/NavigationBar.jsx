import React from 'react';
import './NavigationBar.css';
import logo from '../../Assets/logo.png';
import GovEmblems from '../../Assets/GovEmblems.png';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={GovEmblems} alt="Emblems" className="navbar-logo" />
                <img src={logo} alt="YatraBuddy Logo" className="navbar-logo" />
                <div className="brand-text">
                    <span className="brand-name">YatraBuddy</span>
                    <span className="brand-tagline">For Inquiry, Assistance & Grievance Redressal</span>
                </div>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#">FAQ</a>
                </li>
                <li className="nav-item">
                    <a href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <a href="#">Sign Up</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;