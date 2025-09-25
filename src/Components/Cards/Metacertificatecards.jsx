import {useEffect} from 'react'
import Button from '../Button/Button'
import {Link, useNavigate} from 'react-router-dom'
import {motion} from 'motion/react'
import Metacertificates from '../Data/Metacertificates'
import { NavHashLink } from 'react-router-hash-link';


function Certificatecards() {
    useEffect(() => {
        window.scrollTo({top: 0,
            left: 0,
            behavior: "instant"
        })
    }, [])
  return (
    <div className='w-full dark:bg-[#0d0e0e] pb-5'>
            <NavHashLink to="/#about" scroll={el => el.scrollIntoView({ top: 100 })}>
                <p  className='dark:text-white transition-all hover:text-gray-500 cursor-pointer ml-10'><span className='mr-3'><i class="fa-solid fa-arrow-left"></i></span> Back</p>
            </NavHashLink>
            <h1 className='text-center font-bold text-4xl dark:text-white pt-8'>Meta Certificates</h1>
            <div className='w-48 h-2 bg-cyan-400 m-auto rounded-lg mt-2 mb-8'></div>
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
                className='border-2 border-cyan-400 p-2 mb-2 h-full flex flex-col rounded-sm'>
                    <h2 className='dark:text-white mb-2 text-center text-xl'><span className='text-blue-600'>{card.img}</span> {card.provider} &#xb7; {card.platform}</h2>
                    <hr className='bg-gray-700 h-1 my-1' />
                    <h1 className='dark:text-white font-bold text-lg mb-4 text-center'>{card.title}</h1>
                    <p className='my-3 flex flex-wrap gap-2 justify-center'>{card.learnedObjectives.map(obj => (
                        <span className='dark:text-white px-2 py-1 mx-1 my-1 dark:bg-gray-500 bg-gray-300'>{obj}</span>
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