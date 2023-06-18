import React from 'react'

import { FaMapMarkedAlt } from 'react-icons/fa'
import { TbMailOpened } from 'react-icons/tb'

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className='flex flex-col gap-6'>
        <h3 className='section-topic'>Contact</h3>
        <h2 className='section-title'>Don't be shy! Hit me up! 👇</h2>
        <div className='contact-grid'>
          <div className='contact-circle'>
            <div className='contact-item'>
              <FaMapMarkedAlt size={40} />
            </div>
            <h3 className='contact-legend'>Location</h3>
            <p className='text-gray-700'>São Paulo, Brazil</p>
          </div>
          <div className='contact-circle'>
            <div className='contact-item'>
              <TbMailOpened size={40} />
            </div>
            <h3 className='contact-legend'>E-mail</h3>
            <p className='text-gray-700'>joaovkt.novais@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact