import React, { useState, useEffect } from 'react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import './Shop.css';

function Shop({ searchQueryGlobal }) {
  const [filters, setFilters] = useState({
    category: '',
    subcategory: '',
    size: '',
    sale: false,
    search: ''
  });

  // Sync avec la Navbar
  useEffect(() => {
    setFilters((prev) => ({ ...prev, search: searchQueryGlobal }));
  }, [searchQueryGlobal]);

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const filteredProducts = productsData.filter((product) => {
    const { category, subcategory, size, sale, search } = filters;

    return (
      (!category || product.category === category) &&
      (!subcategory || product.subcategory === subcategory) &&
      (!size || product.sizes.includes(size)) &&
      (!sale || product.onSale === true) &&
      (!search ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description?.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="shop-page">
      <FilterSidebar filters={filters} onChange={handleFilterChange} />
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products match your filters 😢</p>
        )}
      </div>
    </div>
  );
}

export default Shop;
