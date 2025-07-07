import React, { useContext } from 'react';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { StoreContext } from '../context/StoreContext';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProductCard({ product }) {
  const { favorites, toggleFavorite, addToCart } = useContext(StoreContext);
  const isFav = favorites.includes(String(product.id));
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart! 🛒`);
  };

  const handleToggleFav = (e) => {
    e.stopPropagation();
    toggleFavorite(product.id);
    toast.info(isFav ? 'Removed from favorites 💔' : 'Added to favorites 💖');
  };

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <img
        src={product.images?.[0]}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h4>{product.name}</h4>

        <div className="price-section">
          {product.onSale && product.salePrice ? (
            <>
              <span className="old-price">${product.price}</span>
              <span className="sale-price">${product.salePrice}</span>
            </>
          ) : (
            <span className="regular-price">${product.price}</span>
          )}
        </div>

        <div className="card-actions">
          <button onClick={handleAddToCart}>
            <FaShoppingCart /> Add to Cart
          </button>
          <button onClick={handleToggleFav} className="fav-btn">
            {isFav ? <FaHeart color="red" /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
