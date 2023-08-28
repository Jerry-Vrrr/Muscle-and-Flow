import React from 'react'
import Menu from './DropMenu'
import Logo from '../Images/MF Logo.png'
import DropMenu from './DropMenu'


export default function Nav() {

  return (
    <div className='nav'>
      <img className='logo' src={Logo} alt="MF stylized logo" />
      <DropMenu />
    </div>
  )
}
