import React, { useState } from "react"
import { X } from "lucide-react"
import "./Filters.css"

function Filters({ isOpen, onClose, onFilterChange, initialFilters = {}, className = "" }) {
  const [filters, setFilters] = useState({
    categories: initialFilters.categories || [],
    difficulties: initialFilters.difficulties || [],
  })

  const handleFilterChange = (type, value) => {
    setFilters(prev => {
      const newFilters = {
        ...prev,
        [type]: prev[type].includes(value)
          ? prev[type].filter(item => item !== value)
          : [...prev[type], value]
      }
      onFilterChange(newFilters)
      return newFilters
    })
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <>
      <div 
        className={`filter-overlay ${isOpen ? "active" : ""}`} 
        onClick={handleClose}
        aria-hidden="true"
      />

      <aside className={`filters ${isOpen ? "active" : ""} ${className}`}>
        <div className="filters-header">
          <h2 className="filters-title">Filters</h2>
          <button 
            className="filters-close" 
            onClick={handleClose}
            aria-label="Close filters"
          >
            <X size={20} />
          </button>
        </div>

        <div className="filter-group">
          <h3 className="filter-heading">Category</h3>
          <div className="filter-options">
            {["Grammar", "Vocabulary", "Listening", "Speaking"].map(category => (
              <label key={category} className="filter-option">
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={() => handleFilterChange("categories", category)}
                />
                <span className="checkbox-custom"></span>
                <span className="filter-label">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h3 className="filter-heading">Difficulty</h3>
          <div className="filter-options">
            {["Beginner", "Intermediate", "Advanced"].map(difficulty => (
              <label key={difficulty} className="filter-option">
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  checked={filters.difficulties.includes(difficulty)}
                  onChange={() => handleFilterChange("difficulties", difficulty)}
                />
                <span className="checkbox-custom"></span>
                <span className="filter-label">{difficulty}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}

export default Filters
