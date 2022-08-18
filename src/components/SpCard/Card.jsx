import React from "react";
import "./Card.css";
import { cards } from "../../utils/sponsorslist";

function Card() {
  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className="sp-card">
          <img
            src={
              "https://res.cloudinary.com/dputu7z0u/image/upload/v1642677697/sample.jpg"
            }
            alt="image"
            className="card-image"
          />
          <p className="card-title">{card.title}</p>
          <p>{card.description}</p>
          <div className="card-content">
            <p>
              {card.sponsoredEvent}
            </p>
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
