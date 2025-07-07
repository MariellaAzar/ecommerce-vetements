import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const validateCardNumber = (num) => {
    // Simple validation: 16 chiffres et que des chiffres
    return /^\d{16}$/.test(num);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.address || !validateCardNumber(form.cardNumber) || !form.expiry || !form.cvv) {
      setError('Please fill all fields correctly.');
      return;
    }
    setError('');

    // Simule la validation paiement
    setTimeout(() => {
      navigate('/success');  // <-- ici on change la route
    }, 1000);
  };

  return (
    <div style={{ padding: 30, maxWidth: 400, margin: 'auto' }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br/>
        <input name="name" value={form.name} onChange={handleChange} required /><br/><br/>
        
        <label>Address</label><br/>
        <input name="address" value={form.address} onChange={handleChange} required /><br/><br/>

        <label>Card Number</label><br/>
        <input
          name="cardNumber"
          value={form.cardNumber}
          onChange={handleChange}
          placeholder="1234567812345678"
          maxLength={16}
          required
        /><br/><br/>

        <label>Expiry (MM/YY)</label><br/>
        <input name="expiry" value={form.expiry} onChange={handleChange} placeholder="12/25" required /><br/><br/>

        <label>CVV</label><br/>
        <input name="cvv" value={form.cvv} onChange={handleChange} maxLength={3} required /><br/><br/>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#EF4F4F', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default Checkout;
