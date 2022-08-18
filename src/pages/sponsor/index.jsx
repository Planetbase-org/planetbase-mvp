import React from "react";
import { FiSearch } from "react-icons/fi";
import SponsorCard from "../../components/SponsorCard/SponsorCard";
import "./style.css";

function Sponsor({cards, index}) {
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
        <ul>
          <SponsorCard cards={cards} index={index} />
        </ul>
      </div>
    </div>
  );
}

export default Sponsor;
