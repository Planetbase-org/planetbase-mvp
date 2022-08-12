import React from 'react';
import "./index.css";
import Layout from '../../layouts/login-registration';

function Login() {
    return (
        <Layout>
            <div className='input-container'>
                <input type="text" name='email' id='email' placeholder='Email Address' />
                <input type="password" name='password' id='password' placeholder='Password' />
            </div>
            <p>Forgor Password ?</p>
            <button>Sign In</button>
        </Layout>
    )
}

export default Login