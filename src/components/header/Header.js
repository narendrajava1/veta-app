import React, { useState } from 'react';
import './Header.css';
export const Header = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const handleMouseEnter = () => {
    setSubMenuVisible(true);
  };
  const handleMouseLeave = () => {
    setSubMenuVisible(false);
  };
  return (
    <div className="main-box">
      <nav className="nav-bar">
        <div className="logo">
          <h1>VETA</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="">Home</a>
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="menu-item">
            Profile
            {isSubMenuVisible && (
              <div className="submenu">
                <ul>
                  <li>SignUP</li>
                  <li>SignIN</li>
                  <li>SignOUT</li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
      <img src="../../raw_milk_pour_can.png" alt="" />
    </div>
  );
};
