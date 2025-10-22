import './Logo.css'
import LogoIMG from '../../assets/images/logo.png'
import React from 'react'

export default function Logo() {
  return (
    <aside className='logo'>
      <a href="/" className="logo">
        <img src={LogoIMG} alt="Logo" srcset="" />
      </a>
    </aside>
  )
}
