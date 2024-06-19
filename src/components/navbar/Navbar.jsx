import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import logo from '../../assets/Logo.png'

function Navbar() {
  return (
    <div className="font-bold fixed z-[999] w-full px-20 py-10  flex items-center justify-between">
       <div className="logo w-28">
        <img src={logo} alt="" />
        </div>

          <div className="links flex gap-10 text-[#2F4959] text-[1.2rem] mr-40">
            {["home", "about", "go hiking", "blog", "Contact us"].map((item, index)=>(
              <a key={index} className={` capitalize  `}>{item}</a>
            ))}
          </div>

            <div className='bg-blue-400 w-[10rem] rounded-full flex items-center justify-center py-2 px-4  '> 
                <input type="text" className='bg-transparent border-0 outline-none w-full' />
                <IoSearchSharp className='text-[1.5rem]  text-white'/>
            </div>
         
    </div>
  )
}

export default Navbar
