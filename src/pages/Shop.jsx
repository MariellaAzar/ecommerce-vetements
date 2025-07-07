import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import './Shop.css';

function Shop({ searchQueryGlobal }) {
  const { category: routeCategory } = useParams();
  const [filters, setFilters] = useState({
    category: '',
    subcategory: '',
    size: '',
    sale: false,
    search: ''
  });

  // Sync avec la Navbar et l'URL
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: routeCategory ? routeCategory.toLowerCase() : '',
      search: searchQueryGlobal
    }));
  }, [routeCategory, searchQueryGlobal]);

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const filteredProducts = productsData.filter((product) => {
    const { category, subcategory, size, sale, search } = filters;

    return (
      (!category || (product.category?.toLowerCase() === category)) &&
      (!subcategory || (product.subcategory?.toLowerCase() === subcategory)) &&
      (!size || (product.sizes?.map(s => s.toLowerCase()).includes(size.toLowerCase()))) &&
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
