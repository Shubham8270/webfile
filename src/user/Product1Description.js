import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Product1Description.css'; // Reuse the same CSS
import product1 from '../photos/product1.jpg';
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
import profileImage from '../photos/profile.jpg';

const products = [
  { id: 1, name: 'Product 1', subtitle: 'Subtitle for Product 1', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 1', image: product1 },
  { id: 2, name: 'Product 2', subtitle: 'Subtitle for Product 2', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 2', image: product2 },
  { id: 3, name: 'Product 3', subtitle: 'Subtitle for Product 3', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 3', image: product3 },
  { id: 4, name: 'Product 4', subtitle: 'Subtitle for Product 4', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 4', image: product4 },
  { id: 5, name: 'Product 5', subtitle: 'Subtitle for Product 5', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 5', image: product5 },
  { id: 6, name: 'Product 6', subtitle: 'Subtitle for Product 6', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 6', image: product6 },
  { id: 7, name: 'Product 7', subtitle: 'Subtitle for Product 7', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 7', image: product7 },
  { id: 8, name: 'Product 8', subtitle: 'Subtitle for Product 8', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 8', image: product8 },
  { id: 9, name: 'Product 9', subtitle: 'Subtitle for Product 9', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 9', image: product9 },
  { id: 10, name: 'Product 10', subtitle: 'Subtitle for Product 10', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 10', image: product10 },
  { id: 11, name: 'Product 11', subtitle: 'Subtitle for Product 11', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 11', image: product11 },
  { id: 12, name: 'Product 12', subtitle: 'Subtitle for Product 12', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 12', image: product12 },
  { id: 13, name: 'Product 13', subtitle: 'Subtitle for Product 13', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 13', image: product13 },
  { id: 14, name: 'Product 14', subtitle: 'Subtitle for Product 14', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 14', image: product14 },
  { id: 15, name: 'Product 15', subtitle: 'Subtitle for Product 15', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 15', image: product15 },
  { id: 16, name: 'Product 16', subtitle: 'Subtitle for Product 16', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 16', image: product16 },
  { id: 17, name: 'Product 17', subtitle: 'Subtitle for Product 17', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 17', image: product17 },
  { id: 18, name: 'Product 18', subtitle: 'Subtitle for Product 18', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 18', image: product18 },
  { id: 19, name: 'Product 19', subtitle: 'Subtitle for Product 19', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 19', image: product19 },
  { id: 20, name: 'Product 20', subtitle: 'Subtitle for Product 20', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 20', image: product20 },
];

const Product1Description = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
      setProduct(product);
    }
  }, [id]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-description">
      <header className="admin-header">
        <div className="header-left">B.Planet</div>
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
      <div className="content">
        <div className="left-panel">
          <div className="product-section">
            <div className="section-header">
              <h2>Product {product.id}</h2>
            </div>
            <p>{product.name}</p>
          </div>

          <div className="product-section">
            <div className="section-header">
              <h2>Subtitle</h2>
            </div>
            <p>{product.subtitle}</p>
          </div>

          <div className="product-section">
            <div className="section-header">
              <h2>Guide</h2>
            </div>
            <div className="guide-list">
              {product.guide.map((guideItem, index) => (
                <div key={index} className="guide-item">{guideItem}</div>
              ))}
            </div>
          </div>

          <div className="product-section">
            <div className="section-header">
              <h2>Description</h2>
            </div>
            <p>{product.description}</p>
          </div>
        </div>

        <div className="right-panel">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
      </div>
    </div>
  );
};

export default Product1Description;
