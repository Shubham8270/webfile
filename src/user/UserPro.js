// src/admin/AdminProfile.js
import React, { useState } from 'react';
import './UserPro.css';
import { useNavigate } from 'react-router-dom';
import profileImage from '../photos/profile.jpg';

const AdminProfile = () => {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Rahul kumar",
    email: "rahulkumar@gmail.com",
    password: "******",
    phone: "9598755687",
    address: "Patia,Bhubnashwar",
    state: "Odisha",
    zip: "95124",
    profilePicture: "../photos/profile.jpg"
  });

  const handleEditClick = () => {
    setEditing(!editing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    // Save profile data (you can implement saving logic here)
    setEditing(false);
  };

  return (
    <div className="admin-profile">
       <header className="admin-header">
        <div className="header-left"><div className="header-box" onClick={() => navigate('../user/home')}>
            <span style={{padding: '10px', border: '1px solid #ccc',borderRadius: '10px',display: 'inline-block',backgroundColor:'darkgray'
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
          <div className="" onClick={() => navigate('../user/pro')}>
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
      </header>
      <div style={{marginTop:'130px'}} className="profile-box">
        <div className="profile-banner">
          <img src={profileImage} alt="Profile" className="profile-picture" />
        </div>
        <div className="profile-details">
          <button onClick={handleEditClick} className="edit-button">{editing ? "Save" : "Edit"}</button>
          <div className="form-field">
            <label>Name:</label>
            <input type="text" name="name" value={profileData.name} onChange={handleChange} disabled={!editing} />
          </div>
          <div className="form-field">
            <label>Email:</label>
            <input type="email" name="email" value={profileData.email} onChange={handleChange} disabled={!editing} />
          </div>
          <div className="form-field">
            <label>Password:</label>
            <input type="password" name="password" value={profileData.password} onChange={handleChange} disabled={!editing} />
          </div>
          <div className="form-field">
            <label>Phone:</label>
            <input type="text" name="phone" value={profileData.phone} onChange={handleChange} disabled={!editing} />
          </div>
          <div className="form-field">
            <label>Address:</label>
            <input type="text" name="address" value={profileData.address} onChange={handleChange} disabled={!editing} />
          </div>
          <div className="form-field">
            <label>State:</label>
            <input type="text" name="state" value={profileData.state} onChange={handleChange} disabled={!editing} />
          </div>
          <div className="form-field">
            <label>ZIP Code:</label>
            <input type="text" name="zip" value={profileData.zip} onChange={handleChange} disabled={!editing} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
