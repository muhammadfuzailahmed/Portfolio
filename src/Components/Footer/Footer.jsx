import React, { useEffect, useState } from 'react'
import {  NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx'

function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, [])

  return (
    <div className='w-full h-[60vh] dark:text-white dark:bg-[#0d0e0e] relative'>
      <hr className='bg-gray-400'/>
      <div className='w-[80vw] h-96 m-auto flex items-center justify-between px-10'>

        <div className=' w-[50%]'>
            <NavHashLink smooth to="/#home">
              <h1 className='dark:text-white font-bold text-4xl'>Fuzail.</h1>
            </NavHashLink>
              <p className='dark:text-white my-4 text-justify'>Built a feature-rich e-commerce demo using React and loalStorage – with login/signup, product pages, Filters, cart totals, checkout, and order history. Passionate about clean UI, responsive design, actively expanding my skills through D3A and Android development in my upcoming semester.</p>
              <div className='mb-4'>
                <Link to="https://github.com/muhammadfuzailahmed">
                  <p className=' inline-block p-2 rounded-sm dark:bg-gray-500'><i className="fa-brands fa-github text-2xl"></i></p>
                </Link>
                <Link to="https://www.instagram.com/muhammad_fuzail_30/">
                  <p className=' inline-block p-2 rounded-sm dark:bg-gray-500 ml-2'><i className="fa-brands fa-instagram text-2xl"></i></p>
                </Link>
                <Link to="https://www.linkedin.com/in/mfuzailahmed/">
                  <p className=' inline-block p-2 rounded-sm dark:bg-gray-500 ml-2'><i className="fa-brands fa-linkedin-in text-2xl"></i></p>
                </Link>
              </div>
              <p>&#169; Fuzail | All rights reserved</p>
        </div>

        <div>
          <div className='flex items-center gap-10'>
            <ul className='dark:text-white'>
              <li className='font-bold mb-1'>Me</li>
              <li className='dark:text-gray-300'>Project</li>
              <li className='dark:text-gray-300'>Skills</li>
              <li className='dark:text-gray-300'>About</li>
            </ul>

          <ul className='dark:text-white'>
              <li className='font-bold mb-1'>Links</li>
              <li className='dark:text-gray-300'>Home</li>
              <li className='dark:text-gray-300'>Resume</li>
              <li className='dark:text-gray-300'>Source code</li>
            </ul>

            <ul className='dark:text-white'>
              <li className='font-bold mb-1'>Contacts</li>
              <li className='dark:text-gray-300'>Email</li>
              <li className='dark:text-gray-300'>Instagram</li>
              <li className='dark:text-gray-300'>LinkedIn</li>
            </ul>
      </div>
        </div>

      </div>

    <div className='w-full absolute bottom-0 left-0 flex items-center justify-between px-5 py-3 border-t-1 border-t-gray-500'>
      <div>
        <p className='dark:text-white'>Based in Karachi, Pakistan.</p>
      </div>

      <div>
        <p className='dark:text-white'>Local time: {time}</p>
      </div>

      <div>
        <Link to="/contact">
            <Button title="Let's-get-in-touch &#8594;" bg="transparent" bgHover="hover:bg-cyan-400"/>
        </Link>
      </div>

    </div>

    </div>
  )
}

export default Footer