import React from 'react'
import SignUpComponent from '../../components/SignUpComponent/SignUpComponent'
import Layout from '../../layouts/login-registration'

function Login() {
    return (
        <Layout>
            <SignUpComponent
                header="Welcome back!"
                text="Sign in to access your account.
                Not registered? Create an account"
            />
        </Layout>
    )
}

export default Login