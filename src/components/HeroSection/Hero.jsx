import React from 'react';
import { Link } from 'react-router-dom';
import "./Hero.css"
import mixpanel from "../../utils/config.js"

function HeroSection() {
    const OrganizerClick = () => {
        mixpanel.track("Clicked on Organizer Button")
    }
    const SponsorClick = () => {
        mixpanel.track("Clicked on Sponsor Button")
    }
    return (
        <section className='hero-section'>
            <h1>Connecting Corporate sponsors <br />
                & Event Organizers</h1>
            <p>Reach your target audience, surpass your revenue goals.</p>
            <h4>Who Are <span>You</span>?</h4>
            <div className='hero-btn'>

                <Link 
                to="/organizer"
                onClick={OrganizerClick}
                > Event Organizer</Link>
                <Link 
                to="/sponsor"
                 onClick={SponsorClick}
                 >Corporate Sponsor</Link>
            </div>
        </section>
    )
}

export default HeroSection;