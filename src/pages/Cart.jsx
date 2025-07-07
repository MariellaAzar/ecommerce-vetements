import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(StoreContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [form, setForm] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const totalPrice = cart.reduce((acc, p) => {
    const price = p.onSale && p.salePrice ? p.salePrice : p.price;
    return acc + price * p.quantity;
  }, 0);

  if (cart.length === 0 && !paymentDone) {
    return <p className="empty-cart-msg">Your cart is empty.</p>;
  }

  if (paymentDone) {
    return (
      <div className="payment-success">
        <h2>Thank you for your purchase! 🎉</h2>
        <p>Your order has been received and is being processed.</p>
        <button onClick={() => window.location.reload()}>Back to Shop</button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    // Ici tu peux ajouter validation formulaire + appel API paiement si réel
    alert(`Paiement simulé validé. Merci ${form.name} !`);
    setPaymentDone(true);
    clearCart();
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {!isCheckingOut ? (
        <>
          <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
          <div className="cart-items">
            {cart.map(product => (
              <div key={product.id} className="cart-item">
                <img src={product.images?.[0]} alt={product.name} />
                <div className="cart-item-info">
                  <h4>{product.name}</h4>
                  <p>Quantity: {product.quantity}</p>
                  <p>Price each: ${product.onSale && product.salePrice ? product.salePrice : product.price}</p>
                  <p>Added at: {new Date(product.addedAt).toLocaleString()}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(product.id)}>Remove</button>
              </div>
            ))}
          </div>
          <h3 className="total-price">Total: ${totalPrice.toFixed(2)}</h3>
          <button className="checkout-btn" onClick={() => setIsCheckingOut(true)}>Proceed to Payment</button>
        </>
      ) : (
        <form className="payment-form" onSubmit={handleCheckout}>
          <h3>Payment Information</h3>

          <label>Name on Card</label>
          <input type="text" name="name" value={form.name} onChange={handleInputChange} required />

          <label>Shipping Address</label>
          <input type="text" name="address" value={form.address} onChange={handleInputChange} required />

          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleInputChange}
            required
            maxLength={16}
            pattern="\d{16}"
            placeholder="1234567812345678"
          />

          <label>Expiry Date (MM/YY)</label>
          <input
            type="text"
            name="expiry"
            value={form.expiry}
            onChange={handleInputChange}
            required
            pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
            placeholder="MM/YY"
            maxLength={5}
          />

          <label>CVV</label>
          <input
            type="text"
            name="cvv"
            value={form.cvv}
            onChange={handleInputChange}
            required
            pattern="\d{3}"
            maxLength={3}
            placeholder="123"
          />

          <button type="submit" className="pay-btn">Pay ${totalPrice.toFixed(2)}</button>
          <button type="button" className="cancel-btn" onClick={() => setIsCheckingOut(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default Cart;
