import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../../components/NavBar/Nav'

function SponsorBid () {
  return (
    <>
      <Nav />
      <form>
        <div>
          <p>From</p>
          <div>
            <input type='text' placeholder='Your Name' />
            <input type='email' placeholder='Your Email Address' />
          </div>
        </div>
        <div>
          <div>
            <p>To</p>
            <input type='text' placeholder='Customer Name' />
          </div>
          <div>
              <p>Bid Date</p>
              <input type='date' />
            </div>
        </div>
        <div>
        <div>
            <p>Description</p>
            <textarea type='text' rows='10' />
          </div>
        </div>
        <div>
            N <input type="number"/>
        </div>
      <Link to='/sponsor-bid'>
          <button>
            <span>Save and continue</span>
          </button>
        </Link>
      </form>
    </>
  )
}

export default SponsorBid
