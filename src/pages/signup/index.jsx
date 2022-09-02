import React from 'react';
import SignUpComponent from '../../components/SignUpComponent/SignUpComponent';
import Layout from '../../layouts/signup-registation';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function SignUp() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [productUpdates, setProductUpdates] = useState(false);
    
    const navigate = useNavigate();

         
    // useEffect(() => { 
    //     // if (isError) {
    //     //     toast.error(message)
    //     // };

    //     // if (isSuccess || user) { 
    //     //     navigate('/');
    //     // }
     

    // },[isSuccess, message, navigate])

    // function onChange(e) {
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.value,
    //     }))
    // };

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
                productUpdates
            }
            return userData;
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
                    onChange={(e)=> setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    name='lastname'
                    id='lastname'
                    placeholder='Last Name'
                    value={lastname}
                    onChange={(e)=> setLastName(e.target.value)}
                />
                <input
                    type="email"
                    name='email'
                    id='email'
                    placeholder='Email Address'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name='password'
                    id='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e)=> setPassword((e.target.value))}
                />
                <input
                    type="password"
                    name='password2'
                    id='password2'
                    placeholder='Confirm Password'
                    value={password2}
                    onChange={(e)=> setPassword2(e.target.value)}
                />
                <div className='checkbox-container'>
                    <input
                        type="checkbox"
                        name="productUpdates"
                        id="productUpdates"
                        value={productUpdates}
                        onChange={(e)=> setProductUpdates(e.target.value)}
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