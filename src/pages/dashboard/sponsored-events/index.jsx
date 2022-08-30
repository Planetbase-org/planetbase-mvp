import React from "react";
import SponsoredECard from "../../../components/SponsoredEvent/sponsoredEventCard";
import EventLayout from "../../../layouts/events-layout";

function SponsoredEvents() {
  return (
    <EventLayout>
      <div className="event-container">
        <h2>Sponsored Events</h2>
      <div>
        <SponsoredECard />
      </div>
      </div>
    </EventLayout>
  );
}

export default SponsoredEvents;
