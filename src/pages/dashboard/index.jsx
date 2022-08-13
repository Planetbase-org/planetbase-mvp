import React from 'react'
import EventLayout from '../../layouts/events-layout'
import { FiSearch } from 'react-icons/all'
import './style.css'
import { Link } from 'react-router-dom'

function EventProfile() {

    return (
        <EventLayout>
            <div className="event-container">
                <h2>Eleanor's Organization Events</h2>
                <div className="search-events">
                    <span><FiSearch /></span>
                    <input type="text" placeholder='Search for your event' />
                </div>
                <div className='event-rows'>
                    <div>
                        <h3>
                            Events
                        </h3>
                        <div>
                            No Event
                        </div>
                    </div>
                    <div>
                        <h3>
                            Date
                        </h3>
                        <div>
                            No Event
                        </div>
                    </div>
                    <div>
                        <h3>
                            Status
                        </h3>
                        <div>
                            No Event
                        </div>
                    </div>
                </div>
                <div className="event-btn">
                    <Link to="/events">
                        Create Event
                    </Link>
                </div>
            </div>
        </EventLayout>
    )
}

export default EventProfile