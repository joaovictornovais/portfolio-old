import React from 'react'

const Skills = () => {
    const frontend = ['html5', 'css3', 'javascript', 'react', 'tailwind']
    const backend = ['java', 'python', 'postgresql', 'firebase']
    return (
        <div className='flex flex-col gap-4 items-center p-4 bg-zinc-100 py-16'>
            <h2 className='font-bold text-xl text-gray-800 border-b-2 border-gray-800 py-1 px-2'>Skills</h2>
            <div className='flex flex-col gap-4'>
                <span className='font-semibold text-base text-blue-600 sm:hidden'>Front-end</span>
                <ul className='flex gap-4'>
                    {
                        frontend.map((stack) => (
                            <li className='bg-white p-2 rounded-full shadow-xl flex justify-center items-center hover:scale-105 transition-all duration-200'>
                                <img className='w-[50px]'
                                    src={stack != 'tailwind' ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${stack}/${stack}-original.svg` : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"} />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='flex flex-col gap-4'>
                <span className='font-semibold text-base text-gray-800 text-end sm:hidden'>Back-end</span>
                <ul className='flex gap-4'>
                    {
                        backend.map((stack) => (
                            <li className='bg-white p-2 rounded-full shadow-xl flex justify-center items-center hover:scale-105 transition-all duration-200'>
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