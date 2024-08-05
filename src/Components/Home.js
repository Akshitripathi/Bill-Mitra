import React from 'react'
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import AboutBackground from "../Assets/about-background.png";
import BannerImage from "../Assets/landing_background.png";

import {FiArrowRight} from "react-icons/fi";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home">
    <div className="home-container">
      <Navbar/>
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt=""/>
        </div>
        <div className='home-text-section'>
            <h1 className='primary-heading'>
                We help you keep track of your Business
            </h1>
            <p className='primary-text'>
                "By automating invoicing and providing real-time insights, smart billing systems enhance customer satisfaction through transparency and timely communication."
            </p>
            <Link to="/login" className='link-styles'> 
              <button className='secondary-button'>Login Now <FiArrowRight />
              </button>
            </Link>
            <div className='about-background-image-container'>
              <img src={AboutBackground} alt="" />
            </div>
        </div>
        <div className='home-image-container'>
            <img src={BannerImage} alt=""/>
        </div>
      </div>
      
      <p className='welcome-text'>
              <h1>Welcome to our Smart Billing Management System!</h1><br></br> 
            
        <p>We're thrilled to have you on board. Our system is designed to simplify your billing processes, offering you efficiency and clarity in managing your business finances. <br></br>Explore our features and start optimizing your billing today!</p>
      </p>
    </div>
    </div>
  )
}

export default Home
