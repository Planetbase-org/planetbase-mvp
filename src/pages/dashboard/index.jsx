import React, { useEffect } from "react";
import EventLayout from "../../layouts/events-layout";
import { FiSearch } from "react-icons/all";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "axios";


//
function EventProfile() {
  const navigate = useNavigate();
  const [events, setEvents] = React.useState([]);

  const url = "https://planetbase-api.onrender.com/api/events/all-events";

  const fetchAllEvents = async () => {
    const response = await Axios.get(url);
    setEvents(response.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchAllEvents();
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
        <div>
            <h1>Hello Events</h1>
        </div>
        <div className="event-btn">
          <Link to="/create-event">Create Event</Link>
        </div>
      </div>
    </EventLayout>
  );
}

export default EventProfile;
