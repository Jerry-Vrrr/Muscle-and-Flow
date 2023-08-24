import React from 'react'
import Main from '../Images/Main.png'

export default function MainImage() {
  return (
    <div className='main'>
      <img className='main-image' src={Main} alt="couple deadlifting" />
      <button class="btn">TRAINING PROGRAMS</button>
      <button class="btn2">SIGN UP NOW!</button>
    </div>
  )
}
