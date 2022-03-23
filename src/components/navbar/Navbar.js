import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <ul className="navbar-link">
        <li>
          <a href="#">ABOUT US</a>
        </li>
        <li>
          <a href="#">FOR YOU</a>
        </li>
        <li>
          <a href="#">SERVICES</a>
        </li>
        <li>
          <a href="#">BLOG</a>
        </li>
        <li>
          <a href="#">VLOG</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
