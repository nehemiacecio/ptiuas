import React from 'react'
import "./Navbar.css";
function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand" href="">COVID-19</a>
    <button className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">

      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link text-white text-uppercase ml-5" aria-current="page" href="index.html" target="_blank" >Home</a>
        </li>
      </ul>
    </div>
  </nav>
    );
    
}
export default Navbar;