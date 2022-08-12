import React from 'react';
import "./style.css"
import Layout from '../../layouts/landing-section';
import HelpChat from '../../assets/help-chat.svg';
import { Link } from 'react-router-dom';

function Support() {
    return (
        <Layout>
            <div className='support-section'>
                <div>
                    <h1>We're here to help!</h1>
                    <p>contact our 24/7 customer support team.</p>
                    <span>planetbase@gmail.com</span>
                </div>
                    <img src={HelpChat} alt="helpchat" />
            </div>
            <div className='support-signup'>
                <h1>
                    Not a Planetbase organizer yet?
                    Sign up to create event
                    <Link to="/signup" className="btn btn-primary">Sign up</Link>
                </h1>
            </div>
        </Layout>
    )
}

export default Support