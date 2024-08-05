import React from 'react';
import "./Contact.css";
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import AboutBackground from "../Assets/about-background.png";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='home-bannerImage-container'>
        <img src={BannerBackground} alt="Banner Background" />
      </div>
      <Navbar />
      <div className='about-background-image-container'>
        <img src={AboutBackground} alt="About Background" />
      </div>
      <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>Have a Question in Mind?</h1>
        <h2 className='secondary-heading'>Let Us Help You</h2>
        <div className='contact-info'>
          <p>If you have any questions, feedback, or need assistance, please reach out to us using the contact form below or through other means. We're here to help!</p>
        </div>
        <div className='contact-form-container'>
          <form>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' placeholder='Your Name' required />
            
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' placeholder='youremail@example.com' required />
            
            <label htmlFor='message'>Message:</label>
            <textarea id='message' placeholder='Your message here...' rows='4' required></textarea>
            
            <button type='submit' className='primary-button'>Submit</button>
          </form>
        </div>
        <div className='contact-details'>
          <h3>Other Ways to Reach Us:</h3>
          <p><strong>Email:</strong> <a href="mailto:support@example.com">support@example.com</a></p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Main Street, Suite 456, City, State, ZIP Code, Country</p>
          <div className='social-media'>
            <h3>Follow Us:</h3>
            <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
