import React, { createContext, useState, useEffect } from 'react';

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const toggleFavorite = (productId) => {
    const idStr = String(productId);
    setFavorites((prev) =>
      prev.includes(idStr) ? prev.filter(id => id !== idStr) : [...prev, idStr]
    );
  };

  const addToCart = (product) => {
    const idStr = String(product.id);
    setCart((prev) => {
      const existing = prev.find(p => String(p.id) === idStr);
      if (existing) {
        return prev.map(p =>
          String(p.id) === idStr
            ? { ...p, quantity: p.quantity + 1, addedAt: new Date().toISOString() }
            : p
        );
      } else {
        return [...prev, { ...product, id: idStr, quantity: 1, addedAt: new Date().toISOString() }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter(p => p.id !== String(productId)));
  };

  const clearCart = () => setCart([]);

  return (
    <StoreContext.Provider value={{
      favorites, toggleFavorite,
      cart, addToCart, removeFromCart, clearCart
    }}>
      {children}
    </StoreContext.Provider>
  );
}
