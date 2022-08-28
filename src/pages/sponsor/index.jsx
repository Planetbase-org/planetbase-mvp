import React from 'react'
import { FiSearch } from 'react-icons/fi'
import SponsorCard from '../../components/SponsorCard/SponsorCard'
import './style.css'
import Navbar from '../../components/NavBar/Navbar'
import { Link } from 'react-router-dom'

function Sponsor ({ cards, index }) {
  return (
    <>
      <Navbar />
      <div class='sponsors'>
        <h2>Discover Events Where Your Target Audience Is</h2>
        <div className='search-events sponsorship-search'>
          <span>
            <FiSearch />
          </span>
          <input type='text' placeholder='Search for your event' />
        </div>
        <div>
          {' '}
          <Link to='/sponsor-page'>
            <button className='btn-primary'>
              <span>Listed Events</span>
            </button>
          </Link>
        </div><br />
        <SponsorCard cards={cards} index={index} />
        <div className='sponsor-btn-continue'>
          <button className='btn-primary' type="submit">
            <span>Continue</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sponsor
