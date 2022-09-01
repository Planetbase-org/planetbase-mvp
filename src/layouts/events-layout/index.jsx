import React from "react";
import { Link } from "react-router-dom";
import PlanetBase from "../../assets/planetbase.png";
import { FaEnvelope } from "react-icons/fa";
import "./style.css";

function EventLayout({ children }) {
  return (
    <>
      <div className="events-layout">
        <Link to="/" className="planetbase">
          <img src={PlanetBase} alt="planet" />
          {/* <p>PLANETBASE</p> */}
        </Link>
        <div>
          <Link to="#" className="message-btn">
            <FaEnvelope size="1.5em" />
            <span className="icon-btn-badge">2</span>
          </Link>
          <div className="username">
            <p>
              {localStorage.getItem("firstname")}{" "}
              {localStorage.getItem("lastname")}
            </p>
            {/* <img src={} alt="" /> */}
          </div>
        </div>
      </div>
      {children}
    </>
  );
}

export default EventLayout;
