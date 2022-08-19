import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../../components/NavBar/Nav'
import '../style.css'

function SponsorBid () {
  return (
    <>
      <Nav />
      <form className='sponsor-form'>
        <div className='sponsor-bid-from'>
          <p className='form-text'>From</p>
          <div>
            <input type='text' placeholder='Your Name' />
            <input type='email' placeholder='Your Email Address' />
          </div>
        </div>
        <div className='sponsor-bid-control'>
          <div>
            <p className='form-text'>To</p>
            <input type='text' placeholder='Customer Name' />
          </div>
          <div>
            <p className='form-text'>Bid Date</p>
            <input type='date' />
          </div>
        </div>
        <div className='sponsor-bid-control'>
          <div>
            <p className='bg-primary'>Description</p>
            <textarea type='text' rows='10' />
          </div>
          <div>
            <p className='bg-primary'>Amount</p>
            N <input type='number' />
          </div>
        </div>
        <div className="sponsor-btn">
          <Link to='/sponsor-bid'>
            <button className='btn-primary'>
              <span>Save and continue</span>
            </button>
          </Link>
        </div>
      </form>
    </>
  )
}

export default SponsorBid
