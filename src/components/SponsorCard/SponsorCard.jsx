// import React from "react";
import "./SponsorCard.css";
import React, { useState, useEffect } from "react";
// import "./Card.css";
// import { cards } from "../../utils/sponsorslist";
import Modal from "../Modal/Modal";
import SponsorModal from "../Modal/SponsorModal";
import Axios from "axios";

function SponsorCard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [sponsorshipPackage, setSponsorshipPackage] = useState("");
  const url = "https://planetbase-api.onrender.com/api/events/all-events";
  useEffect(() => {
    setIsLoading(true);
    Axios.get(url)
      .then((res) => {
        setEvents(res.data.events);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={toggleModal}>
          <SponsorModal
            events={events}
            onClose={toggleModal}
            eventTitle={eventTitle}
            eventDesc={eventDesc}
            eventImage={eventImage}
            sponsorshipPackage={sponsorshipPackage}
            scheduledDate={scheduledDate}
            eventLocation={eventLocation}
          />
        </Modal>
      )}
      {isLoading ? (
        <div className="loading-container">
          <div className="loading">
            <div className="loading__letter">L</div>
            <div className="loading__letter">o</div>
            <div className="loading__letter">a</div>
            <div className="loading__letter">d</div>
            <div className="loading__letter">i</div>
            <div className="loading__letter">n</div>
            <div className="loading__letter">g</div>
            <div className="loading__letter">.</div>
            <div className="loading__letter">.</div>
            <div className="loading__letter">.</div>
          </div>
        </div>
      ) : (
        <div className="sponsorships-layout">
          {events.map((listEvent, index) => (
            <div
              key={listEvent._id}                                           
              className="sp-card"
              onClick={() => {
                toggleModal();
                setEventTitle(listEvent.eventTitle);
                setEventDesc(listEvent.eventDesc);
                setEventImage(listEvent.eventImage);
                setSponsorshipPackage(listEvent.sponsorshipPackage);
                setScheduledDate(listEvent.scheduledDate);
                setEventLocation(listEvent.eventLocation);
                localStorage.setItem("organizerId", listEvent.organizerId);
                console.log(listEvent.organizerId);
              }}
            >
              <img
                src={listEvent.eventImage}
                alt="image"
                className="card-image"
              />
              <p className="card-title">{listEvent.eventTitle}</p>
              <p className="card-desc">{listEvent.eventDesc}</p>
              <div className="card-content">
                <p className="card-desc">{listEvent.sponsorshipPackage}</p>
                {/* <img
                  className="card-tag"
                  src="https://cdn-icons.flaticon.com/png/512/3106/premium/3106777.png?token=exp=1660863227~hmac=d94e1ad1804d0087ad7818b50dd7d34c"
                  alt=""
                /> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SponsorCard;
