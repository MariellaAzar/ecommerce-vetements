import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { StoreProvider } from './context/StoreContext';  // Import du contexte
import Survey from './pages/Survey';
import Checkout from './pages/Checkout';

import Success from './pages/Success';  // importer la page de succès

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <StoreProvider>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} />
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop searchQueryGlobal={searchQuery} />} />
          <Route path="/shop/:category" element={<Shop searchQueryGlobal={searchQuery} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;


