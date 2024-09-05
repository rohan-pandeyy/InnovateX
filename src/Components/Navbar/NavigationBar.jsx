import React from 'react';
import './NavigationBar.css';
import logo from '../Assets/logo.png';
import GovEmblems from '../Assets/GovEmblems.png';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={GovEmblems} alt="Emblems" className="navbar-logo" />
                <img src={logo} alt="YatraBuddy Logo" className="navbar-logo" />
                YatraBuddy
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#">About</a>
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