import React, { useState } from 'react';
import './Profile.css'; 

import BannerBackground from "../Assets/home-banner-background.png";
import AboutBackground from "../Assets/about-background.png";

function Profile() {
  const [profile, setProfile] = useState({
    name: 'Akshi Tripathi',
    email: 'mani.akshi1804@gmail.com',
    bio: 'Hello Everyone ,I welcome you all to my project Bill Mitra.  An extraordinary website helping you to manage your business data.',
    profilePicture: null,
  });

  const [editMode, setEditMode] = useState(false);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfile({
            ...profile,
            profilePicture: reader.result,
          });
        };
        reader.readAsDataURL(file);
      }

      setMessage('Profile updated successfully!');
      setEditMode(false);
    } catch (error) {
      setMessage('Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setMessage('');
  };

  return (
    <div className='profile'> 


<div className='home-bannerImage-container'>
        <img src={BannerBackground} alt=""/>
      </div>

      <div className='about-background-image-container'>
        <img src={AboutBackground} alt="" />
      </div>
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-details-container">
          {editMode ? (
            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio:</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  placeholder="Tell us about yourself"
                  rows="4"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="file">Profile Picture:</label>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input"
                />
              </div>
              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
              <button type="button" className="cancel-button" onClick={handleCancelClick}>
                Cancel
              </button>
              {message && <p className="feedback-message">{message}</p>}
            </form>
          ) : (
            <div className="profile-details">
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Bio:</strong> {profile.bio}</p>
              <button className="edit-button" onClick={handleEditClick}>
                Edit Profile
              </button>
            </div>
          )}
        </div>
        <div className="profile-picture-container">
          <img
            src={profile.profilePicture || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="profile-picture-img"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;

