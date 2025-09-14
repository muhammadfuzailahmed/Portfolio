import React from 'react'
import { useTheme } from '../Contexts/Themecontext'
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Header() {
    const {theme, themeToggle} = useTheme();
  return (
    <>
        <nav className='flex items-center justify-between px-40 py-4 dark:bg-[#0d0e0e]'>
            <div>
                <Link to="/"><h1 className='font-bold text-4xl dark:text-white'>Fuzail.</h1></Link>
            </div>
            <div>
                <ul className='flex items-center gap-8'>
                    <NavHashLink smooth to="/#home"><li className='font-[700] uppercase hover:text-cyan-400 dark:text-white'>Home</li></NavHashLink>
                    <NavHashLink smooth to="/#home"><li className='font-[700] uppercase hover:text-cyan-400 dark:text-white'>About</li></NavHashLink>
                    <NavHashLink smooth to="/#home"><li className='font-[700] uppercase hover:text-cyan-400 dark:text-white'>Skills</li></NavHashLink>
                    <NavHashLink smooth to="/#home"><li className='font-[700] uppercase hover:text-cyan-400 dark:text-white'>Projects</li></NavHashLink>
                    <NavHashLink smooth to="/#home"><li className='font-[700] uppercase hover:text-cyan-400 dark:text-white'>Contact</li></NavHashLink>
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