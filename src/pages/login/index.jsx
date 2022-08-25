import React from 'react';
import Layout from '../../layouts/login-registration';
import { useState, useEffect } from "react";

function Login() {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        password2: '',
        checkbox: false,
    });

    const {fname,lname,email, password, password2, checkbox} = formData;

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
            <div className='input-container'>
                <input type="email" name='email' id='email' placeholder='Email Address' />
                <input type="password" name='password' id='password' placeholder='Password' />
                <p>Forgot Password ?</p>
                <button type="submit" className="input-button">Sign In</button>
            </div>
        </Layout>
    )
}

export default Login