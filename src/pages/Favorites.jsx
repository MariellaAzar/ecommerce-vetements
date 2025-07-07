import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';

function Favorites() {
  const { favorites } = useContext(StoreContext);

  const favoriteProducts = productsData.filter(p => favorites.includes(p.id));

  if (favoriteProducts.length === 0) {
    return <p style={{ padding: 30 }}>You have no favorites yet.</p>;
  }

  return (
    <div style={{ padding: 30 }}>
      <h2>Your Favorites</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {favoriteProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
