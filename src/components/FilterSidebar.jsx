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
      <select onChange={(e) => onChange({ category: e.target.value })}>
        <option value="">All</option>
        <option value="dresses">Dresses</option>
        <option value="accessories">Accessories</option>
        <option value="shoes">Shoes</option>
        <option value="business">Business</option>
      </select>

      <label>Subcategory</label>
      <select onChange={(e) => onChange({ subcategory: e.target.value })}>
        <option value="">All</option>
        <option value="summer">Summer</option>
        <option value="prom">Prom</option>
        <option value="sneakers">Sneakers</option>
        <option value="highheel">High Heel</option>
        <option value="blazer">Blazer</option>
      </select>

      <label>Size</label>
      <select onChange={(e) => onChange({ size: e.target.value })}>
        <option value="">All</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="Plus">Plus</option>
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
