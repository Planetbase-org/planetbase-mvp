import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../../components/NavBar/Nav'
import './../../sponsor/style.css'

function SponsorPage () {
  return (
    <>
      <Nav />
      <h2 className="page-header">Surpass Your Marketing Goals</h2>
      <form className='sponsorship-form'>
        <div className='sponsorship-form-control'>
          <div>
            <p>Company Name</p>
            <input type='text' />
          </div>
          <div>
            <p>Company Email</p>
            <input type='email' />
          </div>
        </div>
        <div className='sponsorship-form-control'>
          <div>
            <p>Company Phone</p>
            <input type='tel' />
          </div><br />
          <div>
            <p>Company Address</p>
            <textarea type='text' rows='10' />
          </div>
        </div>
      </form>
      <div className='sponsor-login-btn'>
        <p>
          <Link to='/login'>Login </Link>
          if you've already registered
        </p>
        <Link to='/sponsor-bid'>
          <button className='btn-primary'>
            <span>Save and continue</span>
          </button>
        </Link>
      </div>
    </>
  )
}

export default SponsorPage
