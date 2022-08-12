import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div>
        <h3>Get Started with Planetbase</h3>
        <p>Pricing</p>
        <p>Contact us</p>
        <p>Sign Up</p>
        <p>Log in</p>
      </div>
      <div>
        <h3>Company</h3>
        <p>About us</p>
        <p>Our Mission</p>
        <p>Why Planetbase</p>
        <p>Careers</p>
      </div>
      <div>
        <h3>Resources</h3>
        <p><Link to="/support">Support</Link></p>
        <p>Case studies</p>
        <p>Blog</p>
        <p>What's New</p>
      </div>
      <div>
        <h3>Follows</h3>
        <p>Facebook</p>
        <p>LinkedIn</p>
        <p>Twitter</p>
      </div>
    </div>
  );
}

export default Footer;