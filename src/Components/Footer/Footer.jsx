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

  function ScrollTo() {
    window.ScrollTO({
      top: 0,
      behavior: "instant"
    })
  }

  return (
    <div className='w-full dark:text-white dark:bg-[#0d0e0e] pt-5'>
      <hr className='bg-gray-400 mb-8'/>
      <div className='md:w-[80vw] m-auto md:flex items-center justify-between px-10 '>

        <div className='md:w-[50%]'>
            <NavHashLink smooth to="/#home">
              <h1 className='dark:text-white font-bold text-4xl md:text-left text-center'>Fuzail.</h1>
            </NavHashLink>
              <p className='dark:text-white my-4 md:text-justify text-center'>Front-End Developer | JavaScript & React Developer | Building projects to become a Full-Stack Developer.</p>
              <div className='mb-4 md:text-left text-center'>
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
              <p className='mb-10 md:text-left text-center'>&#169; Fuzail | All rights reserved</p>
        </div>
        <div></div>
        <div className='mb-5'>
          <div className='md:flex items-center gap-10'>
            <div className='flex gap-10'>
            <ul className='dark:text-white'>
              <h2 className='font-bold mb-1.5'>Me</h2>
              <li className='dark:text-gray-300'>Project</li>
              <li className='dark:text-gray-300'>Skills</li>
              <li className='dark:text-gray-300'>About</li>
            </ul>

          <ul className='dark:text-white'>
              <h2 className='font-bold mb-1.5'>Links</h2>
              <li className='dark:text-gray-300'>Home</li>
              <li className='dark:text-gray-300'>Resume</li>
              <li className='dark:text-gray-300'>Source code</li>
            </ul>
          </div>
          <div className='md:mt-0 mt-5'>
            <ul className='dark:text-white'>
              <h2 className='font-bold mb-1.5'>Contacts</h2>
              <li className='dark:text-gray-300'>Email</li>
              <li className='dark:text-gray-300'>Instagram</li>
              <li className='dark:text-gray-300'>LinkedIn</li>
            </ul>
            </div>
      </div>
        </div>

      </div>

    <div className='w-full flex items-center justify-between px-5 py-3 border-t-1 border-t-gray-500 '>
      <div className='md:flex items-center justify-between w-[45%]'>
      <div>
        <p className='dark:text-white md:mb-0 mb-2 text-sm'>Based in Karachi, Pakistan.</p>
      </div>

      <div>
        <p className='dark:text-white md:text-center text-sm'>Local time: {time}</p>
      </div>
    </div>
      <div className='w-[50%] text-right' >
        <div onClick={ScrollTo}>
        <Link to="/contact">
            <Button title="Let's-get-in-touch &#8594;" bg="transparent" bgHover="hover:bg-cyan-400"/>
        </Link>
        </div>
      </div>

    </div>

    </div>
  )
}

export default Footer