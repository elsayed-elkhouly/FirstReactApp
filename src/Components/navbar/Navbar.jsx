import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg py-4 ">
  <div className="container">
    <NavLink className="navbar-brand text-white" to="">START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link text-white " aria-current="page" to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="portoflio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="contact">CONTACT</NavLink>
        </li>
      
        
      </ul>
      
    </div>
  </div>
</nav>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Navbar