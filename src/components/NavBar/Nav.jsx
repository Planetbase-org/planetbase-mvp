import React from 'react';
import Planetbase from '../../assets/planetbase.svg';
import "./Navbar.css"

function Nav() {
    return (
        <nav className="nav">
            <img src={Planetbase} alt="planetbase" />
            <p>PLANETBASE</p>
        </nav>
    )
}

export default Nav