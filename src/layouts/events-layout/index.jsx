import React from 'react';
import PlanetBase from '../../assets/planetbase.svg';
import {AiFillMessage} from 'react-icons/ai'

function EventLayout({children}) {
    return (
        <div className="events-layout">
            <div>
                <img src={PlanetBase} alt="planet" />
                <p>PLANETBASE</p>
            </div>
            <div>
                {AiFillMessage}
            </div>
        </div>
    )
}

export default EventLayout