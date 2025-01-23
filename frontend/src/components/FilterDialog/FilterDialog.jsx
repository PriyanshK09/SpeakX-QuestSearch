import React, { useState } from "react"
import { Filter, X } from "lucide-react"
import "./FilterDialog.css"

export default function FilterDialog({ filters, selectedFilters, onFilterChange }) {
  const [open, setOpen] = useState(false)

  const handleFilterSelect = (filterType, value) => {
    onFilterChange(filterType, value)
  }

  return (
    <>
      <button className="filter-button" onClick={() => setOpen(true)}>
        <Filter className="filter-icon" />
      </button>
      {open && (
        <div className="dialog-overlay" onClick={() => setOpen(false)}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <div className="dialog-header">
              <h2 className="dialog-title">Filters</h2>
              <button className="close-button" onClick={() => setOpen(false)}>
                <X className="close-icon" />
              </button>
            </div>
            <div className="filter-section">
              <div>
                <h3 className="filter-section-title">Category</h3>
                <div className="checkbox-group">
                  {filters.category.map((category) => (
                    <div key={category} className="checkbox-item">
                      <input
                        type="checkbox"
                        id={`category-mobile-${category}`}
                        checked={selectedFilters.category.includes(category)}
                        onChange={() => handleFilterSelect("category", category)}
                        className="checkbox"
                      />
                      <label htmlFor={`category-mobile-${category}`} className="checkbox-label">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="filter-section-title">Difficulty</h3>
                <div className="checkbox-group">
                  {filters.difficulty.map((level) => (
                    <div key={level} className="checkbox-item">
                      <input
                        type="checkbox"
                        id={`difficulty-mobile-${level}`}
                        checked={selectedFilters.difficulty.includes(level)}
                        onChange={() => handleFilterSelect("difficulty", level)}
                        className="checkbox"
                      />
                      <label htmlFor={`difficulty-mobile-${level}`} className="checkbox-label">
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
