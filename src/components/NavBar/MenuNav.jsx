import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import Planetbase from '../../assets/planetbase.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from "../../redux/auth/authSlice"

function MenuNav () {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user)

  const onLogout = () => {
    dispatch(logout()); 
    dispatch(reset());
    navigate('/signup')
  }
  return (
    <nav className='navigation'>
      <Link to='/' className='brand-name'>
        <img src={Planetbase} alt='planetbase' />
      </Link>
      <button
        className='hamburger'
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='white'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul>
          <li>
            <Link to='/products' activeclassname='active'>
              Product
            </Link>
          </li>
          <li>
            <Link to='/solutions' activeclassname='active'>
              Solutions
            </Link>
          </li>
          <li>
            <Link to='#' activeclassname='active'>
              Resources
            </Link>
          </li>
          <li>
            <Link to='#' activeclassname='active'>
              Company
            </Link>
          </li>
          <div>
            <li className='login'>
              {user ? (
                <Link to='/login' activeclassname='active' onClick={onLogout}>
                Logout
                </Link>
              ) : (
                <Link to='/login' activeclassname='active'>
                Login
                </Link>
              )}
            </li>
            <li>
              <button className='loginBtnMobile'>Create Events</button>
            </li>
          </div>
        </ul>
        <div className='createEvents'>
          <li>
            {user ? (
              <Link to='/login' activeclassname='active'  onClick={onLogout}>
              Logout
            </Link>
            ) : (
              <Link to='/login' activeclassname='active'>
              Login
            </Link>
            )}
          </li>
          <Link to="/create-event">
            <button className='loginButton' type="button">Create Events</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default MenuNav
