import React from "react"
import { Search, Filter } from "lucide-react"
import "./SearchSection.css"

function SearchSection({ onFilterToggle }) {
  return (
    <section className="search-section">
      <div className="search-container">
        <h1 className="search-title">Find Your Perfect Question</h1>
        <p className="search-description">Search through our extensive database of English learning questions</p>
        <div className="search-box-wrapper">
          <input type="search" placeholder="Search for questions..." className="search-input" />
          <button className="search-btn">
            <Search size={20} />
          </button>
          <button className="filter-btn mobile-only" onClick={onFilterToggle} aria-label="Filter">
            <Filter size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SearchSection
