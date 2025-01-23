import React from "react"
import { X } from "lucide-react"
import "./Filters.css"

function Filters({ isOpen, onClose, className = "" }) {
  return (
    <aside className={`filters ${isOpen ? "active" : ""} ${className}`}>
      <div className="filters-header">
        <h2 className="filters-title">Filters</h2>
        <button className="filters-close" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <div className="filter-group">
        <h3 className="filter-heading">Category</h3>
        <div className="filter-options">
          <label className="filter-option">
            <input type="checkbox" className="filter-checkbox" />
            <span className="checkbox-custom"></span>
            <span className="filter-label">Grammar</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" className="filter-checkbox" />
            <span className="checkbox-custom"></span>
            <span className="filter-label">Vocabulary</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" className="filter-checkbox" />
            <span className="checkbox-custom"></span>
            <span className="filter-label">Listening</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" className="filter-checkbox" />
            <span className="checkbox-custom"></span>
            <span className="filter-label">Speaking</span>
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h3 className="filter-heading">Difficulty</h3>
        <div className="filter-options">
          <label className="filter-option">
            <input type="checkbox" className="filter-checkbox" />
            <span className="checkbox-custom"></span>
            <span className="filter-label">Beginner</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" className="filter-checkbox" />
            <span className="checkbox-custom"></span>
            <span className="filter-label">Intermediate</span>
          </label>
          <label className="filter-option">
            <input type="checkbox" className="filter-checkbox" />
            <span className="checkbox-custom"></span>
            <span className="filter-label">Advanced</span>
          </label>
        </div>
      </div>
    </aside>
  )
}

export default Filters

