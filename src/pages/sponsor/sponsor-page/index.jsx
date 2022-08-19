import React from 'react'
import { Link } from 'react-router-dom';
import Nav from "../../../components/NavBar/Nav";
import "./../../sponsor/style.css";


function SponsorPage() {
  return (
      <>
          <Nav />  
          <h4>Surpass Your Marketing Goals</h4>
          <form className="sponsorship-form">
              <div>
                  <div>
                      <p>Company Name</p>
                      <input type="text" />
                  </div>
                  <div>
                      <p>Company Email</p>
                      <input type="text" />
                  </div>
              </div>
              <div>
                  <div>
                      <p>Company Phone</p>
                      <input type="text" />
                  </div>
                  <div>
                      <p>Company Address</p>
                      <input type="text" />
                  </div>
              </div>
          </form>   
          <div className="sponsor-login-btn">
              <p><Link to="/login">Login</Link>
              if you've already registered
              </p>
              <button>
                  <span>Save and continue</span>
              </button>
          </div>
    </>
  )
}

export default SponsorPage