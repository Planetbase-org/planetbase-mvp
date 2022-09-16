import React from "react";
import EventLayout from "../../../layouts/events-layout";
import "./style.css";

function ConfirmEvent() {
  return (
    <EventLayout>
      <div className="confirm-event">
        <section>
          <img
            src={
              "https://res.cloudinary.com/dputu7z0u/image/upload/v1660863670/Rectangle_31_ad96pw.svg"
            }
            alt="event image"
          />
          <h5>B2B E-commerce conference</h5>
          <p>3891 Ranch view Dr. Richardson, California 62639</p>
        </section>
        <h5>Description</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet
          aspernatur quibusdam dolorum porro id ipsam! Qui est tempore culpa
          sit. Voluptatibus iste unde itaque alias ad sequi aut animi.
        </p>
        <h5>Sponsor Package</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum libero
          quaerat, eveniet unde harum provident veniam at alias eius,
          necessitatibus, eligendi ratione odit assumenda excepturi. Asperiores
          praesentium culpa consectetur quis!
        </p>
        <div className="sub">
          <section>
            <h5>Date</h5>
            <p>2022/9/12/9AM</p>
          </section>
          <section>
            <h5>Price</h5>
            <p>₦ 2000</p>
          </section>
        </div>
        <div className="btn">
          <button className="btn-primary">
            <span>Publish</span>
          </button>
        </div>
      </div>
    </EventLayout>
  );
}

export default ConfirmEvent;
