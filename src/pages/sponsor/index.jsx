import React from 'react'
import { FiSearch } from 'react-icons/fi';
import "./style.css"

function Sponsor() {
  return (
      <div>
      <h1>Discover Events Where Your Target Audience Is</h1>
      <div className="search-events sponsorship-search">
          <span>
            <FiSearch />
          </span>
          <input type="text" placeholder="Search for your event" />
        </div>
    </div>
  )
}

export default Sponsor