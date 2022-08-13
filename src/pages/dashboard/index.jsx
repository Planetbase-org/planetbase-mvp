import React from 'react'
import EventLayout from '../../layouts/events-layout'
import {FiSearch} from 'react-icons/all'

function EventProfile() {
    
    return (
        <EventLayout>
            <div className="event-container">
                <h2>Eleanor's Organization Events</h2>
                <div>
                    <FiSearch/>
                </div>
            </div>
        </EventLayout>
    )
}

export default EventProfile