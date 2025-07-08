import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import './Navbar.css';

function Navbar({ searchQuery, setSearchQuery }) {
  const { favorites, cart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-left" onClick={() => navigate('/')}>
        <img src="/assets/logo.PNG" alt="ROUH Logo" className="logo" />
        <h1 className="brand">ROUH Studio</h1>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearchKeyDown}
          placeholder="Search... find your vibe ✨"
          className="search-bar"
        />
      </div>

      <div className="navbar-right">
        <Link to="/favorites" className="icon">
          ❤️
          {favorites.length > 0 && <span className="badge">{favorites.length}</span>}
        </Link>
        <Link to="/cart" className="icon">
          🛒
          {cart.length > 0 && <span className="badge">{cart.reduce((acc, p) => acc + p.quantity, 0)}</span>}
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
