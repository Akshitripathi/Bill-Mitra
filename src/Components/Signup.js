
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BannerBackground from "../Assets/home-banner-background.png";
import AboutBackground from "../Assets/about-background.png";
import SignUp from "../Assets/sign_up.png";
import './Signup.css'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    console.log('Signing up with:', { email, password });
    
    navigate('/login');
  };

  return (
    <div className="signup">
      <div className='home-bannerImage-container'>
        <img src={BannerBackground} alt="Banner Background" />
      </div>
      <div className="signup-content">
        <div className="signup-image-container">
          <img src={SignUp} alt="Sign Up" className="signup-image" />
        </div>
        <div className="signup-form-container">
          <h2>Signup</h2>
          <p className="signup-intro">
            Welcome! Please create an account to get started.
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Signup</button>
          </form>
          <p className="signup-footer">
            Already have an account? <a href="/login">Login here</a>.
          </p>
        </div>
      </div>
      <div className='about-background-image-container'>
        <img src={AboutBackground} alt="About Background" />
      </div>
    </div>
  );
};

export default Signup;
