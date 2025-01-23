import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import "./Header.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-link">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-logo@3x.png-s0vd1QiirWgNdYSruFlCQuEo7UGUKp.webp"
              alt="SpeakX Logo"
              className="logo"
            />
          </Link>

          <nav className="desktop-nav">
            <Link to="/search" className="nav-link">
              Search
            </Link>
            <Link to="/quiz" className="nav-link">
              Quiz
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <button className="download-button">Download Now</button>
          </nav>

          <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mobile-nav"
            >
              <div className="mobile-nav-links">
                <Link to="/search" className="nav-link">
                  Search
                </Link>
                <Link to="/quiz" className="nav-link">
                  Quiz
                </Link>
                <Link to="/about" className="nav-link">
                  About
                </Link>
                <button className="download-button mobile">Download Now</button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

