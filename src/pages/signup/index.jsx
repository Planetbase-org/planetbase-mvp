import React from 'react';
import SignUpComponent from '../../components/SignUpComponent/SignUpComponent';
import Layout from '../../layouts/signup-registation';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { register, reset} from "../../redux/auth/authSlice"
import { useDispatch, useSelector } from 'react-redux';


function SignUp() {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        password2: '',
        checkbox: false,
    });

    const { fname, lname, email, password, password2, checkbox } = formData;
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => { 
        if (isError) {
            toast.error(message)
        };

        if (isSuccess) { 
            navigate('/');
        }
        dispatch(reset());

    },[user, isError, isSuccess, message, navigate, dispatch])

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
                fname,
                lname,
                email,
                password,
            }
            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return ("loading")
    }
    return (
        <Layout>
            <SignUpComponent header="Sign up to Planetbase." >
                <p className="signup-header">Let's setup an account for you</p>
            </SignUpComponent>
            <form className='input-container' onSubmit={onSubmit}>
                <input
                    type="text"
                    name='fname'
                    id='fname'
                    placeholder='First Name'
                    value={fname}
                    onChange={onChange}
                />
                <input
                    type="text"
                    name='lname'
                    id='lname'
                    placeholder='Last Name'
                    value={lname}
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
                        name="checkbox"
                        id="checkbox"
                        value={checkbox}
                        onChange={onChange}
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