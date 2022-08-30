import React from "react";
import Nav from "../../../components/NavBar/Nav";
import Navbar from "../../../components/NavBar/Navbar";
import SponsoredECard from "../../../components/SponsoredEvent/sponsoredEventCard";
import EventLayout from "../../../layouts/events-layout";

function SponsoredEvents() {
    return (
            <EventLayout>
            <h4>Sponsored Events</h4>
            <div>
                <SponsoredECard/>
            </div>
            </EventLayout>
    )
}

export default SponsoredEvents;
