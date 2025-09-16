import React from 'react'
import {motion} from 'motion/react'

function Aboutcertificatecard({provider, desc, type, img}) {
    function MouseEnter(e){
        const arrow = e.currentTarget.querySelector('.arrow');
        arrow.style.transition = "0.5s ease"
        arrow.style.transform = "rotate(-25deg)"
    }
    function MouseLeave(e) {
        const arrow = e.currentTarget.querySelector('.arrow');
        arrow.style.transition = "0.5s ease"
        arrow.style.transform = "rotate(0)"
    }
  return (
    <motion.div 
    whileHover={{
        cursor: "pointer",
        scale: 1.1
    }}
    transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
        duration: 0.5
    }}
    onMouseEnter={MouseEnter}
    onMouseLeave={MouseLeave}
    className='p-5 border-cyan-400 border-2 rounded-md md:w-[20vw] w-[90vw] md:m-0 mt-5 m-auto relative shadow-md hover:shadow-lg shadow-cyan-300 transition-all'>
        <p className='absolute right-3 top-2 font-bold dark:text-white arrow'><i class="fa-solid fa-arrow-right"></i></p>
        <p className='dark:text-gray-300 text-center text-xl'><span><i class="fa-solid fa-certificate"></i></span> Coursera</p>
        <hr className='border-2 border-white my-3' />
        <h1 className='dark:text-white font-bold text-3xl text-center'><span>{img}</span> {provider}</h1>
        <p className='dark:text-white font-bold text-lg mt-5'>{desc}</p>
        <p className='dark:text-gray-400'>{type}</p>
    </motion.div>
  )
}

export default Aboutcertificatecard