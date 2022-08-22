import React, { useState } from "react";
import "./Card.css";
import { cards } from "../../utils/sponsorslist";
import Modal from "../Modal/Modal";
import SponsorModal from "../Modal/SponsorModal";

function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>{
      isOpen && (
        <Modal isOpen={isOpen}  onClose={toggleModal}>
          <SponsorModal onClose={toggleModal}/>
        </Modal>
      )
    }
      {cards.map((card, index) => (
        <div key={index} className="sp-card" onClick={toggleModal}>
          <img
            src={card.img}
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
