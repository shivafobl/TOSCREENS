import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
    <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
      <li className="dropdown">
        <a href="#" className="dropbtn">TO screens</a>
        <div className="dropdown-content">
        <Link to="/FScreen">First Screen</Link>
        <Link to="/SScreen">Second Screen</Link>
        <Link to="/TScreen">Third Screen</Link>
        </div>
      </li>
      <li>
      <Link to="/about">About</Link>
      </li>
   
      <li>
      <Link to="/login">Login</Link>
      </li>
      <li>
      <Link to="/signup">Sign up</Link>
      </li></ul>
    
  </nav>
    </div>
  )
}

export default Navbar
