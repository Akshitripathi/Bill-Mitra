import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BannerBackground from "./Assets/home-banner-background.png";
import AboutBackground from "./Assets/about-background.png";
import LoginIcon from "./Assets/login.png";
import './Login.css'; // Import the CSS file

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Logging in with:', { email, password });

    // After successful login, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login">
      <div className='home-bannerImage-container'>
        <img src={BannerBackground} alt="Banner Background" />
      </div>
      <div className="login-content">
        <img src={LoginIcon} alt="Login Icon" className="login-icon" />
        <div className="login-form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <div className='about-background-image-container'>
        <img src={AboutBackground} alt="About Background" />
      </div>
    </div>
  );
};

export default Login;
