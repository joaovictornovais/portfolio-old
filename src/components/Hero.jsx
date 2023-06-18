import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero"
      className='hero-container'>
      <div className='p-8'>
        <img className='w-[300px] rounded-xl'
          src="https://i.pinimg.com/736x/02/11/aa/0211aa42dd92331ff9e3f9a06f13bab5.jpg"
          alt="joão victor" />
      </div>
      <div className='center-container'>
        <h1 className='hero-title'>
          Full-Stack Java/React Developer 🌊
        </h1>
        <p className='paragraph max-w-[500px]'>
          Hi I'm João Victor. A passionate Full-stack Java/React Developer based in São Paulo, Brazil. 📍
        </p>

        <div className='center text-gray-800'>
          <a className='blue-hover hover:scale-105'
            href='https://www.github.com/joaovictornovais' target="__blank">
            <FaGithub size={40} /></a>
          <a className='blue-hover hover:scale-105'
            href='https://www.linkedin.com/in/joaovictornovais' target="__blank">
            <FaLinkedin size={40} /></a>
        </div>
      </div>
    </section>
  )
}

export default Hero