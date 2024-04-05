import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer" className="footer">
          <div className="copyright">
            © Copyright{' '}
            <strong>
              <span>Devonex</span>
            </strong>
            . All Rights Reserved
          </div>
        </footer>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </button>
      </div>
    );
  }
}

export default Footer;