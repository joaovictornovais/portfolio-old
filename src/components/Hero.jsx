import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  const frontend = ['html5', 'css3', 'javascript', 'react', 'tailwind']
  const backend = ['java', 'python', 'postgresql', 'firebase']

  return (
    <section id="hero" className='flex flex-col gap-6 justify-center h-full items-center pt-16 pb-12 px-6 bg-zinc-100'>
      <div className='p-8'>
        <img className='w-[300px] rounded-xl'
          src="https://i.pinimg.com/736x/02/11/aa/0211aa42dd92331ff9e3f9a06f13bab5.jpg" 
          alt="joão victor"/>
      </div>
      <div className='flex flex-col gap-4 text-base'>
        <h1 className='text-gray-800 font-bold text-3xl text-center'>Full-Stack Java/React Developer 🌊</h1>
        <p className='text-center text-zinc-700 text-lg max-w-[500px]'>Hi I'm João Victor. A passionate Full-stack Java/React Developer based in São Paulo, Brazil. 📍</p>
      </div>
      <div className='flex gap-4 text-gray-800'>
        <a className='cursor-pointer hover:text-blue-600 hover:scale-105 transition-colors'
          href='https://www.github.com/joaovictornovais' target="__blank"><FaGithub size={40}/></a>
        <a className='cursor-pointer hover:text-blue-600 hover:scale-105 transition-colors'
          href='https://www.linkedin.com/in/joaovictornovais' target="__blank"><FaLinkedin size={40}/></a>
      </div>
      <div className='flex flex-col gap-4 items-center p-4'>
        <h2 className='font-bold text-xl text-gray-800 border-b-2 border-gray-800 py-1 px-2'>Skills</h2>
        <div className='flex flex-col gap-4'>
          <span className='font-semibold text-base text-blue-600'>Front-end</span>
          <ul className='flex gap-4'>
          {
            frontend.map((stack) => (
              <li className='bg-white p-2 rounded-full shadow-xl flex justify-center items-center'>
                <img className='w-[50px]'
                  src={stack != 'tailwind' ?`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${stack}/${stack}-original.svg` : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"} />
              </li>
            ))
          }
        </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <span className='font-semibold text-base text-gray-800 text-end'>Back-end</span>
          <ul className='flex gap-4'>
          {
            backend.map((stack) => (
              <li className='bg-white p-2 rounded-full shadow-xl flex justify-center items-center'>
                <img className='w-[50px]'
                  src={stack != 'firebase' ?`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${stack}/${stack}-original.svg` : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"} />
              </li>
            ))
          }
        </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero