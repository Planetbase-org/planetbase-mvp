import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../../components/NavBar/Nav'
import SignUpComponent from '../../components/SignUpComponent/SignUpComponent';

function Layout({ children }) {
    return (
        <div className="layout-container">
            <Nav />
            <SignUpComponent header="Welcome back!" >
                <p className="signup-header">Let’s setup an account for you</p>
            </SignUpComponent>
            {children}
        </div>

    )
}

export default Layout;