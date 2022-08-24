import React from 'react';
import { Link } from 'react-router-dom'

import "./Modal.css"

function SponsorModal () {
    return <div>
        <img className="sponsor-image" src="https://res.cloudinary.com/dputu7z0u/image/upload/v1660863670/Rectangle_31_ad96pw.svg" alt="sponsor image" />
        <h4>B2B E-Commerce conference</h4>
        <p className="address">3801 Richardson, California 62639</p>
        <h5>Description</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit voluptatum odit nisi eos sequi sunt magnam! Ab veniam inventore voluptas molestias amet non doloribus sint excepturi, modi, cumque delectus doloremque!</p>
        <p>DATE: 2022/9/12/9am</p>
        <p><Link to="/signup" className="signup-message">Sign Up</Link> for more info</p>
  </div>
}

export default SponsorModal