import React,{useState} from 'react'
import Allprojects from '../../Project/Allprojects'
import Javascriptprojects from '../../Project/Javascriptprojects'
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';

function Projects() {
    const [tab, setTab] = useState("showall")

    const tabs = [
        {
            id: "showall",
            label: "Show All" 
        },
        {
            id: "js",
            label: "JavaScript"
        },
        {
            id: "react",
            label: "ReactJS"
        },
        {
            id: "app",
            label: "App Development"
        },
        ]

  return (
    <div className='w-full min-h-screen dark:bg-[#0d0e0e]'>
        <NavHashLink to="/#projects">
            <p className='dark:text-white transition-all hover:text-gray-500 cursor-pointer ml-[4vw] pt-5 '><span className='mr-5'><i class="fa-solid fa-arrow-left"></i></span> Back</p></NavHashLink>
        <div className='md:mt-0 mt-3 flex items-center justify-center'>
            <ul className='flex md:gap-6 gap-4 mb-5'>
                {tabs.map(t => (
                    <li key={t.id}
                    onClick={() => setTab(t.id)}
                    className={` font-[700] transition-all hover:text-cyan-400 cursor-pointer ${tab === t.id ? 'text-cyan-400' : 'dark:text-white'}`}>{t.label}</li>
                ))}
            </ul>
        </div>

        {tab == "showall" && <Allprojects />}
        {tab == "js" && <Javascriptprojects />}
        {tab == "react" && <div className='dark:text-white'>React Projects</div>}
        {tab == "app" && <div className='dark:text-white'>App development Projects</div>}

    </div>
  )
}

export default Projects