import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import PBlogo from "../../assets/planetbase.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleClick = () => setIsNavExpanded(!isNavExpanded);

  const user = localStorage.getItem("token");
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      {user ? (
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="brand-name nav-logo">
              <img src={PBlogo} alt="planetbase" />
            </Link>
            <ul className={isNavExpanded ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  className="nav-links"
                  to="/products"
                  activeclassname="active"
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-links"
                  to="/solutions"
                  activeclassname="active"
                >
                  Solutions
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-links"
                  to="/resources"
                  activeclassname="active"
                >
                  Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/company"
                  activeclassname="active"
                  className="nav-links"
                >
                  Company
                </Link>
              </li>
              <li className="nav-item">
                {user ? (
                  <button className="btn-primary" onClick={onLogout}>
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="btn-primary">Login</button>
                  </Link>
                )}
              </li>
            </ul>
            <div onClick={handleClick} className="nav-icon">
              {isNavExpanded ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="brand-name nav-logo">
              <img src={PBlogo} alt="planetbase" />
            </Link>
            <ul className={isNavExpanded ? "nav-menu active" : "nav-menu"}>
              <li style={{ marginTop: "16px" }}>
                {user ? (
                  <button className="btn-primary" onClick={onLogout}>
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="btn-primary">Login</button>
                  </Link>
                )}
              </li>
            </ul>
            <div onClick={handleClick} className="nav-icon">
              {isNavExpanded ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
