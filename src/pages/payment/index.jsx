import React from "react";
import EventLayout from "../../layouts/events-layout";

function Payment() {
  return (
    <EventLayout>
      <div className="event-container">
        <h2>Payment</h2>
        <div>
          <img
            src="https://res.cloudinary.com/dputu7z0u/image/upload/v1660863670/Rectangle_31_ad96pw.svg"
            alt=""
                  />
                  <div>
                      <p>Payment Method</p>
                      <img src="https://res.cloudinary.com/dputu7z0u/image/upload/v1661882129/mastercard-26151_1_v9rb03.svg" alt="visa payment" title="payment via visa payment"/>
                      <img src="https://res.cloudinary.com/dputu7z0u/image/upload/v1661882243/flux_png_1_1_bxr9rj.svg" alt="flutter wave" title=""/>
                  </div>
        </div>
      </div>
    </EventLayout>
  );
}

export default Payment;
