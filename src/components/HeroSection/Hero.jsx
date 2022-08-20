import React from 'react';
import { Link } from 'react-router-dom';
import "./Hero.css"

function HeroSection() {
    return (
        <section className='hero-section'>
            <h1>Connecting Corporate sponsors <br />
                & Event Organizers</h1>
            <p>"Reach your target audience, surpass your revenue goals".</p>
            <h4>Who Are <span>You</span>?</h4>
            <div className='hero-btn'>
                <Link to="/organizer"> Event Organizers</Link>
                <Link to="/sponsor">Corporate Sponsor</Link>
            </div>
        </section>
    )
}

export default HeroSection