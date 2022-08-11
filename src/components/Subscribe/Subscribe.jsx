import React from 'react';
import Planetbase from '../../assets/planetbase.svg'
import "./Subscribe.css"

function Subscribe() {
  return (
    <div className="subscribe">
      <p>
        <img src={Planetbase} alt="" />
      </p>
      <div>
        <h4>Moving your events online really opens up the esteem of supporting it </h4>
        <p>Become a subscriber and receive great tips on eventl regulation updates sent to your inbox!</p>
      </div>
      <div>
        <form>
          <input type="text" placeholder='Enter email address' />
          <button>Subscribe</button>
        </form>
        <p>By signing up, you agree to our Terms of Service and Privacy Policy. You will receive offers from Wimdu and agree that we may share your hashed email address with third parties for the purpose of better tailoring advertising to your needs.</p>
      </div>
    </div>
  )
}

export default Subscribe