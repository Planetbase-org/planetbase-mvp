import React, { useEffect, useState } from "react";
import EventLayout from "../../layouts/events-layout";
import { FiSearch } from "react-icons/all";
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function EventProfile() {
  const [firstTime, setFirstTime] = useState();
  const dispatch = useDispatch();
  const { title } = useSelector((state) => state.event);
  const navigate = useNavigate();

  // to check to see if a vendor has created a profile page
  console.log(useSelector((store) => console.log(store)));

  return (
    <EventLayout>
      <div className="event-container">
        <h2>Eleanor's Organization Events</h2>
        <div className="search-events">
          <span>
            <FiSearch />
          </span>
          <input type="text" placeholder="Search for your event" />
        </div>
        <div className="event-rows">
          <div>
            <h3>Events</h3>
            <div>
              <p>{title}</p>
            </div>
          </div>
          <div>
            <h3>Date</h3>
            <div>No Event</div>
          </div>
          <div>
            <h3>Status</h3>
            <div>No Event</div>
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
