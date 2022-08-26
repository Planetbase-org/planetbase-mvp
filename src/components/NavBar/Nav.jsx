import React from 'react';
import { Link } from 'react-router-dom';
import Planetbase from '../../assets/planetbase.svg';
import "./Navbar.css"

function Nav() {
    return (
        <nav>
                <div  className="nav">
            <Link to="/" className="navbar-brand">
                    <img src={Planetbase} alt="planetbase" />
                    <p>PLANETBASE</p>
            </Link>
                </div>
        </nav>
    )
}

export default Nav