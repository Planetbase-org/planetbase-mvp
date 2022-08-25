import React from 'react';
import Layout from '../../layouts/login-registration';
import { useState, useEffect } from "react";

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const {email, password} = formData;

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    function onSubmit(e) {
        e.preventDefault();
    }
    return (
        <Layout>
            <form className='input-container' onSubmit={onSubmit}>
                <input
                    type="email"
                    name='email'
                    id='email'
                    placeholder='Email Address'
                    value={email}
                    onChange={onChange}
                />
                <input
                    type="password"
                    name='password'
                    id='password'
                    placeholder='Password'
                    onAbort={onChange}
                />
                <p>Forgot Password ?</p>
                <button
                    type="submit"
                    className="input-button">Sign In</button>
            </form>
        </Layout>
    )
}

export default Login