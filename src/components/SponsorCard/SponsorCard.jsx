import React from "react";
import Card from "../SpCard/Card";

function SponsorCard({ cards }) {

  return (
    <div className="sponsorships-layout">
      <Card  cards={cards} />
    </div>
  );
}

export default SponsorCard;
