// src/admin/AdminContact.js
import React from 'react';
import './UserContact.css';
import profileImage from '../photos/profile.jpg';
import { useNavigate } from 'react-router-dom';

const AdminContact = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-contact">
      <header className="admin-header">
      <div className="header-left"><div className="header-box" onClick={() => navigate('../user/home')}>
            <span style={{padding: '10px', border: '1px solid #ccc',borderRadius: '10px',display: 'inline-block',backgroundColor:'darkgray',textAlign:'center'
}}>B planet</span>
          </div></div>
        <div className="header-right">
          <div className="header-box" onClick={() => navigate('../user/Contact')}>
            <span style={{padding: '10px', border: '1px solid #ccc',borderRadius: '10px',display: 'inline-block',backgroundColor:'darkgray'
}}>contact us</span>
          </div>
          <div className="header-box" onClick={() => navigate('/')}>
            <span style={{padding: '10px', border: '1px solid #ccc',borderRadius: '10px',display: 'inline-block',backgroundColor:'darkgray'
}}>LogIn</span>
          </div>
          <div className="profile-box" onClick={() => navigate('../user/pro')}>
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
      </header>
      <div className="contact-content">
        <h2>Contact Us</h2>
        <div className="contact-box">
          <div className="left-box">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter and stay updated on the latest developments and special offers!</p>
            <p>Address: 1234 Street, City, Country</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@bplanet.com</p>
          </div>
          <div className="right-box">
            <form className="contact-form">
              <div className="form-field">
                <input type="text" placeholder="Name" />
              </div>
              <div className="form-field">
                <input type="email" placeholder="Email" />
              </div>
              <div className="form-field">
                <textarea placeholder="How can we help?"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContact;
