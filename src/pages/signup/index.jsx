import React from 'react';
import SignUpComponent from '../../components/SignUpComponent/SignUpComponent';
import Layout from '../../layouts/signup-registation';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function SignUp() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
    });

    const { firstname, lastname, email, password, password2 } = formData;
    
    const navigate = useNavigate();

         
    if (isLoading) {
        return ("loading...")
    }

    useEffect(() => { 
        if (isError) {
            toast.error(message)
        };

        if (isSuccess || user) { 
            navigate('/');
        }
     

    },[user, isError, isSuccess, message, navigate])

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    function onSubmit(e) {
        e.preventDefault();
        if (password !== password2) {
            toast.error("Password do not match")
        } else {
            const userData = {
                firstname,
                lastname,
                email,
                password,
                // productUpdates
            }
        }
    }

    return (
        <Layout>
            <SignUpComponent header="Sign up to Planetbase." >
                <p className="signup-header">Let's setup an account for you</p>
            </SignUpComponent>
            <form className='input-container' onSubmit={onSubmit}>
                <input
                    type="text"
                    name='firstname'
                    id='firstname'
                    placeholder='First Name'
                    value={firstname}
                    onChange={onChange}
                />
                <input
                    type="text"
                    name='lastname'
                    id='lastname'
                    placeholder='Last Name'
                    value={lastname}
                    onChange={onChange}
                />
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
                    placeholder='Enter Password'
                    value={password}
                    onChange={onChange}
                />
                <input
                    type="password"
                    name='password2'
                    id='password2'
                    placeholder='Confirm Password'
                    value={password2}
                    onChange={onChange}
                />
                <div className='checkbox-container'>
                    <input
                        type="checkbox"
                        name="productUpdates"
                        id="productUpdates"
                    />
                    <p>Send me product updates and marketing communications from Planetbase</p>
                </div>
                <button
                    type="submit"
                    className="input-button">Sign Up</button>
            </form>
        </Layout>
    )
}

export default SignUp