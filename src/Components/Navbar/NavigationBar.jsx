import React from 'react';
import './NavigationBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">YatraBuddy</div>
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