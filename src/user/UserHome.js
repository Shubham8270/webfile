import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserHome.css';
import profileImage from '../photos/profile.jpg'; // Ensure this path matches your file location
import backgroundImage from '../photos/background2.jpg'; // Ensure this path matches your file location
import product1 from '../photos/product1.jpg'; // Placeholder images for products
import product2 from '../photos/product2.jpg';
import product3 from '../photos/product3.jpg';
import product4 from '../photos/product4.jpg';
import product5 from '../photos/product5.jpg';
import product6 from '../photos/product6.jpg';
import product7 from '../photos/product7.jpg';
import product8 from '../photos/product8.jpg';
import product9 from '../photos/product9.jpg';
import product10 from '../photos/product10.jpg';
import product11 from '../photos/product11.jpg';
import product12 from '../photos/product12.jpg';
import product13 from '../photos/product13.jpg';
import product14 from '../photos/product14.jpg';
import product15 from '../photos/product15.jpg';
import product16 from '../photos/product16.jpg';
import product17 from '../photos/product17.jpg';
import product18 from '../photos/product18.jpg';
import product19 from '../photos/product19.jpg';
import product20 from '../photos/product20.jpg';

const UserHome = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/user/product1description/${id}`);
  };

  return (
    <div className="user-home">
      <header className="user-header">
        <div className="header-left">
          <div className="header-box" onClick={() => navigate('../user/home')}>
            <span style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px', display: 'inline-block', backgroundColor: 'darkgray' }}>B planet</span>
          </div>
        </div>
        <div className="header-right">
          <div className="header-box" onClick={() => navigate('../user/Contact')}>
            <span style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px', display: 'inline-block', backgroundColor: 'darkgray' }}>contact us</span>
          </div>
          <div className="header-box" onClick={() => navigate('/')}>
            <span style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px', display: 'inline-block', backgroundColor: 'darkgray' }}>LogIn</span>
          </div>
          <div className="profile-box" onClick={() => navigate('../user/pro')}>
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
      </header>
      <div className="user-content">
        <div className="top-section">
          <img src={backgroundImage} alt="Background" className="background-image" />
        </div>
        <div className="bottom-section">
          <h5 style={{ fontSize: 'large', paddingLeft: '110px' }}>Featured Product</h5>
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
              <div className="product-item" onClick={() => handleProductClick(7)}>
                <img src={product7} alt="Product 7" />
                <span>Product 7</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(8)}>
                <img src={product8} alt="Product 8" />
                <span>Product 8</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(9)}>
                <img src={product9} alt="Product 9" />
                <span>Product 9</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(10)}>
                <img src={product10} alt="Product 10" />
                <span>Product 10</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(11)}>
                <img src={product11} alt="Product 11" />
                <span>Product 11</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(12)}>
                <img src={product12} alt="Product 12" />
                <span>Product 12</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(13)}>
                <img src={product13} alt="Product 13" />
                <span>Product 13</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(14)}>
                <img src={product14} alt="Product 14" />
                <span>Product 14</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(15)}>
                <img src={product15} alt="Product 15" />
                <span>Product 15</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(16)}>
                <img src={product16} alt="Product 16" />
                <span>Product 16</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(17)}>
                <img src={product17} alt="Product 17" />
                <span>Product 17</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(18)}>
                <img src={product18} alt="Product 18" />
                <span>Product 18</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(19)}>
                <img src={product19} alt="Product 19" />
                <span>Product 19</span>
              </div>
              <div className="product-item" onClick={() => handleProductClick(20)}>
                <img src={product20} alt="Product 20" />
                <span>Product 20</span>
              </div>
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

export default UserHome;
