import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Planetbase from "../../assets/planetbase.png";
import { FaBars, FaTimes } from "react-icons/fa";

function MenuNav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleClick = () => setIsNavExpanded(!isNavExpanded);
  const token = localStorage.getItem("token");
  const onLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand-name nav-logo">
          <img src={Planetbase} alt="planetbase" />
        </Link>
        <ul className={isNavExpanded ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              className="nav-links"
              to="/products"
              activeclassname="active"
              onClick={handleClick}
            >
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-links"
              to="/solutions"
              activeclassname="active"
              onClick={handleClick}
            >
              Solutions
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-links"
              to="/resources"
              activeclassname="active"
              onClick={handleClick}
            >
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/company"
              activeclassname="active"
              className="nav-links"
              onClick={handleClick}
            >
              Company
            </Link>
          </li>
          <li className="">
              {token && (
                <Link to="/create-event" activeclassname="active" className="nav-links">
                  <button className="custom-btn" type="button">
                    <span className="custom-span">Create Events</span>
                  </button>
                </Link>
              )}
            </li>
          <div>
            <li  className="nav-item">
              {token ? (
                <Link to="/login" activeclassname="active" className="nav-links" onClick={onLogout}>
                  Logout
                </Link>
              ) : (
                <Link to="/organizer" activeclassname="active">
                  Login
                </Link>
              )}
            </li>
          </div>
        </ul>
        <div onClick={handleClick} className="nav-icon">
          {isNavExpanded ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default MenuNav;
