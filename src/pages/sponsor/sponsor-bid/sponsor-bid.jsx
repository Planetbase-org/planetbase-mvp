import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../../components/NavBar/Nav";
import Axios from "axios";
import SponsorForm from "./SponsorForm";

function SponsorBid() {
  const organizerId = localStorage.getItem("organizerId");
  const url = `https://planetbase-api.onrender.com/api/bid-event/create-bid/${organizerId}`;
  const [bidData, setBidData] = useState({
    bidFrom: "",
    email: "",
    phoneNumber: "",
    bidDate: "",
    bidAmount: 0,
    bidDesc: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { bidFrom, email, phoneNumber, bidDate, bidAmount, bidDesc } = bidData;
  const changeState = (e) => {
    setBidData((prevValue) => {
      return { ...prevValue, [e.target.name]: e.target.value };
    });
  };
  const navigate = useNavigate();

  const onSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const createPayment = (id) => {
      Axios.post(`https://planetbase-api.onrender.com/api/payment/${id}`)
        .then((res) => {
          const { data } = res.data.data;
          console.log(data.link);
          window.open(data.link);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    console.log(bidData);
    Axios.post(url, bidData)
      .then((res) => {
        console.log(res);
        // navigate("/success");
        const { _id } = res.data.create_bid;
        createPayment(_id);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };
  return (
    <>
      <Nav />
      <SponsorForm
        bidFrom={bidFrom}
        email={email}
        phoneNumber={phoneNumber}
        bidDate={bidDate}
        bidAmount={bidAmount}
        bidDesc={bidDesc}
        changeState={changeState}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </>
  );
}

export default SponsorBid;
