import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

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
        <button class="custom-btn">
          <span class="custom-span">Create Bid</span>
        </button>
      </Link>
      </div>
    </div>
  );
}

export default SponsorModal;
