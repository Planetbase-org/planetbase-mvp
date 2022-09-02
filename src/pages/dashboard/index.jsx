import React, { useEffect, useState, useTransition } from "react";
import EventLayout from "../../layouts/events-layout";
import { FiSearch } from "react-icons/all";
import "./style.css";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { saveEvent } from "../../redux/eventSlice";
import { useNavigate } from "react-router-dom";

function EventProfile() {
  // const dispatch = useDispatch();

  // const { event } = useSelector((state) => state.event);
  // const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  // to check to see if a vendor has created a profile page
  // console.log(useSelector((store) => console.log(store)));

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
              <p>{event?.title || "No Update"}</p>
            </div>
          </div>
          <div>
            <h3>Date</h3>
            <div>
              <p>{event?.date || "No Date"}</p>
            </div>
          </div>
          <div>
            <h3>Status</h3>
            <div>
              <p>{event?.categories || "No Status"}</p>
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
