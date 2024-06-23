import React from 'react'

function Card({image, title, text }) {
  return (
    <div className='p-10'>
      <img src={image} alt="" />
      <h2 className=''>{title}</h2>
      <p className=''>{text}</p>
    </div>
  )
}

export default Card
