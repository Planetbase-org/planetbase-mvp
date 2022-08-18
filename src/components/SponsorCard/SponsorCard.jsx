import React from "react";
import Card from "../SpCard/Card";
import "./SponsorCard.css";

function SponsorCard({ cards }) {

  return (
    <div className="sponsorships-layout">
      <Card  cards={cards} />
    </div>
  );
}

export default SponsorCard;
