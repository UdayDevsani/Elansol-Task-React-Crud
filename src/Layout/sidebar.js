import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Sidebar extends Component {
  render() {
    
    return (
      <div>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
          <Link to="/signup" className="nav-link">
            <i className="bi bi-grid" />
            <span>Dashboard</span>
          </Link>
        </li>
        </ul>
      </aside>
      </div>
    )
  }
}

export default Sidebar