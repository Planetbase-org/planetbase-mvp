import React from "react";
import { Link } from "react-router-dom";
import PlanetBase from "../../assets/planetbase.png";
import { FaEnvelope } from "react-icons/fa";
import "./style.css";

function EventLayout({ children }) {
  const user = localStorage.getItem("firstname");

  return (
    <>
      <div className="events-layout">
        <Link to="/" className="planetbase">
          <img src={PlanetBase} alt="planet" />
          {/* <p>PLANETBASE</p> */}
        </Link>
          <p className="user-name">
              {/* {localStorage.getItem("firstname")}{" "}
              {localStorage.getItem("lastname")} */}
              {user}
        </p>
      </div>
      {children}
    </>
  );
}

export default EventLayout;
