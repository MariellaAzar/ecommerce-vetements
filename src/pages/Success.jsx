import React, { useState } from 'react';

function Success() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu pourrais envoyer les données à une API ou localStorage
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        backgroundColor: "#fff6f6",
        padding: "40px",
        margin: "80px auto",
        maxWidth: "500px",
        borderRadius: "16px",
        textAlign: "center",
        fontFamily: "Montserrat, sans-serif"
      }}>
        <h2>Thank you for your feedback!</h2>
        <p>We appreciate you helping us improve 💖</p>
      </div>
    );
  }

  return (
    <div style={{
      padding: 30,
      maxWidth: 400,
      margin: 'auto',
      fontFamily: 'Montserrat, sans-serif'
    }}>
      <h2>Thank you for your purchase!</h2>
      <p>Please rate your experience:</p>
      <form onSubmit={handleSubmit}>
        <label>Rating (1 to 5):</label><br/>
        <select value={rating} onChange={e => setRating(Number(e.target.value))} required>
          <option value={0}>Select rating</option>
          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
        </select><br/><br/>

        <label>Comments:</label><br/>
        <textarea
          rows={4}
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Your feedback"
        /><br/><br/>

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#EF4F4F', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Success;
