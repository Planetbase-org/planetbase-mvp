import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Planetbase from "../../assets/planetbase.svg";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <Link to="/" className="brand-name">
        <img src={Planetbase} alt="planetbase" />
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/product" activeclassname="active">
              Product
            </Link>
          </li>
          <li>
            <Link to="/about" activeclassname="active">
              Solutions
            </Link>
          </li>
          <li>
            <Link to="/blog" activeclassname="active">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/contact" activeclassname="active">
              Company
            </Link>
          </li>
          <li>
            <button className="loginBtnMobile">Login</button>
          </li>
        </ul>
        <button className="loginButton">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
