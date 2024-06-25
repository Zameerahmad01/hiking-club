import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import logo from '../../assets/Logo.png'

function Navbar() {
  return (
    <div className="font-bold absolute top-0 z-[999] w-full px-10 py-10  flex justify-between">
       <div className="logo h-[7rem] w-[6rem]">
        <img className='w-full h-full' src={logo} alt="" />
        </div>

          <div className="links flex gap-10 text-[#2F4959] text-[1rem] mr-60 py-5 ">
            {["home", "about", "go hiking", "blog", "Contact us"].map((item, index)=>(
              <a key={index} className={` capitalize cursor-pointer  `}>{item}</a>
            ))}
          </div>

            <div className=' bg-blue-400 w-[10rem] h-[2.5rem] rounded-full flex items-center justify-center py-2 px-4  mt-5'> 
                <input type="text" className='bg-transparent border-0 outline-none w-full' />
                <IoSearchSharp className='text-[1.5rem]  text-white'/>
            </div>
         
    </div>
  )
}

export default Navbar
