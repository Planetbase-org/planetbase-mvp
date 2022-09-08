import React from "react";
import Planetbase from "../../assets/planetbase.png";
import "./Subscribe.css";

function Subscribe() {
  return (
    <section className="subscribe">
      <div className="subscribe-header">
        <img src={Planetbase} alt="" />
      </div>
      <div className="subscribe-message">
        <div>
          <h4>
            Moving your events online really opens up the esteem of supporting
            it
          </h4>
          <p>
            Become a subscriber and become the first to receive Information.
          </p>
        </div>
        <div className="subscribe">
          <div className="subscribe-wrapper">
            <input type="text" placeholder="Enter email address"/>
            <button className="btn-primary">Submit</button>
          </div>
          <h6 className='policy'>
            By signing up, you agree to our Terms of Service and Privacy Policy.
            You will receive offers from Planetbase
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
