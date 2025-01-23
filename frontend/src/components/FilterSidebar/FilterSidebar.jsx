import React from "react"
import "./FilterSidebar.css"

export default function FilterSidebar({ filters, selectedFilters, onFilterChange }) {
  return (
    <div className="filter-sidebar">
      <h2 className="filter-title">Filters</h2>
      <div className="filter-groups">
        <div className="filter-group">
          <h3 className="filter-group-title">Category</h3>
          <div className="filter-options">
            {filters.category.map((category) => (
              <div key={category} className="filter-option">
                <input
                  type="checkbox"
                  id={`category-${category}`}
                  checked={selectedFilters.category.includes(category)}
                  onChange={() => onFilterChange("category", category)}
                  className="filter-checkbox"
                />
                <label htmlFor={`category-${category}`} className="filter-label">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <h3 className="filter-group-title">Difficulty</h3>
          <div className="filter-options">
            {filters.difficulty.map((level) => (
              <div key={level} className="filter-option">
                <input
                  type="checkbox"
                  id={`difficulty-${level}`}
                  checked={selectedFilters.difficulty.includes(level)}
                  onChange={() => onFilterChange("difficulty", level)}
                  className="filter-checkbox"
                />
                <label htmlFor={`difficulty-${level}`} className="filter-label">
                  {level}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

