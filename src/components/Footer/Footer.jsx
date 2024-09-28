import React from 'react'
import './Footer.css'
import logo from "../Assets/logo.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo}alt="" />
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-socials-icon">
            <div className="footer-icons-container">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p> Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer