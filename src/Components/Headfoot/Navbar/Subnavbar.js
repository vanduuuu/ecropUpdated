import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoo from '../../../assets/img/logooo.svg';
import './Subnavbar.css';
import Timer from "./Timer/Timer";


function Subnavbar() {
  const location = useLocation(); // Get the current location

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          {/* Logo - stays on the left */}
          <img className="logo" loading="lazy" src={logoo} alt="logo" />

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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

           <div className='timer'><h5><Timer duration={ 2 * 24 * 60 * 60 * 1000 }/></h5></div>
            {/* Menu items - moved to the right */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  to="/about"
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
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}
                  to="/faq"
                >
                  FAQ
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  to="/contact"
                  role="button"
                  aria-expanded="false"
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
