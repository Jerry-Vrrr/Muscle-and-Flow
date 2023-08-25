import React from 'react'
import Logo from '../Images/MF Logo.png'

export default function Intensity({setIsOpen,openModal}) {
  return (
    <div className='program'>
        <img className='logo' src={Logo} alt="MF stylized logo" />
        <h1 className='banner'>INTENSITY</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p>
        <h2>This Program is For You if...</h2>
        <ul>
            <li>reason one is this</li>
            <li>reason two also</li>
            <li>and reason three</li>
            <li>fourth reason as well</li>
        </ul>
        <button class="btn2" onClick={openModal}>
        SIGN UP NOW!
      </button>
        </div>
  )
}
