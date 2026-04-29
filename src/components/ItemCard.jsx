import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item, id }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link to={`/item/${id}`} className="item-card glass animate-fade-in">
      <div className="card-image-wrapper">
        {!imageLoaded && (
          <div className="image-loader">
            <div className="spinner"></div>
          </div>
        )}
        <img 
          src={item.image} 
          alt={item.itemname} 
          className="card-image" 
          loading="lazy" 
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
        />
        <div className="card-overlay"></div>
        <span className={`badge card-badge ${item.category.toLowerCase()}`}>
          {item.category}
        </span>
      </div>
      <div className="card-content">
        <h3 className="card-title">{item.itemname}</h3>
        <div className="card-preview-props">
          {item.itemprops.slice(0, 2).map((prop, index) => (
            <span key={index} className="preview-prop">
              {prop.label}: {prop.value}
            </span>
          ))}
          {item.itemprops.length > 2 && (
            <span className="preview-prop">+{item.itemprops.length - 2} more</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
