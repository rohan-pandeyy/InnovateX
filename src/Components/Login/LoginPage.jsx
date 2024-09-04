import React from 'react';
import LoginForm from './LoginForm';
import MorphingBackground from './MorphingBackground';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className="login-page">
            <MorphingBackground />
            <LoginForm />
        </div>
    );
};

export default LoginPage;