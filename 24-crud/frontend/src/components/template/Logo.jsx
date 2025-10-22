import './Logo.css'
import LogoIMG from '../../assets/images/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <aside className='logo'>
      <Link to="/" className="logo">
        <img src={LogoIMG} alt="Logo" srcset="" />
      </Link>
    </aside>
  )
}
