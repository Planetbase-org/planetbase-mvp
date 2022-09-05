import React, { useState, useEffect } from "react";
import "./Card.css";
import { cards } from "../../utils/sponsorslist";
import Modal from "../Modal/Modal";
import SponsorModal from "../Modal/SponsorModal";
import Axios from "axios";

function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
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
    <>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={toggleModal}>
          <SponsorModal onClose={toggleModal} />
        </Modal>
      )}
      {isLoading && <p>Loading...</p>}
      {events.map((listEvent) => (
        <div key={listEvent._id} className="sp-card" onClick={toggleModal}>
          <img src={listEvent.eventImage} alt="image" className="card-image" />
          <p className="card-title">{listEvent.eventTitle}</p>
          <p>{listEvent.eventDesc}</p>
          <div className="card-content">
            <p>{listEvent.sponsorshipPackage}</p>
            <img
              className="card-tag"
              src="https://cdn-icons.flaticon.com/png/512/3106/premium/3106777.png?token=exp=1660863227~hmac=d94e1ad1804d0087ad7818b50dd7d34c"
              alt=""
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
