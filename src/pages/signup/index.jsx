import React from 'react';
import SignUpComponent from '../../components/SignUpComponent/SignUpComponent';
import Layout from '../../layouts/signup-registation';
import { useState, useEffect } from "react";

function SignUp() {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        password2: '',
    })

    return (
        <Layout>
            <SignUpComponent header="Sign up to Planetbase." >
                <p className="signup-header">Let's setup an account for you</p>
            </SignUpComponent>
            <div className='input-container'>
                <input type="text" name='fname' id='fname' placeholder='First Name' />
                <input type="text" name='lname' id='lname' placeholder='Last Name' />
                <input type="email" name='email' id='email' placeholder='Email Address' />
                <input type="password" name='password' id='password' placeholder='Password' />
                <input type="password" name='password2' id='password2' placeholder='Confirm Password' />
                <div className='checkbox-container'>
                    <input type="checkbox" name="checkbox" id="checkbox"/>
                    <p>Send me product updates and marketing communications from Planetbase</p>
                </div>
                <button type="submit" className="input-button">Sign Up</button>
            </div>
        </Layout>
    )
}

export default SignUp