import React from 'react';
import LoginForm from './LoginForm';
import MorphingBackground from './MorphingBackground';
import './LoginPage.css';
import Navbar from '../Navbar/NavigationBar';
import PreLoader from './PreLoader';

const LoginPage = () => {
    return (

        <>
        <PreLoader />

        <div className="login-page">
            <Navbar />
            <MorphingBackground />
            <LoginForm />
        </div>
        </>    
    );
};

export default LoginPage;