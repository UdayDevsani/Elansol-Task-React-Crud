import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Sidebar extends Component {
  render() {
    
    return (
      <div>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link ">
              <i className="bi bi-grid" />
              <Link to="/signup"></Link>
              <span>Dashboard</span>
            </a>
          </li>
        </ul>
      </aside>
      </div>
    )
  }
}

export default Sidebar