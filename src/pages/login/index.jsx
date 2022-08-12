import React from 'react'
import { Link } from 'react-router-dom'
import SignUpComponent from '../../components/SignUpComponent/SignUpComponent'
import Layout from '../../layouts/login-registration'

function Login() {
    return (
        <Layout>
            <SignUpComponent
                header="Welcome back!"
            >
                <p className="signup-header">Sign in to access your account. <br />
                Not registered? <Link to="/signup" className="signup-message">Create an account</Link></p>
            </SignUpComponent>
        </Layout>
    )
}

export default Login