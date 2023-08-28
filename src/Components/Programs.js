import React from 'react'
import Strength from './Strength'
import Intensity from './Intensity'

export default function Programs({setIsOpen,openModal}) {
  return (
    <div className='programs'>
        <Strength setIsOpen={setIsOpen} openModal={openModal}/>
        <Intensity setIsOpen={setIsOpen} openModal={openModal}/>
    </div>
  )
}
