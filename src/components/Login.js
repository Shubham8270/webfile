// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import loginImage from '../photos/login-image.jpg'; // Ensure this path matches your file location

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'admin123') {
      navigate('/admin/home');
    } else if ((email === 'user1@example.com' && password === 'user123') ||
               (email === 'user2@example.com' && password === 'user123')) {
      navigate('/user/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <div className="header-left">B.Planet</div>
        <div className="header-right" onClick={() => navigate('../admin/Contact')}>
            <span style={{padding: '10px', border: '1px solid #ccc',borderRadius: '10px',display: 'inline-block',backgroundColor:'darkgray'
}}>contact us</span>
          </div>
      </div>
      <div className="login-container">
        <div className="login-info">
          <h3>Login Credentials</h3>
          <p><strong>Admin:</strong></p>
          <p>Email: admin@example.com</p>
          <p>Password: admin123</p>
          <p><strong>User 1:</strong></p>
          <p>Email: user1@example.com</p>
          <p>Password: user123</p>
          <p><strong>User 2:</strong></p>
          <p>Email: user2@example.com</p>
          <p>Password: user123</p>
        </div>
        <div className="login-content">
          <div className="login-image">
            <img src={loginImage} alt="Description" />
          </div>
          <div className="login-form">
            <h2>Welcome back !!</h2>
            <form onSubmit={handleLogin}>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abc@gmail.com"
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="******************"
                  required
                />
              </div>
              <div className="login-links">
                <a href="/forgot-password">Forget Password?</a>
                <a href="/sign-up">Sign up for free</a>
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
