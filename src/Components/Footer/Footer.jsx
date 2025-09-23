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

  function getTime(date = new Date()) {
    const hours = date.getHours();
    return hours < 12 ? "AM" : "PM"
  }

  return (
    <div className='w-full dark:text-white dark:bg-[#0d0e0e] pt-5'>
      <hr className='bg-gray-400 mb-8'/>
      <div className='md:w-[80vw] m-auto md:flex items-center justify-between px-10 '>

        <div className='md:w-[50%]'>
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
              <p className='mb-10'>&#169; Fuzail | All rights reserved</p>
        </div>

        <div className='mb-5'>
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

    <div className='w-full flex items-center justify-between px-5 py-3 border-t-1 border-t-gray-500 '>
      <div className='md:flex items-center justify-between w-[60%]'>
      <div>
        <p className='dark:text-white md:mb-0 mb-2'>Based in Karachi, Pakistan.</p>
      </div>

      <div>
        <p className='dark:text-white md:text-center'>Local time: {time} {getTime()}</p>
      </div>
    </div>
      <div className='w-[50%] text-right'>
        <Link to="/contact">
            <Button title="Let's-get-in-touch &#8594;" bg="transparent" bgHover="hover:bg-cyan-400"/>
        </Link>
      </div>

    </div>

    </div>
  )
}

export default Footer