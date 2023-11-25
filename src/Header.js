import React from "react";
import "./Header.css";
//import react from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Caring Angel</div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#doctor">Doctor List</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
