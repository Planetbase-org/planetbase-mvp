import React from "react";
import Card from "../SpCard/Card";

function SponsorCard({cards, index}) {
  cards = [<Card />];
  return (
    <>
      {cards.map((card, index) => (
        <li key={index}>{card}</li>
      ))}
    </>
  );
}

export default SponsorCard;
