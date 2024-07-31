// src/admin/AdminHome.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminHome.css';
import profileImage from '../photos/profile.jpg'; // Ensure this path matches your file location
import backgroundImage from '../photos/background.jpg'; // Ensure this path matches your file location
import product1 from '../photos/product1.jpg'; // Placeholder images for products
import product2 from '../photos/product2.jpg';
import product3 from '../photos/product3.jpg';
import product4 from '../photos/product4.jpg';
import product5 from '../photos/product5.jpg';
import product6 from '../photos/product6.jpg';
import product0 from '../photos/product0.jpg'; // Placeholder image for products 7 to 20

const AdminHome = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/admin/product/${id}`);
  };

  return (
    <div className="admin-home">
      <header className="admin-header">
      <div className="header-left"><div className="header-box" onClick={() => navigate('../admin/home')}>
            <span style={{padding: '10px', border: '1px solid #ccc',borderRadius: '10px',display: 'inline-block',backgroundColor:'darkgray'
}}>B planet</span>
          </div></div>
        <div className="header-right">
          <div className="header-box" onClick={() => navigate('../admin/Contact')}>
            <span style={{padding: '10px', border: '1px solid #ccc',borderRadius: '10px',display: 'inline-block',backgroundColor:'darkgray'
}}>contact us</span>
          </div>
          <div className="header-box" onClick={() => navigate('/')}>
            <span style={{padding: '10px', border: '1px solid #ccc',borderRadius: '10px',display: 'inline-block',backgroundColor:'darkgray'
}}>LogIn</span>
          </div>
          <div className="profile-box" onClick={() => navigate('../admin/pro')}>
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
      </header>
      <div className="admin-content">
        <div className="top-section">
          <img src={backgroundImage} alt="Background" className="background-image" />
        </div>
        <div className="bottom-section">
          <h5 style={{fontSize:'large',paddingLeft:'110px'}}>Featured Product</h5>
          <div className="products">
            <div className="product-grid">
              <div className="product-item" onClick={() => handleProductClick(1)}>
                <img src={product1} alt="Product 1" />
                <span>Product 1</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(2)}>
                <img src={product2} alt="Product 2" />
                <span>Product 2</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(3)}>
                <img src={product3} alt="Product 3" />
                <span>Product 3</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(4)}>
                <img src={product4} alt="Product 4" />
                <span>Product 4</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(5)}>
                <img src={product5} alt="Product 5" />
                <span>Product 5</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(6)}>
                <img src={product6} alt="Product 6" />
                <span>Product 6</span>
              </div>
              {Array.from({ length: 14 }, (_, i) => (
                <div className="product-item" key={i + 7} onClick={() => handleProductClick(i + 7)}>
                  <img src={product0} alt={`Product ${i + 7}`} />
                  <span>{`Product ${i + 7}`}</span>
                </div>
              ))}
            </div>
            <div className="pagination">
              <button>&laquo; Prev</button>
              <button>Next &raquo;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
