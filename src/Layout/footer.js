import React, { Component } from 'react'

class Footer extends Component {  
    render() {  
        return (  
            <div>
            <footer id="footer" className="footer">
              <div className="copyright">
                © Copyright{" "}
                <strong>
                  <span>NiceAdmin</span>
                </strong>
                . All Rights Reserved
              </div>
              <div className="credits">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </footer>
            <a
              href="#"
              className="back-to-top d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-arrow-up-short" />
            </a>  
            </div>  
        )  
    }  
}  
  
export default Footer  