import React from "react";
import { Link } from "react-router-dom";
import SponsoredECard from "../../../components/SponsoredEvent/sponsoredEventCard";
import EventLayout from "../../../layouts/events-layout";

function SponsoredEvents() {
  return (
    <EventLayout>
      <div className="event-container">
        <h2>Sponsored Events</h2>
        <div>
          <a href="/sponsored-events">
            <button class="btn-primary">
              <span>Selected Events</span>
            </button>
          </a>
          <SponsoredECard />
        </div>
      </div>
    </EventLayout>
  );
}

export default SponsoredEvents;
