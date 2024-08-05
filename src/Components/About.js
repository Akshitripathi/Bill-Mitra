// src/Components/About.js
import React from 'react';

import './About.css'

import Navbar from './Navbar';
import AboutBackground from "./Assets/about-background.png";
import BannerBackground from "./Assets/home-banner-background.png";
import AboutBackgroundImage from "./Assets/about_pic.png";

const About = () => {
  return (
    <div className='about'>
    <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt=""/>
    </div>

    
    <Navbar/>

    <div className='about-section-container'>
      
    
        <div className='about-section-image-container'>
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className='about-background-image-container'>
          <img src={AboutBackground} alt="" />
    </div>
        <div className='about-section-text-container'>
          <p className='primary-subheading'>About</p>
          <h1 className='primary-heading'>
          Our mission is to revolutionize the way businesses manage their finances. 
          </h1>
          <p className='primary-text'>
          What We Do<br></br>

Our Smart Billing Management System is designed to transform the way you handle invoicing, payments, and financial reporting. Key features of our system include:
<br></br>
    Automated Invoicing: Generate and send invoices with just a few clicks, reducing manual errors and saving valuable time.<br></br>
    Seamless Payment Processing: Integrate with multiple payment gateways to offer your customers convenient payment options and streamline reconciliation.<br></br>
    Advanced Analytics: Gain insights into your financial data with real-time reporting and customizable dashboards.<br></br>
    Customizable Solutions: Tailor our system to fit your specific business needs with flexible configurations and scalable features.
          </p>
          

        </div>
    </div>
    </div>
  );
}

export default About;
