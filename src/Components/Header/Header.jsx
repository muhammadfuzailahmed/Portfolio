import React from 'react'
import { useTheme } from '../Contexts/Themecontext'
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header() {
    const {theme, themeToggle} = useTheme();
    const {pathname, hash} = useLocation();
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
        <nav className='flex items-center justify-between px-40 py-4 dark:bg-[#0d0e0e]'>
            <div>
                <Link to="/"><h1 className='font-bold text-4xl dark:text-white'>Fuzail.</h1></Link>
            </div>
            <div>
                <ul className='flex items-center gap-8'>
                    <NavHashLink smooth to="/#home" className={`${isHome ? "text-cyan-400" : "text-black dark:text-white"}`}><li className='font-[700] uppercase hover:text-cyan-400 '>Home</li></NavHashLink>
                    <NavHashLink smooth to="/#about" className={`${isAbout ? "text-cyan-400" : "text-black dark:text-white"}`}><li className='font-[700] uppercase hover:text-cyan-400 dark:text-white'>About</li></NavHashLink>
                    <NavHashLink smooth to="/#skills" className={`${isSkills ? "text-cyan-400" : "text-black dark:text-white"}`}><li className='font-[700] uppercase hover:text-cyan-400 dark:text-white'>Skills</li></NavHashLink>
                    <NavHashLink smooth to="/#projects" className={`${isProjects ? "text-cyan-400" : "text-black dark:text-white"}`}><li className='font-[700] uppercase hover:text-cyan-400 dark:text-white'>Projects</li></NavHashLink>
                    <NavHashLink smooth to="/#contact" className={`${isContact ? "text-cyan-400" : "text-black dark:text-white"}`}><li className='font-[700] uppercase hover:text-cyan-400 dark:text-white'>Contact</li></NavHashLink>
                </ul>
            </div>
            <div>
                <button onClick={themeToggle} className='dark:text-white cursor-pointer text-xl'>
                    {theme === 'dark' ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>
}
                </button>
            </div>
        </nav>
    </>
  )
}

export default Header
