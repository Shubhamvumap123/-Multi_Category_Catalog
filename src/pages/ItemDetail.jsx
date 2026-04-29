import React, { useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import itemsData from '../data.json';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const ItemDetail = () => {
  const { id } = useParams();
  const [imageLoaded, setImageLoaded] = useState(false);

  const item = useMemo(() => {
    return itemsData.find(
      (item) => encodeURIComponent(item.itemname.toLowerCase().replace(/\s+/g, '-')) === id
    );
  }, [id]);

  if (!item) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <Link to="/" className="nav-back animate-fade-in">
        <ArrowLeft size={18} />
        Back to Catalog
      </Link>

      <div className="detail-layout animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="detail-image-section">
          {!imageLoaded && (
            <div className="image-loader" style={{ minHeight: '400px' }}>
              <div className="spinner"></div>
            </div>
          )}
          <img 
            src={item.image} 
            alt={item.itemname} 
            className="detail-image glass" 
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
          />
          <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
            <span className={`badge ${item.category.toLowerCase()}`} style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
              {item.category}
            </span>
          </div>
        </div>

        <div className="detail-info">
          <h1 className="detail-title">{item.itemname}</h1>
          
          <div className="glass" style={{ padding: '2rem', marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>Specifications</h3>
            <div className="detail-props-grid">
              {item.itemprops.map((prop, idx) => (
                <div key={idx} className="prop-card">
                  <div className="prop-label">
                    <CheckCircle2 size={16} color="var(--accent-color)" />
                    {prop.label}
                  </div>
                  <div className="prop-value">{prop.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
