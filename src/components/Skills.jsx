import React from 'react'

const Skills = () => {
    const frontend = ['html5', 'css3', 'javascript', 'react', 'tailwind']
    const backend = ['java', 'python', 'postgresql', 'firebase']
    return (
        <div className='skills-container'>
            <h2 className='skills-title'>Skills</h2>
            <div className='column'>
                <ul className='flex gap-4'>
                    {
                        frontend.map((stack) => (
                            <li className='skills-circle'>
                                <img className='w-[50px]'
                                    src={stack != 'tailwind' ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${stack}/${stack}-original.svg` : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"} />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='column'>
                <ul className='flex gap-4'>
                    {
                        backend.map((stack) => (
                            <li className='skills-circle'>
                                <img className='w-[50px]'
                                    src={stack != 'firebase' ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${stack}/${stack}-original.svg` : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Skills