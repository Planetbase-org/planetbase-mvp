import React from "react";
import "./Card.css"
import { cards } from "../../utils/sponsorslist";

function Card({ card }) {

  return (
    <>
      {cards.map((card, index) => (
          <div key={index} className="sp-card">
              <img src={"https://res.cloudinary.com/dputu7z0u/image/upload/v1642677697/sample.jpg"} alt="image" className="card-image"/>
              <h1>{card.title}</h1>
              <p>{card.description}</p>
              <p>{card.sponsoredEvent}</p>
        </div>
      ))}
    </>
  );
}

export default Card;
