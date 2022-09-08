import React from "react";
import { Link } from "react-router-dom";
import Planetbase from "../../assets/planetbase.png";
import "./Navbar.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav">
        <Link to="/" className="nav-logo brand-name">
          <img src={Planetbase} alt="planetbase" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
