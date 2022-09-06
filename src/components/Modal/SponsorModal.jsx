import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

const desc =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit voluptatum odit nisi eos sequi sunt magnam! Ab veniam inventore voluptas molestias amet non doloribus sint excepturi, modi, cumque delectus doloremque!";
const date = "12/12/2020";

function SponsorModal({
  eventTitle,
  eventDesc,
  eventImage,
  scheduledDate,
  eventLocation,
}) {
  console.log(eventTitle);
  return (
    <div>
      <img className="sponsor-image" src={eventImage} alt={eventTitle} />
      <h4>{eventTitle}</h4>
      <p className="address">{eventLocation}</p>
      <h5>Description</h5>
      <p>{eventDesc}</p>
      <p>{scheduledDate}</p>
      <div className="sponsor-btn">
      <Link to="/sponsor-bid">
        <button class="spon-btn">
          <span class="sponsor-span">Create Bid</span>
        </button>
      </Link>
      </div>
    </div>
  );
}

export default SponsorModal;
