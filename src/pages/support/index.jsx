import React from "react";
import "./style.css";
import Layout from "../../layouts/landing-section";
import HelpChat from "../../assets/help-chat.svg";
import { Link } from "react-router-dom";

function Support() {
  const token = localStorage.getItem("token");
  return (
    <Layout>
      <div className="support-section">
        <div>
          <h1>We're here to help!</h1>
          <p>contact our 24/7 customer support team.</p>
          <span>
            <a href="mailto: planetbase@gmail.com">planetbase@gmail.com</a>
          </span>
        </div>
        <img src={HelpChat} alt="helpchat" />
      </div>
      <div className="support-signup">
        {token ?  null: (
          <h1>
            Not a Planetbase organizer yet?
            <br />
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
            to create an event
          </h1>
        )}
      </div>
    </Layout>
  );
}

export default Support;
