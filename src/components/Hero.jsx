import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className='flex flex-col md:flex-row-reverse gap-6 justify-center h-full items-center pt-16 bg-zinc-100 px-6'>
      <div className='p-8'>
        <img className='w-[300px] rounded-xl'
          src="https://i.pinimg.com/736x/02/11/aa/0211aa42dd92331ff9e3f9a06f13bab5.jpg"
          alt="joão victor" />
      </div>
      <div className='flex flex-col gap-4 text-base items-center justify-center'>
        <h1 className='text-gray-800 font-bold text-3xl text-center md:text-6xl max-w-[600px]'>Full-Stack Java/React Developer 🌊</h1>
        <p className='text-center text-zinc-700 text-lg max-w-[500px]'>Hi I'm João Victor. A passionate Full-stack Java/React Developer based in São Paulo, Brazil. 📍</p>
        <div className='flex gap-4 text-gray-800 items-center justify-center'>
          <a className='cursor-pointer hover:text-blue-600 hover:scale-105 transition-colors'
            href='https://www.github.com/joaovictornovais' target="__blank"><FaGithub size={40} /></a>
          <a className='cursor-pointer hover:text-blue-600 hover:scale-105 transition-colors'
            href='https://www.linkedin.com/in/joaovictornovais' target="__blank"><FaLinkedin size={40} /></a>
        </div>
      </div>
    </section>
  )
}

export default Hero