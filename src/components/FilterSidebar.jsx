import React from 'react';
import './FilterSidebar.css';

function FilterSidebar({ filters, onChange }) {
  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>

      <label>Search</label>
      <input
        type="text"
        value={filters.search}
        onChange={(e) => onChange({ search: e.target.value })}
        placeholder="Search by name or desc"
      />

      <label>Category</label>
      <select
        value={filters.category}
        onChange={(e) => onChange({ category: e.target.value.toLowerCase() })}
      >
        <option value="">All</option>
        <option value="dresses">Dresses</option>
        <option value="accessories">Accessories</option>
        <option value="shoes">Shoes</option>
        <option value="business">Business</option>
        <option value="plus">Plus Size</option>
        <option value="skirt">Skirt</option>
        <option value="pants">Pants</option>
        <option value="shirt">Shirt</option>
      </select>

      <label>Subcategory</label>
      <select
        value={filters.subcategory}
        onChange={(e) => onChange({ subcategory: e.target.value.toLowerCase() })}
      >
        <option value="">All</option>
        <option value="summer">Summer</option>
        <option value="prom">Prom</option>
        <option value="sneakers">Sneakers</option>
        <option value="highheel">High Heel</option>
        <option value="blazer">Blazer</option>
      </select>

      <label>Size</label>
      <select
        value={filters.size}
        onChange={(e) => onChange({ size: e.target.value.toLowerCase() })}
      >
        <option value="">All</option>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="plus">Plus</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={filters.sale}
          onChange={(e) => onChange({ sale: e.target.checked })}
        />
        On Sale
      </label>
    </div>
  );
}

export default FilterSidebar;
