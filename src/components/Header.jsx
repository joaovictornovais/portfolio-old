import React, { useState } from 'react'

import { HiMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

const Header = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
  <header className='bg-white fixed w-full'>
    <nav className='flex items-center justify-between py-6 px-12 shadow-lg'>
      <div className='group font-bold text-xl cursor-pointer'>
        <a className='text-gray-800 group-hover:text-blue-600 transition-colors 200ms'>novais.<span className='text-blue-600 group-hover:text-gray-800 transition-colors 200ms'>dev</span></a>
      </div>
      <div className='flex sm:hidden' onClick={handleNav}>
        {nav ? <MdClose size={23} /> : <HiMenuAlt3 size={23} />}
      </div>
      <ul className='hidden sm:flex gap-4 font-semibold text-xl'>
        <li className='hover:cursor-pointer hover:text-blue-600 transition-all ease-in-out 400ms'>
          <a href="#hero">Home</a>
        </li>
        <li className='hover:cursor-pointer hover:text-blue-600 transition-all ease-in-out 400ms'>
          <a href="#about">About</a>
        </li>
        <li className='hover:cursor-pointer hover:text-blue-600 transition-all ease-in-out 400ms'>
          <a href="#projects">Projects</a>
        </li>
        <li className='hover:cursor-pointer hover:text-blue-600 transition-all ease-in-out 400ms'>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <nav className={nav ? 'flex left-0 absolute ease-in-out duration-500 justify-center w-full h-[90vh] bg-zinc-100': 'absolute flex left-[100%] ease-in-out duration-500 justify-center w-full h-[90vh] bg-zinc-100'}>
      <ul className='flex flex-col justify-center items-center text-3xl gap-8 font-semibold'>
        <li className='cursor-pointer hover:text-blue-600 transition-colors' 
          onClick={handleNav}><a href="#hero">Home</a></li>
        <li className='cursor-pointer hover:text-blue-600 transition-colors' 
          onClick={handleNav}><a href="#about">About</a></li>
        <li className='cursor-pointer hover:text-blue-600 transition-colors' 
          onClick={handleNav}><a href="#projects">Projects</a></li>
        <li className='cursor-pointer hover:text-blue-600 transition-colors' 
          onClick={handleNav}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header