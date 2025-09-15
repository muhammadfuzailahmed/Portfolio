import React, { useState } from 'react'
import { useTheme } from '../Contexts/Themecontext'
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header() {
    const {theme, themeToggle} = useTheme();
    const {pathname, hash} = useLocation();
    
    function HandleMenuClick() {
        let menu = document.querySelector(".menu") 
        if(!menu) return;
        if(window.innerWidth < 768) {
            menu.style.transition = "0.5s ease"
            menu.style.height = "25vh"
            menu.style.padding = "40px 0px"
        }
    }
    
    function HandleCloseClick() {
        let menu = document.querySelector(".menu") 
        if(!menu) return;
        if(window.innerWidth < 768) {
            menu.style.transition = "0.5s ease"
            menu.style.height = "0vh"
            menu.style.padding = "0px 0px"
        }
    }

    function HideMenu() {
        let menu = document.querySelector(".menu")
        if(!menu) return;
        if(window.innerWidth < 768) {
            menu.style.transition = "0.5s ease"
            menu.style.height = "0vh"
            menu.style.padding = "0px 0px"
        }
    }

    let isHome = false;
    if(pathname === "/"){
        if(hash === "#home" || hash === "" || hash === undefined || hash === null) {
            isHome = true
        }
    }

    let isAbout = false;
    if (pathname === "/"){
        if(hash === "#about") {
            isAbout =true;
        }
    }

    let isSkills = false;
    if (pathname === "/"){
        if(hash === "#skills") {
            isSkills =true;
        }
    }

    let isProjects = false;
    if (pathname === "/"){
        if(hash === "#projects") {
            isProjects =true;
        }
    }

    let isContact = false;
    if (pathname === "/"){
        if(hash === "#contact") {
            isContact =true;
        }
    }


  return (
    <>
        <nav className='flex items-center justify-between md:px-40 px-10 py-4 dark:bg-[#0d0e0e]'>
            <div className='flex items-center'>
                <p className='md:hidden text-black dark:text-white relative right-5 text-2xl' onClick={HandleMenuClick}><i class="fa-solid fa-bars"></i></p>
                <Link to="/"><h1 className='font-bold text-4xl dark:text-white'>Fuzail.</h1></Link>
            </div>
            <div>
                <ul className='md:flex items-center gap-8 md:relative absolute md:top-0 top-0 left-1/2 translate-x-[-50%] md:bg-transparent md:blur-none backdrop-blur-5xl md:w-auto w-[100vw] md:h-auto h-0 overflow-hidden md:dark:bg-transparent dark:bg-gray-900 bg-amber-100 md:py-0 py-0 menu'>
                <li onClick={HandleCloseClick} className='font-[700] uppercase hover:text-cyan-400 text-center mb-2 md:mb-0 md:hidden dark:text-white text-3xl absolute top-2 right-5'><i class="fa-solid fa-xmark"></i></li>
                    <NavHashLink smooth to="/#home" onClick={HideMenu} className={`${isHome ? "text-cyan-400" : "text-black dark:text-white"}`}><li className='font-[700] uppercase hover:text-cyan-400 text-center mb-2 md:mb-0'>Home</li></NavHashLink>
                    <NavHashLink smooth to="/#about"onClick={HideMenu} className={`${isAbout ? "text-cyan-400" : "text-black dark:text-white"}`}><li className='font-[700] uppercase hover:text-cyan-400 text-center mb-2 md:mb-0'>About</li></NavHashLink>
                    <NavHashLink smooth to="/#skills"onClick={HideMenu} className={`${isSkills ? "text-cyan-400" : "text-black dark:text-white"}`}><li className='font-[700] uppercase hover:text-cyan-400 text-center mb-2 md:mb-0'>Skills</li></NavHashLink>
                    <NavHashLink smooth to="/#projects" onClick={HideMenu} className={`${isProjects ? "text-cyan-400" : "text-black dark:text-white"}`}><li className='font-[700] uppercase hover:text-cyan-400 text-center mb-2 md:mb-0'>Projects</li></NavHashLink>
                    <NavHashLink smooth to="/#contact" onClick={HideMenu} className={`${isContact ? "text-cyan-400" : "text-black dark:text-white"}`}><li className='font-[700] uppercase hover:text-cyan-400 text-center mb-2 md:mb-0'>Contact</li></NavHashLink>
                </ul>
            </div>
            <div>
                <button onClick={themeToggle} className='dark:text-white cursor-pointer text-xl'>
                    {theme === 'dark' ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>}
                </button>
            </div>
        </nav>
    </>
  )
}

export default Header
