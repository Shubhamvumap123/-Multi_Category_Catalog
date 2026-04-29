import React, { useMemo } from 'react';
import itemsData from '../data.json';
import ItemCard from '../components/ItemCard';
import { Car, Smartphone, Monitor, Bike } from 'lucide-react';

const categoryIcons = {
  Cars: <Car size={28} style={{ color: 'var(--color-cars)' }} />,
  Phones: <Smartphone size={28} style={{ color: 'var(--color-phones)' }} />,
  Computers: <Monitor size={28} style={{ color: 'var(--color-computers)' }} />,
  Bikes: <Bike size={28} style={{ color: 'var(--color-bikes)' }} />
};

const Home = () => {
  // Group items by category
  const categories = useMemo(() => {
    const grouped = {};
    itemsData.forEach((item, index) => {
      // Create a unique id for routing based on itemname
      const id = encodeURIComponent(item.itemname.toLowerCase().replace(/\s+/g, '-'));
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push({ ...item, id });
    });
    return grouped;
  }, []);

  return (
    <div className="container">
      <header className="app-header animate-fade-in">
        <h1 className="app-title">Luxe Catalog</h1>
        <p className="app-subtitle">Discover our premium collection of exceptional products</p>
      </header>

      {Object.entries(categories).map(([category, items]) => (
        <section key={category} className="category-section animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="category-header">
            {categoryIcons[category]}
            <h2 className="category-title">{category}</h2>
            <span className={`badge ${category.toLowerCase()}`}>{items.length} items</span>
          </div>
          <div className="item-grid">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} id={item.id} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
