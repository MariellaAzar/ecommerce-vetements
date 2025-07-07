import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import { FaChevronLeft, FaChevronRight, FaHeart, FaRegHeart } from 'react-icons/fa';
import './ProductDetail.css';
import { StoreContext } from '../context/StoreContext';
import { toast } from 'react-toastify';

function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id);
  const { favorites, toggleFavorite, addToCart } = useContext(StoreContext);
  const [currentImg, setCurrentImg] = useState(0);
  const isFav = favorites.includes(product.id);

  if (!product) return <p>Product not found.</p>;

  const handleNext = () => {
    setCurrentImg((prev) => (prev + 1) % product.images.length);
  };

  const handlePrev = () => {
    setCurrentImg((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`🛍️ ${product.name} added to cart!`);
  };

  const handleToggleFav = () => {
    toggleFavorite(product.id);
    toast.info(isFav ? 'Removed from favorites 💔' : 'Added to favorites 💖');
  };

  return (
    <div className="product-detail">
      <div className="image-section">
        <img src={product.images[currentImg]} alt="Product" />
        {product.images.length > 1 && (
          <>
            <button className="nav-btn left" onClick={handlePrev}><FaChevronLeft /></button>
            <button className="nav-btn right" onClick={handleNext}><FaChevronRight /></button>
          </>
        )}
      </div>

      <div className="info-section">
        <h2>{product.name}</h2>

        {product.onSale && product.salePrice ? (
          <p className="price">
            <span className="old-price">${product.price}</span>
            <span className="sale-price">${product.salePrice}</span>
          </p>
        ) : (
          <p className="price">${product.price}</p>
        )}

        <p className="description">{product.description}</p>

        {product.subcategory && <p className="subcategory">Subcategory: {product.subcategory}</p>}

        {product.sizes?.length > 0 && (
          <div className="sizes">
            <label>Sizes:</label>
            <select>
              {product.sizes.map((size, i) => (
                <option key={i}>{size}</option>
              ))}
            </select>
          </div>
        )}

        <div className="actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleToggleFav}>
            {isFav ? <FaHeart color="red" /> : <FaRegHeart />} Fav
          </button>
        </div>

        <div className="reviews">
          <h4>See what others said ✨</h4>
          {product.reviews?.length > 0 ? (
            product.reviews.map((review, index) => (
              <div key={index} className="review">
                <strong>{review.author}</strong> ⭐ {review.rating}/5
                <p>{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
