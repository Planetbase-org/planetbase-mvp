import React from 'react';
import Planetbase from '../../assets/planetbase.svg'
import "./Subscribe.css"

function Subscribe() {
  return (
    <section className="subscribe">
      <div className="subscribe-header">
        <img src={Planetbase} alt="" />
        <h4>PLANETBASE</h4>
      </div>
      <div className="subscribe-message">
        <div>
          <h4>Moving your events online really opens up the esteem of supporting it </h4>
          <p>Become a subscriber and receive great tips on eventl regulation updates sent to your inbox!</p>
        </div>
        <div>
          <form>
            <input type="text" placeholder='Enter email address' className='subscribe-email-input'/>
            <button className='subscribe-btn'>Subscribe</button>
          </form>
          <p className='subscribe-message-text'>By signing up, you agree to our Terms of Service and Privacy Policy. You will receive offers from Wimdu and agree that we may share your hashed email address with third parties for the purpose of better tailoring advertising to your needs.</p>
        </div>
      </div>
    </section>
  )
}

export default Subscribe