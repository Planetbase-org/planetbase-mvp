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
        <h1>Discover Events Where Your Target Audience Is</h1>
        <div className='search-events sponsorship-search'>
          <span>
            <FiSearch />
          </span>
          <input type='text' placeholder='Search for your event' />
        </div>
        <Link to='/'>
          <button className='sponsor-btn'>Listed Events</button>
        </Link>
        <SponsorCard cards={cards} index={index} />
        <div className='sponsor-btn-continue'>
          <button className='sponsor-btn-next'>Continue</button>
        </div>
      </div>
    </>
  )
}

export default Sponsor
