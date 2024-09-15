import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <form className="login-form">
            <h1>Passenger Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
                <FaUser className="icon" />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required />
                <FaLock className="icon" />
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" /> Remember me</label>
                <a href="#">Forgot password?</a>
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
                <p>Don't have an account? <a href="#">Register now</a></p>
            </div>
            <div className="admin-login">
                <a href="#">I'm an Admin</a>
            </div>
        </form>
    );
};

export default LoginForm;