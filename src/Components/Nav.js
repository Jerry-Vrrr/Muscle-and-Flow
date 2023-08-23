import React from 'react'
import Menu from './Menu'
import Logo from '../Images/MF Logo.png'
import MenuIcon from '../Images/MFmenu.png'


export default function Nav() {
  return (
    <div className='nav'>
      <img className='logo' src={Logo} alt="MF stylized logo" />
      <img className='menu' src={MenuIcon} alt="MF menu" />
    </div>
  )
}
