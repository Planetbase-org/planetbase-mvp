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
            it.
          </h4>
          <p>
            Become a subscriber and receive great tips on event regulation
            updates sent to your inbox!.
          </p>
        </div>
        <div>
          <div className="parent-wrapper">
            <span className="close-btn glyphicon glyphicon-remove"></span>
            <div className="subscribe-wrapper">
              <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
              <input
                type="email"
                name="email"
                className="subscribe-input"
                placeholder="Your e-mail"
              />
              <div className="submit-btn">SUBMIT</div>
            </div>
          </div>
          {/* <p className="subscribe-message-text">
            By signing up, you agree to our Terms of Service and Privacy Policy.
            You will receive offers from Wimdu and agree that we may share your
            hashed email address with third parties for the purpose of better
            tailoring advertising to your needs.
          </p> */}
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
