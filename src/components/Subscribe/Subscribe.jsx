import React from "react";
import PBlogo from "../../assets/planetbase.png";
import "./Subscribe.css";

function Subscribe() {
  return (
    <section className="subscribe">
        <div>
          <div className="subscribe-header">
            <img src={PBlogo} alt="planetbase logo" />
          </div>
          <h4>
            Moving your events online really opens up the esteem of supporting
            it
          </h4>
          <p>
            Become a subscriber and become the first to receive Information.
          </p>
        </div>
        <div>
          <div class="parent-wrapper">
            <span></span>
            <div class="subscribe-wrapper">
              <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
              <input
                type="email"
                name="email"
                class="subscribe-input"
                placeholder="Enter Your Email Address"
              />
              <div class="submit-btn">SUBMIT</div>
            </div>
          </div>

          <h6 className="policy">
            By subscribing to our news letter, you have agreed to our Terms of
            Service and Privacy Policy.
          </h6>
        </div>
    </section>
  );
}

export default Subscribe;
