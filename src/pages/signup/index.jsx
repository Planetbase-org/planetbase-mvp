import React from 'react';
import Layout from '../../layouts/signup-registation';

function SignUp() {
    return (
        <Layout>
            <div className='input-container'>
                <input type="text" name='fname' id='fname' placeholder='First Name' />
                <input type="text" name='lname' id='lname' placeholder='Last Name' />
                <input type="email" name='email' id='email' placeholder='Email Address' />
                <input type="password" name='password' id='password' placeholder='Password' />
                <div className='checkbox-container'>
                    <input type="checkbox" name="checkbox" id="checkbox"/>
                    <p>Send me product updates and marketing communications from Planetbase</p>
                </div>
                <button type="submit" className="input-button">Sign In</button>
            </div>
        </Layout>
    )
}

export default SignUp