import React, { useEffect } from "react";
import EventLayout from "../../layouts/events-layout";
import { FiSearch } from "react-icons/all";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EventProfile() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorageI.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <EventLayout>
      <div className="event-container">
        <br />
        <h2>{localStorage.getItem("firstname")}'s Organization Events</h2>
        <div className="event-input">
          <div className="search-events">
            <FiSearch />
            <input type="text" placeholder="Search for your event" />
          </div>
        </div>
        <div className="event-rows">
          <img
            src={
              "https://res.cloudinary.com/dputu7z0u/image/upload/v1660863670/Rectangle_31_ad96pw.svg"
            }
            alt="a picture of an event image"
          />
          <div>
            <h3>Events</h3>
            <div>
              <p>{"No Update"}</p>
            </div>
          </div>
          <div>
            <h3>Date</h3>
            <div>
              <p>{"No Date"}</p>
            </div>
          </div>
          <div>
            <h3>Status</h3>
            <div>
              <p>{"No Status"}</p>
            </div>
          </div>
        </div>
        <div className="event-btn">
          <Link to="/create-event">Create Event</Link>
        </div>
      </div>
    </EventLayout>
  );
}

export default EventProfile;
