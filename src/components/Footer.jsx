import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <p>Copyright © 2023. All rights are reserved</p>
        <div className='center'>
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