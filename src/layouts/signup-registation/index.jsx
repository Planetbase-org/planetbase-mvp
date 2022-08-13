import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../../components/NavBar/Nav'

function Layout({ children }) {
    return (
        <div className="layout-container">
            <Nav />
            {children}
        </div>

    )
}

export default Layout;