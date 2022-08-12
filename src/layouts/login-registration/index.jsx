import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../../components/NavBar/Nav'
import SignUpComponent from '../../components/SignUpComponent/SignUpComponent';

function Layout() {
    return (
        <>
            <Nav />
            <SignUpComponent header="Welcome back!" >
                <p className="signup-header">Sign in to access your account. <br />
                    Not registered?.
                    <Link to="/signup" className="signup-message">Create an account.</Link>
                </p>
            </SignUpComponent>
        </>

    )
}

export default Layout;