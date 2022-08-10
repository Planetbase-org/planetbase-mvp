import React from 'react';
import "./Hero.css"

function HeroSection() {
    return (
        <div className='hero-section'>
            <h1>Welcome To Planetbase</h1>
            <p>A Place where events are created and sponsors can come <br /> in to Market their brands/products.<a href="#">Learn more</a></p>
            <h4>Who Are You?</h4>
            <button>SPONSOR</button>
            <button>ORGANISER</button>
        </div>
    )
}

export default HeroSection