import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar'; 
import Home from './home'; 
import Footer from './footer';

class Layout extends Component {
  loading = () => <div className='animated fadeIn pt-1 text-center'>Loading...</div>;

  render() {
    return (
      <div>
        <div id='wrapper'>
          <Sidebar />
          <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
              <Header />
              <Home />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
