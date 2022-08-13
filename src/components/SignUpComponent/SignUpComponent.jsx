import React from 'react';
import "./SignUpComponent.css"
import LinkedIn from "./../../assets/linkedin.svg";
import Google from "./../../assets/google.svg";
import Facebook from "./../../assets/facebook.svg";

const SignUpComponent = ({ header, children}) => {
    return (
        <div className='signup'>
            <h1>{header}</h1>
            
            {children}
            <div className="signup-section">
                <div className='signup-link'>
                    <img src={Facebook} alt="facebook" />
                    <p>Facebook</p>
                </div>
                <div className='signup-link'>
                    <img src={Google} alt="google" />
                    <p>Google</p>
                </div>
                <div className='signup-link'>
                    <img src={LinkedIn} alt="linkedin" />
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    )
}

export default SignUpComponent