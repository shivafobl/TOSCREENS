import React from 'react';
import './style.css';
import logo from './icons/practice/com.png';

const Header = () => {
    return (
        <div><>
        <title>Tesco</title>
        <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h2 className="header-text">TO Screens</h2>
    </div>
</>

      </div>
    );
}

export default Header;