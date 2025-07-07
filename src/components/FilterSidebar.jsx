import React from 'react';
import './FilterSidebar.css';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function FilterSidebar({ filters, onChange, categories = [], subcategories = [] }) {
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
        onChange={(e) => onChange({ category: e.target.value })}
      >
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {capitalize(cat)}
          </option>
        ))}
      </select>

      <label>Subcategory</label>
      <select
        value={filters.subcategory}
        onChange={(e) => onChange({ subcategory: e.target.value })}
      >
        <option value="">All</option>
        {subcategories.map((subcat) => (
          <option key={subcat} value={subcat}>
            {capitalize(subcat)}
          </option>
        ))}
      </select>

      <label>Size</label>
      <select
        value={filters.size}
        onChange={(e) => onChange({ size: e.target.value })}
      >
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
