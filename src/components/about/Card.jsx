import React from 'react'

function Card({image, title, text }) {
  return (
    <div className='py-5 px-5 flex items-center justify-center flex-col text-center w-[15rem]'>
    <div className='w-[5rem] '><img className='w-full' src={image} alt="" /></div>
      <h2 className=' mt-10 text-[1rem] uppercase tracking-tighter text-[#FF705B] italic font-extrabold'>{title}</h2>
      <p className='mt-5 font-medium'>{text}</p>
    </div>
  )
}

export default Card
