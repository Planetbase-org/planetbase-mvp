import React from 'react'
import { Link } from 'react-router-dom'
import EventLayout from '../../layouts/events-layout'

function EditEvent() {
    return (
        <EventLayout>
            <h1>List Your Upcoming Event</h1>
            <form class="event-form">
                <div className="form-control">
                    <div>
                        <p>Event title</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Event Organizer/host</p>
                        <input type="text" />
                    </div>
                </div>
                <div className="form-control">
                    <div>
                        <p>Event type/category</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Event tags</p>
                        <input type="text" />
                    </div>
                </div>
                <div className="form-control">
                    <div>
                        <p>Expected Number of guests</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Scheduled data</p>
                        <input type="date" />
                    </div>
                </div>
                <div className="form-checkbox">
                    <div>
                        <input type="checkbox" />
                        <p>Online</p>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <p>Physical</p>
                    </div>
                </div>
                <div>
                    <h1>Event Description</h1>
                    <textarea name="" id="" cols="30" rows="10">
                    </textarea>
                </div>
                <div>
                    <h1>Sponsorship Package</h1>
                    <textarea name="" id="" cols="30" rows="10">
                    </textarea>
                    <p>Price</p>
                    <input type="text" />
                </div>
                <div className="form-upload">
                    <input type="file" name="file" id="" />
                </div>
                <Link>
                    <span>Save and continue</span>
                </Link>
            </form>
        </EventLayout>
    )
}

export default EditEvent