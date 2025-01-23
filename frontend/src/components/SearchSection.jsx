import React from "react"
import "./SearchSection.css"

function SearchSection() {
  return (
    <section className="search-section">
      <div className="search-container">
        <h1 className="search-title">Find Your Perfect Question</h1>
        <p className="search-description">Search through our extensive database of English learning questions</p>
        <div className="search-box-wrapper">
          <input type="search" placeholder="Search for questions..." className="search-input" />
          <button className="search-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="search-icon">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <button className="filter-btn" aria-label="Filter">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="filter-icon">
              <path d="M3 6h18M6 12h12M9 18h6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SearchSection

