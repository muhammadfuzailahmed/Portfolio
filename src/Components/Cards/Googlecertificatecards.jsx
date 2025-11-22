import React,{useEffect} from 'react'
import Button from '../Button/Button'
import {Link} from 'react-router-dom'
import {motion} from 'motion/react'
import Googlecertificates from '../Data/Googlecertificates.jsx'
import { NavHashLink } from 'react-router-hash-link';


function Certificatecards() {
    useEffect(() => {
            window.scrollTo({top: 0,
                left: 0,
                behavior: "instant"
            })
        }, [])

    
  return (
    <div className='w-full min-h-[60vh] dark:bg-[#0d0e0e] pb-5'>
        <NavHashLink to="/#certificates">
            <p className='dark:text-white transition-all hover:text-gray-500 cursor-pointer ml-10 inline-block mt-4'><span className='mr-3'><i class="fa-solid fa-arrow-left"></i></span> Back</p>
        </NavHashLink>
        <motion.div
        initial={{
            opacity : 0
        }}
        whileInView={{
            opacity : 1,
        }}
        viewport={{
            once:  "true"
        }}
        >
            <h1 className='text-center font-bold text-4xl dark:text-white pt-10'>Google Certificates</h1>
            <div className='w-48 h-2 bg-cyan-400 m-auto rounded-lg mt-2 mb-8'></div>
        </motion.div>
        <div className='w-[80vw] m-auto grid md:grid-cols-4 gap-5 '>
            {Googlecertificates.map(card => (
                <motion.div 
                initial={{
                    opacity : 0,
                    y: 35
                }}
                whileInView={{
                    opacity : 1,
                    y: 0
                }}
                viewport={{
                    once:  "true",
                    amount: 0.3
                }}
                whileHover={{
                scale: 1.02,
                cursor: "pointer",
                boxShadow: "5px 5px 10px 2px cyan"
                }}
                transition={{
                    duration: 0.5
                }}
                key={card.title}
                className='border-2 border-cyan-400 p-2 mb-2 h-full flex flex-col rounded-sm'>
                    <h2 className='dark:text-white mb-2 text-center text-xl'><span>{card.img}</span> {card.provider} &#xb7; {card.platform}</h2>
                    <hr className='dark:bg-gray-700 h-1 my-1' />
                    <h1 className='dark:text-white font-bold text-lg mb-4 text-center'>{card.title}</h1>
                    <p className='my-3 flex flex-wrap gap-2 justify-center'>{card.learnedObjectives.map(obj => (
                        <span key={obj} className='dark:text-white px-2 py-1 mx-1 my-1 dark:bg-gray-500 bg-gray-300'>{obj}</span>
                    ))}</p>
                    <div className='mt-auto pb-1 text-center'>
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