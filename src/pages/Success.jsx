import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Success.css';

function Success() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="success-container">
      {!submitted ? (
        <>
          <h2>🛍️ Thank you for your purchase!</h2>
          <p>Your order is being processed with care 💖</p>
          <hr style={{ margin: '30px 0' }} />
          <h3>💬 Help us get better!</h3>

          <form onSubmit={handleSubmit}>
            <label>🌟 How would you rate your experience?</label>
            <div className="star-rating">
              {[...Array(10)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <span
                    key={starValue}
                    className={`star ${starValue <= (hovered || rating) ? 'filled' : ''}`}
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHovered(starValue)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    ★
                  </span>
                );
              })}
            </div>

            <label>💌 Any thoughts or suggestions?</label>
            <textarea
              rows="4"
              placeholder="Share something sweet or spicy..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button type="submit">Send Feedback</button>
          </form>
        </>
      ) : (
        <>
          <h2>💖 Thank you so much for your feedback!</h2>
          <p>You help us shine brighter ✨</p>
          <button onClick={() => navigate('/shop')} className="back-btn">
            Back to Shop
          </button>
        </>
      )}
    </div>
  );
}

export default Success;
