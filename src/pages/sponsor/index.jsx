import { FiSearch } from "react-icons/fi";
import SponsorCard from "../../components/SponsorCard/SponsorCard";
import "./style.css";
import Navbar from "../../components/NavBar/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

export function EventCard(event) {
  const { _id,eventImage ,eventTitle,scheduledDate, ...rest} = event
  console.log(event)
 
  //  "_id": "63161358f09dd222b692faf7",
  //     "organizerId": "6310bdcf8005100020e86b70",
  //     "eventTitle": "Techie",
  //     "eventType": "Online Managment",
  //     "eventOrganizer": "Tech Event",
  //     "eventTags": [],
  //     "eventLocation": "Lagos",
  //     "sponsorshipPackage": "dkdjdj",
  //     "price": 1000,
  //     "eventDesc": "dhdgf",
  //     "scheduledDate": "2022-09-27",
  //     "eventImage": 
  return (
    <div className="event-rows" {...rest}>
      <img src={eventImage} alt={eventTitle} />
      <div>
        <h3>Events</h3>
        <div>
          <p>{eventTitle}</p>
        </div>
      </div>
      <div>
        <h3>Date</h3>
        <div>
          <p>{scheduledDate}</p>
        </div>
      </div>
    </div>
  );
}

export function NoEvents() {
  return (
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
  );
}

          // {events.map((event, index) => (
          //     <EventCard key={index} {...event} />
          //   ))}

function Sponsor() {
  const url = "https://planetbase-api.onrender.com/api/events/all-events";

  const [events, setEvents] = useState([]);

  useEffect(() => {
    Axios.get(url)
      .then((res) => {
        setEvents(res.data);
        console.log(res.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="sponsors">
        <h2>Discover Events Where Your Target Audience Is</h2>
        <div className="search-events sponsorship-search">
          <span>
            <FiSearch />
          </span>
          <input type="text" placeholder="Search for your event" />
        </div>
        <div>
          <Link to="/sponsored-events">
            <button className="btn-primary">
              <span>Listed Events</span>
            </button>
          </Link>
        </div>
        <br />
      
          <div>
            {events.map((events, index) => (
              <SponsorCard key={events._id} {...events} />
            ))}
          </div>
        ) : (
          <SponsorCard/>
        )}

        {/* <div className="sponsor-btn-continue">
          <button className="btn-primary" type="submit">
            <span>Continue</span>
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Sponsor;
