import React from 'react'
import bgImage from '../../assets/Place Your Image Her.png'
import design from '../../assets/Place Your Design He.png'
import design2 from '../../assets/Place Your Design He (1).png'

function Hero() {
  return (
    <div 
    style={{backgroundImage: `url(${bgImage})`}}
    className='relative flex items-center h-screen w-full bg-cover object-cover'>
      <div className=' absolute z-[] w-40 -top-20 right-[20rem]'>
        <img src={design} alt="" />
      </div>
      <div className=' absolute z-[] w-[25rem] -bottom-28 right-10'>
        <img src={design2} alt="" />
      </div>

      <div className='content p-10 mt-40 ml-20'>
        <h1 className='text-[4rem] uppercase font-bold leading-[3rem] tracking-tighter text-orange-500 '>
          enjoy the <br /> beauty of <br /> nature!
        </h1>

        <p className='w-60 mt-10 text-[1rem] font-semibold '>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore error quidem consectetur dolorum 
        </p>

        <button className='text-[1.5rem] bg-orange-500 py-2 px-5 rounded-md flex items-center justify-center uppercase font-semibold tracking-tight text-white mt-10'>
          get started
        </button>
      </div>
    </div>
  )
}

export default Hero
