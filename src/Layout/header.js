import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">NiceAdmin</span>
          </Link>
          <i className="bi bi-list toggle-sidebar-btn" />
        </div>

        <div className="search-bar">
          <form className="search-form d-flex align-items-center" method="POST" action="#">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
            <button type="submit" title="Search">
              <i className="bi bi-search" />
            </button>
          </form>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            
            <li className="nav-item ms-3">
              <Link to="/login" className="nav-link nav-icon">
                <i className="bi bi-box-arrow-right" />
                <span>Sign Out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
