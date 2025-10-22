import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default function Nav() {
  const navLinks = [
    {
      path: '/', // This is what Link uses
      icon: 'home',
      label: 'Início'
    },
    {
      path: '/users',
      icon: 'users',
      label: 'Usuários'
    }
  ];
  return (
    <aside className="menu-area">
      <nav className="menu">
        {navLinks.map(menu => (
          <NavItem path={menu.path} icon={menu.icon} label={menu.label} />
        ))}
       
      </nav>
    </aside>
  )
}
