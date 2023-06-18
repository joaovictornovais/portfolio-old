import React, { useState } from 'react'

import { HiMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

const Header = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
  <header>
    <nav className='header-container'>
      <div className='header-logo group'>
        <a className='color-hover text-gray-800 hover:text-blue-600'>novais.<span className='color-hover text-blue-600 group-hover:text-gray-800'>dev</span></a>
      </div>
      <div className='flex sm:hidden' onClick={handleNav}>
        {nav ? <MdClose size={23} /> : <HiMenuAlt3 size={23} />}
      </div>
      <ul className='header-list'>
        <li className='blue-hover'>
          <a href="#hero">Home</a>
        </li>
        <li className='blue-hover'>
          <a href="#about">About</a>
        </li>
        <li className='blue-hover'>
          <a href="#projects">Projects</a>
        </li>
        <li className='blue-hover'>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <nav className={nav ? 'header-desktop': 'header-mobile'}>
      <ul className='header-mobile-list'>
        <li className='blue-hover' 
          onClick={handleNav}><a href="#hero">Home</a></li>
        <li className='blue-hover' 
          onClick={handleNav}><a href="#about">About</a></li>
        <li className='blue-hover' 
          onClick={handleNav}><a href="#projects">Projects</a></li>
        <li className='blue-hover' 
          onClick={handleNav}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header