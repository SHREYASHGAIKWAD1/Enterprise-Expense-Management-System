import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav className='navbar-container'>
                <img src={assets.Applogo} className='Applogo' alt="" />
                <ul className='navbar-list'>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
                <ul className='search-list'> 
                  <div className='box'>
                  <img src={assets.search_logo} className='search'></img>
                  </div>
                  <li>Login</li>
                </ul>
          
        </nav>
    </div>
  )
}

export default Navbar;