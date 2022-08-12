import React from 'react';
import { Link } from 'react-router-dom';
import Planetbase from '../../assets/planetbase.svg';
import "./Navbar.css"

function Nav() {
    return (
        <nav>
            <Link to="/">
                <div  className="nav">
                    <img src={Planetbase} alt="planetbase" />
                    <p>PLANETBASE</p>
                </div>
            </Link>
        </nav>
    )
}

export default Nav