import React, { useState } from "react";
import EventLayout from "../../layouts/events-layout";
import "./style.css";
import Flutter from "../../components/Modal/Flutter";
import Visa from "../../components/Modal/Visa";
import Modal from "../../components/Modal/Modal";

function Payment() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const toggleModal2 = () => setIsOpen2(!isOpen2);

  return (
    <EventLayout>
      <div className="event-container">
        <h2>Payment</h2>
        <div className="payment-container">
          <img
            src="https://res.cloudinary.com/dputu7z0u/image/upload/v1660863670/Rectangle_31_ad96pw.svg"
            alt=""
          />
          <div className="payments-container">
            <p>Payment Method</p>
            <div className="payments-cards">
              {isOpen && (
                <Modal isOpen={isOpen} onClose={toggleModal}>
                  <Visa onClose={toggleModal} />
                </Modal>
              )}
              {isOpen2 && (
                <Modal isOpen={isOpen2} onClose={toggleModal2}>
                  <Flutter onClose={toggleModal2} />
                </Modal>
              )}
              <img
                src="https://res.cloudinary.com/dputu7z0u/image/upload/v1661882129/mastercard-26151_1_v9rb03.svg"
                alt="visa payment"
                title="payment via visa payment"
                className="payment-method"
                onClick={toggleModal}
              />
              <img
                src="https://res.cloudinary.com/dputu7z0u/image/upload/v1661882243/flux_png_1_1_bxr9rj.svg"
                alt="flutter wave"
                title="payment via Flutter wave"
                className="payment-method2"
                onClick={toggleModal2}
              />
            </div>
          </div>
        </div>
      </div>
    </EventLayout>
  );
}

export default Payment;
