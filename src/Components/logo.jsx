import React from 'react'
import Logo from '../assets/logo.png'
import '../stye/logo.css'
export default function logo() {
  return (
    <div className='logo'>
        <img src={Logo} alt="" />
    </div>
  )
}
