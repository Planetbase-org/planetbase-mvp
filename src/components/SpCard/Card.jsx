import React from "react";

function Card({ card }) {
  const cards = [
    {
      id: 1,
      title: "Sponsor",
      img: "https://s3.amazonaws.com/files.d20.io/images/1280x1280/sp-img-sp-1.png",
    },
    {
      id: 2,
      title: "Sponsor",
      img: "https://s3.amazonaws.com/files.d20.io/images/1280x1280/sp-img-sp-1.png",
    },
    {
      id: 3,
      title: "Sponsor",
      img: "https://s3.amazonaws.com/files.d20.io/images/1280x1280/sp-img-sp-1.png",
    },
    {
      id: 4,
      title: "Sponsor",
      img: "https://s3.amazonaws.com/files.d20.io/images/1280x1280/sp-img-sp-1.png",
    },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <div key={index}>
          <h1>{card.title}</h1>
        </div>
      ))}
    </>
  );
}

export default Card;
