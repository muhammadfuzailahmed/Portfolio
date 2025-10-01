import React from 'react'
import Aboutcertificatecard from '../Cards/Aboutcertificatecard'
import {motion} from 'motion/react'

function Certificates() {
  return (
    <>
    <div className='w-full md:h-[60vh] dark:bg-[#0d0e0e]'>
    <div className='md:w-[50vw] m-auto'>
                      <motion.h1
                      initial={{
                        opacity: 0
                      }}
                      whileInView={{
                        opacity: 1
                      }}
                      viewport={{
                        once: "true"
                      }}
                      transition={{
                        duration: 1
                      }}
                      className='dark:text-white font-bold text-4xl text-center pt-10'><span><i class="fa-solid fa-graduation-cap"></i></span> Certificates</motion.h1>
                      <div className='md:w-[45vw] m-auto mt-10 md:flex items-center justify-between'>
                          <Aboutcertificatecard redirectTo="/certificates/meta" provider="Meta"desc="Front-End Web Developer" type="Course Specialization" img={<i class="fa-brands fa-meta"></i>} />
                          <Aboutcertificatecard redirectTo="/certificates/google" provider="Google"desc="Programming in Python" type="Crash course" img={<i class="fa-brands fa-google"></i>} />
                      </div>
                  </div>
                  </div>
    </>
  )
}

export default Certificates