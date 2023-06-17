import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-zinc-800 text-white font-bold text-base p-2 text-center py-16 flex flex-col gap-4'>
        <p>Copyright © 2023. All rights are reserved</p>
        <div className='flex gap-4 items-center justify-center'>
            <a href="https://www.linkedin.com/in/joaovictornovais" target="__blank">
                <FaLinkedin size={25} />
            </a>
            <a href="https://www.github.com/joaovictornovais" target="__blank">
                <FaGithub size={25} />
            </a>
        </div>
    </footer>
  )
}

export default Footer