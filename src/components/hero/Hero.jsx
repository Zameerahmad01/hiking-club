import React from 'react'
import bgImage from '../../assets/Place Your Image Her.png'
import design from '../../assets/Place Your Design He.png'

function Hero() {
  return (
    <div 
    style={{backgroundImage: `url(${bgImage})`}}
    className='relative h-screen w-full bg-cover object-cover'>
      <div className=' absolute z-[] w-40 -top-20 right-[25rem]'>
        <img src={design} alt="" />
      </div>
    </div>
  )
}

export default Hero
