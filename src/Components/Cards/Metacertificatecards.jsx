import React from 'react'
import Button from '../Button/Button'
import {Link} from 'react-router-dom'
import {motion} from 'motion/react'
import Metacertificates from '../Data/Metacertificates'

function Certificatecards() {
  return (
    <div className='w-full dark:bg-[#0d0e0e]'>
            <h1 className='text-center font-bold text-4xl dark:text-white py-10'>Projects</h1>
        <div className='w-[80vw] m-auto grid md:grid-cols-4 gap-5 '>
            {Metacertificates.map(card => (
                <motion.div 
                whileHover={{
                scale: 1.02,
                cursor: "pointer",
                boxShadow: "5px 5px 10px 2px cyan"
                }}
                transition={{
                    duration: 0.5
                }}
                className='border-2 border-cyan-400 p-2 mb-2 h-[30vh] relative rounded-sm '>
                    <h2 className='dark:text-white mb-2 text-center text-xl'><span className='text-blue-600'>{card.img}</span> {card.provider} &#xb7; {card.platform}</h2>
                    <hr className='bg-gray-700 h-1 my-1' />
                    <h1 className='dark:text-white font-bold text-lg mb-4 text-center'>{card.title}</h1>
                    <p className='my-2 w-50'>{card.learnedObjectives.map(obj => (
                        <span className='dark:text-white px-1.5 py-1 mx-1 my-1 dark:bg-gray-500 bg-gray-300'>{obj}</span>
                    ))}</p>
                    <div className='my-4 text-center absolute bottom-0 w-[100%]'>
                    <Link to={card.verifyAt} target='_blank'>
                    <Button title="View Certificate" bg="transparent" bgHover="hover:text-cyan-400"/>
                    </Link>
                    </div>
                </motion.div>
            )) }
        </div>
    </div>
  )
}

export default Certificatecards