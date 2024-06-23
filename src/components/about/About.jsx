import React from 'react'
import Card from './Card'

function About() {
  return (
    <div className='w-full h-screen'>
        <div className='text-center mt-[8rem]'>
         <h1 className='uppercase text-center text-[2rem] font-bold tracking-tight'>it's time start yours adventures</h1>
         <p className='tracking-tight text-[1.1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit</p>
        </div>

         <div className='container w-full p-10'>
            <Card title="zameer" text="asdjldkajsdlkasjd"  />
         </div>   


    </div>
  )
}
 
export default About
