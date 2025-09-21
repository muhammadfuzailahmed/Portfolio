import React, { useEffect } from 'react'
import {motion} from 'motion/react'
import {Projects} from '../Data/Projects.jsx'
import Button from '../Button/Button.jsx'
import { Link } from 'react-router-dom'

function Allprojects() {
    useEffect(()=> {
        window.scrollTo({top: 0,
            left: 0,
            behavior: "instant"
        })
    }, [])
  return (
    <div className='w-full min-h-screen'>
        {Projects.map(p => (
            <motion.div 
            key={p.title}
            whileHover={{
            scale: 1.02,
            cursor: "pointer",
            boxShadow: "5px 5px 10px 2px cyan"
            }}
            transition={{
            duration: 0.6
            }}
            className='w-[90vw] m-auto flex items-center justify-between px-5 py-8 mt-8 rounded-md border-2 border-cyan-400'>
                <div>
                    <h1 className='dark:text-white font-bold text-2xl'>{p.title}</h1>
                    <p className='dark:text-white w-[90%] mt-1'>{p.shortDesc}</p>
                    <p className='mt-3 relative right-1'>{p.techSTack.map(tech => (
                        <span className='dark:text-white ml-1 px-1.5 py-1 dark:bg-gray-600 bg-gray-400 rounded-sm'>{tech}</span>
                    ))}</p>
                </div>
                <div>
                    <Link to={`/projects/${encodeURIComponent(p.title)}`}>
                    <Button title="View Project" bg="transparent" bgHover="hover:text-cyan-400" />
                    </Link>
                </div>
            </motion.div>
        ))}
    </div>
  )
}

export default Allprojects