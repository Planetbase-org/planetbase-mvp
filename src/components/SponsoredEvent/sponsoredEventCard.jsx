import React from 'react';
import "./sponsoredECard.css";

function SponsoredECard() {
  return (
      <div title="sponsored event" className="spcard-container">
      <img src="https://res.cloudinary.com/dputu7z0u/image/upload/v1660863670/Rectangle_31_ad96pw.svg" alt="" />
      <p className="sponsored-name">B2B E-commerce conference</p>
      <p className="date">Dec 9, 2022, 9:00AM - Dec 13, 2022, 2:00PM</p>
      <div className="sponsor">
        <div className="sp-name">EP</div>
        <p>  Hosted by <br /><span>Eleanor Pena</span>
        </p>
      </div>
    </div>
  )
}

export default SponsoredECard;