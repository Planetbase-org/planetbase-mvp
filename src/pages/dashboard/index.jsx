import React, { useEffect } from "react";
import EventLayout from "../../layouts/events-layout";
import { FiSearch } from "react-icons/all";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export function  EventCard(event){
  return(
    <div className="event-rows">
          <img
            src={event.eventImage
            }
            alt="a picture of an event image"
          />
          <div>
            <h3>Events</h3>
            <div>
              <p>{event.title}</p>
            </div>
          </div>
          <div>
            <h3>Date</h3>
            <div>
              <p>{event.date}</p>
            </div>
          </div>
          <div>
            <h3>Status</h3>
            <div>
              <p>{event.status1}</p>
            </div>
          </div>
        </div>
  )
}

export function NoEvents(){
  return(
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
  )
}
// 
function EventProfile() {
  const navigate = useNavigate();
  const [events, setEvents] = React.useState([]);

const url="https://planetbase-api.onrender.com/api/events/all-events"

const fetchAllEvents = async () => {
    const response = await Axios.get(url);
    setEvents(response.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else{
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
        {
          events.length > 0 ? events.map((event) => <EventCard {...event} />) : <NoEvents />
        }
         </div>
        <div className="event-btn">
          <Link to="/create-event">Create Event</Link>
        </div>
      </div>
    </EventLayout>
  );
}

export default EventProfile;
