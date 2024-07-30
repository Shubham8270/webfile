// src/admin/ProductDescription.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDescription.css';
import pencilIcon from '../photos/pencil.png'; // Ensure this path matches your file location
import product1 from '../photos/product1.jpg';
import product2 from '../photos/product2.jpg';
import product3 from '../photos/product3.jpg';
import product4 from '../photos/product4.jpg';
import product5 from '../photos/product5.jpg';
import product6 from '../photos/product6.jpg';
import profileImage from '../photos/profile.jpg'; 
import defaultProduct from '../photos/product0.jpg'; // Default product image

const products = [
  { id: 1, name: 'Product 1', subtitle: 'Subtitle for Product 1', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 1', image: product1 },
  { id: 2, name: 'Product 2', subtitle: 'Subtitle for Product 2', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 2', image: product2 },
  { id: 3, name: 'Product 3', subtitle: 'Subtitle for Product 3', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 3', image: product3 },
  { id: 4, name: 'Product 4', subtitle: 'Subtitle for Product 4', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 4', image: product4 },
  { id: 5, name: 'Product 5', subtitle: 'Subtitle for Product 5', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 5', image: product5 },
  { id: 6, name: 'Product 6', subtitle: 'Subtitle for Product 6', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 6', image: product6 },
  { id: 7, name: 'Product 7', subtitle: 'Subtitle for Product 7', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 7', image: defaultProduct },
  { id: 8, name: 'Product 8', subtitle: 'Subtitle for Product 8', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 8', image: defaultProduct },
  { id: 9, name: 'Product 9', subtitle: 'Subtitle for Product 9', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 9', image: defaultProduct },
  { id: 10, name: 'Product 10', subtitle: 'Subtitle for Product 10', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 10', image: defaultProduct },
  { id: 11, name: 'Product 11', subtitle: 'Subtitle for Product 11', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 11', image: defaultProduct },
  { id: 12, name: 'Product 12', subtitle: 'Subtitle for Product 12', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 12', image: defaultProduct },
  { id: 13, name: 'Product 13', subtitle: 'Subtitle for Product 13', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 13', image: defaultProduct },
  { id: 14, name: 'Product 14', subtitle: 'Subtitle for Product 14', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 14', image: defaultProduct },
  { id: 15, name: 'Product 15', subtitle: 'Subtitle for Product 15', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 15', image: defaultProduct },
  { id: 16, name: 'Product 16', subtitle: 'Subtitle for Product 16', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 16', image: defaultProduct },
  { id: 17, name: 'Product 17', subtitle: 'Subtitle for Product 17', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 17', image: defaultProduct },
  { id: 18, name: 'Product 18', subtitle: 'Subtitle for Product 18', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 18', image: defaultProduct },
  { id: 19, name: 'Product 19', subtitle: 'Subtitle for Product 19', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 19', image: defaultProduct },
  { id: 20, name: 'Product 20', subtitle: 'Subtitle for Product 20', guide: ['Guide 1', 'Guide 2', 'Guide 3'], description: 'Description for Product 20', image: defaultProduct },
];

const ProductDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isEditing, setIsEditing] = useState({
    name: false,
    subtitle: false,
    guide: false,
    description: false,
  });
  const [editedFields, setEditedFields] = useState({
    name: '',
    subtitle: '',
    guide: [],
    description: '',
  });

  useEffect(() => {
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
      setProduct(product);
      setEditedFields({
        name: product.name,
        subtitle: product.subtitle,
        guide: product.guide || [],
        description: product.description,
      });
    }
  }, [id]);

  const handleEditClick = (field) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const handleSaveClick = (field) => {
    const updatedProducts = products.map(p =>
      p.id === product.id ? { ...p, [field]: field === 'guide' ? [...editedFields.guide] : editedFields[field] } : p
    );
    setProduct(updatedProducts.find(p => p.id === product.id));
    setIsEditing({ ...isEditing, [field]: false });
  };

  const handleAddGuide = () => {
    setEditedFields({
      ...editedFields,
      guide: [...editedFields.guide, `Guide ${editedFields.guide.length + 1}`]
    });
  };

  const handleDeleteGuide = (index) => {
    const updatedGuide = editedFields.guide.filter((_, idx) => idx !== index);
    setEditedFields({ ...editedFields, guide: updatedGuide });
  };

  const handleGuideChange = (index, value) => {
    const updatedGuide = editedFields.guide.map((g, idx) => idx === index ? value : g);
    setEditedFields({ ...editedFields, guide: updatedGuide });
  };

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
      <div className="content">
        <div className="left-panel">
          <div className="product-section">
            <div className="section-header">
              <h2>Product {product.id}</h2>
              <img src={pencilIcon} alt="Edit" className="edit-icon" onClick={() => handleEditClick('name')} />
            </div>
            {isEditing.name ? (
              <div className="section-edit">
                <input type="text" value={editedFields.name} onChange={(e) => setEditedFields({ ...editedFields, name: e.target.value })} />
                <button onClick={() => handleSaveClick('name')}>Save</button>
              </div>
            ) : (
              <p>{product.name}</p>
            )}
          </div>

          <div className="product-section">
            <div className="section-header">
              <h2>Subtitle</h2>
              <img src={pencilIcon} alt="Edit" className="edit-icon" onClick={() => handleEditClick('subtitle')} />
            </div>
            {isEditing.subtitle ? (
              <div className="section-edit">
                <input type="text" value={editedFields.subtitle} onChange={(e) => setEditedFields({ ...editedFields, subtitle: e.target.value })} />
                <button onClick={() => handleSaveClick('subtitle')}>Save</button>
              </div>
            ) : (
              <p>{product.subtitle}</p>
            )}
          </div>

          <div className="product-section">
            <div className="section-header">
              <h2>Guide</h2>
              <img src={pencilIcon} alt="Edit" className="edit-icon" onClick={() => handleEditClick('guide')} />
            </div>
            {isEditing.guide ? (
              <div className="section-edit">
                {editedFields.guide.map((guideItem, index) => (
                  <div key={index} className="guide-edit-item">
                    <input type="text" value={guideItem} onChange={(e) => handleGuideChange(index, e.target.value)} />
                    <button onClick={() => handleDeleteGuide(index)}>Delete</button>
                  </div>
                ))}
                <button onClick={handleAddGuide}>Add Guide</button>
                <button onClick={() => handleSaveClick('guide')}>Save</button>
              </div>
            ) : (
              <div className="guide-list">
                {product.guide.map((guideItem, index) => (
                  <div key={index} className="guide-item">{guideItem}</div>
                ))}
              </div>
            )}
          </div>

          <div className="product-section">
            <div className="section-header">
              <h2>Description</h2>
              <img src={pencilIcon} alt="Edit" className="edit-icon" onClick={() => handleEditClick('description')} />
            </div>
            {isEditing.description ? (
              <div className="section-edit">
                <textarea value={editedFields.description} onChange={(e) => setEditedFields({ ...editedFields, description: e.target.value })}></textarea>
                <button onClick={() => handleSaveClick('description')}>Save</button>
              </div>
            ) : (
              <p>{product.description}</p>
            )}
          </div>
        </div>

        <div className="right-panel">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
