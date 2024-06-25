import React from 'react'
import Card from './Card'
import design2 from '../../assets/Place Your Design He (2).png'
import design3 from '../../assets/Place Your Design He (3).png'
import design4 from '../../assets/Place Your Design He (4).png'


function About() {
  return (
    <div className='w-full'>
        <div className='w-full italic text-center mt-[8rem]'>
         <h1 className='uppercase text-center text-[2.5rem] font-bold tracking-tight'>it's time start yours adventures</h1>
         <p className='tracking-tight text-[1.1rem] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit</p>
        </div>

         <div className='container w-full p-10 flex items-center justify-center gap-28 m-auto'>
            <Card image={design2} title="in every condition" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit"  />
            <Card image={design3} title="professional" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit"  />
            <Card image={design4} title="expert team" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit"  />
         </div>   


    </div>
  )
}
 
export default About
