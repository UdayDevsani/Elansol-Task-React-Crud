import React, { Component } from 'react'
import Dashboard from '../Pages/Dashboard'

export class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Dashboard />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
