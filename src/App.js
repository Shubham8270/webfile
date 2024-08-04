// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import UserHome from './user/UserHome';
import UserProfile from './user/UserPro';
import UserDescription from './user/UserDescription';
import UserContact from './user/UserContact';
import AdminHome from './admin/AdminHome';
import AdminProfile from './admin/Adminpro';
import AdminDescription from './admin/AdminDescription';
import AdminContact from './admin/AdminContact';
import ProductDescription from './admin/ProductDescription';
import Product1Description from './user/Product1Description';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/user/pro" element={<UserProfile />} />
        <Route path="/user/description" element={<UserDescription />} />
        <Route path="/user/contact" element={<UserContact />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/pro" element={<AdminProfile />} />
        <Route path="/admin/description" element={<AdminDescription />} />
        <Route path="/admin/contact" element={<AdminContact />} />
        <Route path="/admin/product/:id" element={<ProductDescription />} />
        <Route path="/user/product1description/:id" element={<Product1Description />} />
      </Routes>
    </Router>
  );
};

export default App;
