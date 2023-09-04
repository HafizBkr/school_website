import React from 'react'
import Navbar from '../Components/Navbar'
import logo from '../assets/logo.png'
import '../stye/Navbar-pages.css'

export default function Navbarpages() {
  return (
    <div>
    <div className='logo-pages'>
       <img src={logo} alt="" />
      </div>
  <div className='navbar-pages'>
      < Navbar  />
      <div className='search-icon' style={{display:'flex'}}>
      <svg width="30" viewBox="0 0 23 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="icon--search-mag search-box__mag">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#D51118" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </svg>
      </div>
    
  </div>
</div>
  )
}
