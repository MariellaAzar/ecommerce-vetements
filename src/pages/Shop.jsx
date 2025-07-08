import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import './Shop.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Shop() {
  const query = useQuery();
  const navigate = useNavigate();

  // Parse URL params or default to empty strings/false
  const [filters, setFilters] = useState({
    search: query.get('search') || '',
    category: query.get('category') || '',
    subcategory: query.get('subcategory') || '',
    size: query.get('size') || '',
    sale: query.get('sale') === 'true', // checkbox boolean
    color: query.get('color') || '',
  });

  // Sync filters state to URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, val]) => {
      if (val) {
        params.set(key, val);
      }
    });

    navigate(`/shop?${params.toString()}`, { replace: true });
  }, [filters, navigate]);

  // matches helper as before
  const matches = (field, value) => {
    if (!value) return true;
    if (!field) return false;
    if (Array.isArray(field)) {
      return field.some(f => String(f).toLowerCase() === value.toLowerCase());
    }
    return String(field).toLowerCase() === value.toLowerCase();
  };

  // Filtering products same as before...
  const filteredProducts = productsData.filter(product => {
    const searchLower = filters.search.toLowerCase();

    const searchMatch =
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower);

    const categoryMatch = matches(product.category, filters.category);
    const subcategoryMatch = matches(product.subcategory, filters.subcategory);
    const sizeMatch =
      !filters.size ||
      (product.sizes && product.sizes.some(s => s.toLowerCase() === filters.size.toLowerCase()));
    const saleMatch = !filters.sale || product.onSale;
    const colorMatch =
      !filters.color || (product.color && product.color.toLowerCase() === filters.color.toLowerCase());

    return (
      searchMatch &&
      categoryMatch &&
      subcategoryMatch &&
      sizeMatch &&
      saleMatch &&
      colorMatch
    );
  });

  const handleFilterChange = change => {
    setFilters(prev => ({ ...prev, ...change }));
  };

  return (
    <div className="shop-page" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <FilterSidebar filters={filters} onChange={handleFilterChange} />
      <div className="product-list" style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => <ProductCard key={product.id} product={product} />)
        ) : (
          <p style={{ padding: 30, textAlign: 'center', fontSize: 18, color: '#555' }}>
            No products found matching your filters.
          </p>
        )}
      </div>
    </div>
  );
}

export default Shop;
