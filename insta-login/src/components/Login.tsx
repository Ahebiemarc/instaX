import React from "react";

import AppStoreLogo from "../assets/app-store-logo.png";
import PlayStoreLogo from "../assets/googl-play-logo.png";
import InstaLogo from "../assets/Instagram_logo.svg.png";
import FaceBookLogo from "../assets/facebook-logo.png";
import "../styles/Login.css";

import { LoginForm } from "../Types";

const Login = () => {
    const [formData, setFormData] = React.useState<LoginForm>({ username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nom d'utilisateur:", formData.username);
    console.log("Mot de passe:", formData.password);
  };
    
    return (
        <div className="login-container">
            <form className="box-1" onSubmit={handleLogin}>
                <div className="box-1-logo">
                    <img src={InstaLogo} alt="Instagram Logo" className="insta-logo" />
                </div>
                <div className="input-box">
                    <input type="text" 
                    placeholder="Phone number, username or email address" 
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    />
                </div>
                <div className="input-box">
                    <input type="password" 
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                     />
                </div>
                <div className="login-btn-box">
                    <button className="login-btn" type="submit">Check your information</button>
                </div>
                <div className="lines-box">
                    <div className="line-1"></div>
                    <div className="or-box">OR</div>
                    <div className="line-1 line-2"></div>
                </div>
                <div className="fb-box">
                    <span>
                        <img src={FaceBookLogo} alt="Facebook Logo" className="fb-logo" />
                    </span>
                    <p className="fb-link">Login with Facebook</p>
                </div>
                <div className="forgotten-pwd-link">Forgotten your password?</div>
            </form>
            <div className="box-2">
                <p>Don't have an account? <span className="sign-up-span">Sign up</span> </p>
            </div>
            <div className="get-app-box">
                <p>Get the app.</p>
            </div>
            <div className="app-store-google-play-box">
                <img src={PlayStoreLogo} alt="PlayStore Logo" className="playStore-logo" />
                <img src={AppStoreLogo} alt="AppStore Logo" className="AppStore-logo" />
            </div>
        </div>
    );
}

export default Login;