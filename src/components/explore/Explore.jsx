import React from 'react'
import bgImage from '../../assets/explore.png'
import design2 from '../../assets/Place Your Design He (1).png'

function Explore() {
  return (
    <div
     style={{backgroundImage: `url(${bgImage})`}}
     className='w-full h-[180vh]  bg-left bg-auto bg-no-repeat relative'>
      <div className='flex flex-col items-center justify-center mt-10 p-5'>
        <h1 className='text-[3rem] text-center text-[#FF705B] italic tracking-tighter font-medium'>EXPLORE THE BEST TRIPS</h1>
        <p className='text-[1.7rem] italic uppercase tracking-tighter'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>

      <div className='container w-[60%] z-10 absolute right-0 pt-20'>
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

      <div className=' absolute z-0 w-[20rem] top-58 right-0'>
        <img src={design2} alt="" />
      </div>

      <div className=' absolute z-0 w-[20rem] bottom-[12rem] right-0'>
        <img src={design2} alt="" />
      </div>

      <div className=' absolute z-0 w-[20rem] top-[40%] left-[45%] scale-x-[-1] '>
        <img src={design2} alt="" />
      </div>
      
    </div>
  )
}

export default Explore
