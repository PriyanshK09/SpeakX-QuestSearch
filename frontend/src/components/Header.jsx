import React from "react"
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-logo@3x.png-7MyLUCS2bqR09sGFfnA5ixWQRb5yCq.webp"
            alt="SpeakX"
            className="logo-image"
          />
        </a>
        <nav className="header-nav">
          <div className="nav-links">
            <a href="/search" className="nav-link">
              Search
            </a>
            <a href="/quiz" className="nav-link">
              Quiz
            </a>
            <a href="/about" className="nav-link">
              About
            </a>
          </div>
          <button className="download-btn">Download Now</button>
        </nav>
      </div>
    </header>
  )
}

export default Header

