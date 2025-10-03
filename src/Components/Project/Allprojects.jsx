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
    <div className='w-full min-h-screen py-5'>
        {Projects.map(p => (
            <motion.div 
            key={p.title}
            initial={{
                opacity: 0,
                y: 30
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                amount: 0.7
            }}
            whileHover={{
            scale: 1.02,
            cursor: "pointer",
            boxShadow: "5px 5px 10px 2px cyan"
            }}
            transition={{
            duration: 0.6
            }}
            className='w-[90vw] m-auto md:flex items-center justify-between px-5 py-8 mt-8 rounded-md border-2 border-cyan-400'>
                <div>
                    <h1 className='dark:text-white md:text-left text-center font-bold text-2xl'>{p.title}</h1>
                    <p className='dark:text-white w-[90%] md:mt-1 mt-2 md:mb-2 mb-2 md:text-left text-justify'>{p.shortDesc}</p>
                    <p className='md:mt-3 mt-4 relative right-1'>{p.techSTack.map(tech => (
                        <span className='dark:text-white ml-1 px-1.5 py-1 dark:bg-gray-600 bg-gray-300 rounded-sm'>{tech}</span>
                    ))}</p>
                </div>
                <div className='md:mt-0 mt-5 md:text-left text-center'>
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