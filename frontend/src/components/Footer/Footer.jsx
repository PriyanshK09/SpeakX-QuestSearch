import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-heading">
            <h2 className="footer-title">
              Become a Confident
              <br />
              English Speaker
            </h2>
          </div>
          <div className="footer-logo">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JzW1RJMfbfZWHcFgVzA9Ni1Ln4H4nO.png"
              alt="SpeakX Logo"
              className="logo"
            />
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-link-group">
            <Link to="/about" className="footer-link">
              About Us
            </Link>
            <Link to="/contact" className="footer-link">
              Contact Us
            </Link>
          </div>
          <div className="footer-link-group">
            <Link to="/terms" className="footer-link">
              Terms and Conditions
            </Link>
            <Link to="/privacy" className="footer-link">
              Privacy Policy
            </Link>
          </div>
          <div className="footer-link-group">
            <Link to="/refund" className="footer-link">
              Refund Policy
            </Link>
            <Link to="/deletion" className="footer-link">
              User Data Deletion Policy
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-address">Plot No 823P, Sector-47, Gurgaon, Haryana, India, 122018</p>
          <button className="download-button">Download Now!</button>
        </div>

        <div className="footer-copyright">
          <p>COPYRIGHT ©2024 IVYPODS TECHNOLOGY PVT. LTD.</p>
        </div>
      </div>
    </footer>
  )
}

