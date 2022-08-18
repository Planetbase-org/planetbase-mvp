import React from "react";
import { FiSearch } from "react-icons/fi";
import "./style.css";

function Sponsor() {
  return (
    <div>
      <h1>Discover Events Where Your Target Audience Is</h1>
      <div className="search-events sponsorship-search">
        <span>
          <FiSearch />
        </span>
        <input type="text" placeholder="Search for your event" />
      </div>
      <div>
        <a>Listed Events</a>
      </div>
      <div className="sponsorships">
        <div class="sponsorships-layout">
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
        <div class="sponsorships-layout">
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
        <div class="sponsorships-layout">
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
        <div class="sponsorships-layout">
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
