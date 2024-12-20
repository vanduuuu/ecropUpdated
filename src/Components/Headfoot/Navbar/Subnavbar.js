import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoo from '../../../assets/img/logooo.svg';
import './Subnavbar.css';

function Subnavbar() {
  const location = useLocation(); // Get the current location

  // Function to close the menu
  const closeMenu = () => {
    const navMenu = document.getElementById('navbarSupportedContent');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navMenu && navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      if (navbarToggler) {
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          {/* Logo */}
          <img className="logo" loading="lazy" src={logoo} alt="logo" />

          {/* Hamburger Menu Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  to="/about"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link ${
                    location.pathname.startsWith('/services') ? 'active' : ''
                  }`}
                  to="/services"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/farmmanagement"
                      className={`dropdown-item ${
                        location.pathname === '/farmmanagement' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Farm Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ApplicationOfDevice"
                      className={`dropdown-item ${
                        location.pathname === '/ApplicationOfDevice' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Application Of Device
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/interface"
                      className={`dropdown-item ${
                        location.pathname === '/interface' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      E-crop Interface
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link ${
                    location.pathname.startsWith('/ecrop') ? 'active' : ''
                  }`}
                  to="/ecrop"
                  onClick={closeMenu}
                >
                  Products
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/ecrop"
                      className={`dropdown-item ${
                        location.pathname === '/ecrop' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      e-CROP
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === '/sustainability' ? 'active' : ''
                  }`}
                  to="/sustainability"
                  onClick={closeMenu}
                >
                  Sustainability
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === '/gallery' ? 'active' : ''
                  }`}
                  to="/gallery"
                  onClick={closeMenu}
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
                  to="/blog"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}
                  to="/faq"
                  onClick={closeMenu}
                >
                  FAQ
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  to="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Subnavbar;
