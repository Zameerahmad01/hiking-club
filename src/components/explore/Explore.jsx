import React from 'react'
import bgimage from '../../assets/Place Your Image Her (1).png'

function Explore() {
  return (
    <div
     style={{backgroundImage: `url(${bgimage})`}}
     className='w-full h-screen bg-left bg-auto bg-no-repeat relative'>
      <div className='flex flex-col items-center justify-center mt-10'>
        <h1 className='text-[3rem] text-center text-[#FF705B] italic tracking-tighter font-medium'>EXPLORE THE BEST TRIPS</h1>
        <p className='text-[1.7rem] italic uppercase tracking-tighter'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>

      <div className='container w-[60%] absolute right-0 pt-20'>
        <div className='p-5 flex items-center justify-center'>
          <div className='w-[15rem] p-5 '>
            <h1 className='text-[#FF705B] italic font-extrabold'>HIKKING EXPEDITION</h1>
            <p className='font-medium mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem asperiores perferendis harum eius ea ducimus </p>
          </div>
          <div>
            <button className='text-[1.3rem] bg-[#FF705B] py-2 px-5 rounded-md flex items-center justify-center uppercase font-semibold tracking-tight text-white -mt-10 ml-20'>
             read more
            </button>
          </div>
        </div>

        <div className='p-5 flex items-center justify-center'>
        <div>
            <button className='text-[1.3rem] bg-[#FF705B] py-2 px-5 rounded-md flex items-center justify-center uppercase font-semibold tracking-tight text-white -mt-10 ml-20'>
             read more
            </button>
          </div>
          <div className='w-[15rem] p-5 ml-28'>
            <h1 className='text-[#FF705B] italic font-extrabold'>HIKKING EXPEDITION</h1>
            <p className='font-medium mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem asperiores perferendis harum eius ea ducimus </p>
          </div>
          
        </div>

        <div className='p-5 flex items-center justify-center'>
          <div className='w-[15rem] p-5 '>
            <h1 className='text-[#FF705B] italic font-extrabold'>HIKKING EXPEDITION</h1>
            <p className='font-medium mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem asperiores perferendis harum eius ea ducimus </p>
          </div>
          <div>
            <button className='text-[1.3rem] bg-[#FF705B] py-2 px-5 rounded-md flex items-center justify-center uppercase font-semibold tracking-tight text-white -mt-10 ml-20'>
             read more
            </button>
          </div>
        </div>

       
      </div>
      
    </div>
  )
}

export default Explore
