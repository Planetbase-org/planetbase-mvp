import React from "react";
import { Link } from "react-router-dom";
import PlanetBase from "../../assets/planetbase.png";
import { FaEnvelope } from "react-icons/fa";
import "./style.css";
import { useSelector } from "react-redux";

function EventLayout({ children }) {
  const { user } = useSelector((state) => state.auth);

  // to check to see if a vendor has created a profile page
  console.log(useSelector((store) => console.log(store)));

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
              {/* {localStorage.getItem("firstname")}{" "}
              {localStorage.getItem("lastname")} */}
              {user && user.message.firstname}
            </p>
          
          </div>
        </div>
      </div>
      {children}
    </>
  );
}

export default EventLayout;
