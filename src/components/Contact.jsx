import React from 'react'

import { FaMapMarkedAlt } from 'react-icons/fa'
import { TbMailOpened } from 'react-icons/tb'

const Contact = () => {
  return (
    <section id="contact" className="bg-white flex justify-center items-center h-full p-8 py-24">
      <div className='flex flex-col gap-6'>
        <h3 className='text-blue-600 font-bold uppercase text-center text-xl'>Contact</h3>
        <h2 className='font-bold text-gray-800 text-2xl text-center'>Don't be shy! Hit me up! 👇</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 pt-6'>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <div className='bg-white p-4 rounded-full shadow-xl text-blue-600 hover:cursor-pointer hover:scale-105 duration-200'>
              <FaMapMarkedAlt size={40} />
            </div>
            <h3 className='text-xl font-bold text-gray-800'>Location</h3>
            <p className='text-gray-700'>São Paulo, Brazil</p>
          </div>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <div className='bg-white p-4 rounded-full shadow-xl text-blue-600 hover:cursor-pointer hover:scale-105 duration-200'>
              <TbMailOpened size={40} />
            </div>
            <h3 className='text-xl font-bold text-gray-800'>E-mail</h3>
            <p className='text-gray-700'>joaovkt.novais@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact