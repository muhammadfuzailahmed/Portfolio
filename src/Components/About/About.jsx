import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Calendarimg from '../../assets/About/Calendarimg.jpg'
import Codeimg from '../../assets/About/Codeimg.png'
import Pythonimg from '../../assets/About/pythonimg.png'
import Webimg from '../../assets/About/Webimg.png'
import reactLogo from '../../assets/About/react.svg'
import {motion} from 'motion/react'
import Aboutcard from '../Cards/Aboutcard';
import Aboutcertificatecard from '../Cards/Aboutcertificatecard';

function About() {

  const aboutDetails = [
    {
      id: uuidv4(),
      img: Codeimg,
      title: "Started with C++ & C#",
      description: "Began with learning programming fundamentals with C++and C#."
    },
    {
      id: uuidv4(),
      img: Pythonimg,
      title: "Explored Python",
      description: "Dived deeper into object-oriented programming concepts using Python."
    },
    {
      id: uuidv4(),
      img: Webimg,
      title: "Focused on Web Dev (HTML, CSS, JS)",
      description: "Dedicated my attention to web development. learning HTML, CSS, and JavaScript."
    },
    {
      id: uuidv4(),
      img: reactLogo,
      title: "Built E-commerce with React",
      description: "Developed an E-Commerce website using React to apply my web development skills."
    },
    {
      id: uuidv4(),
      img: Calendarimg,
      title: "Next: DSA & Android App Development (2025)",
      description: "Dived deeper into object-oriented programming concepts using Python."
    },
  ]

  return (
    <div className='w-full min-h-[130vh] dark:bg-[#0d0e0e] py-2'>
        <motion.div
        initial={{
          opacity: 0,
          x: -35
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: "true",
        }}
        transition={{
          duration: 0.5
        }}
        > {/*Animation */}
        <div className='text-center'>
        <h1 className='dark:text-white font-bold text-5xl'>About Me</h1>
        <div className='w-52 h-2 bg-cyan-400 m-auto rounded-lg mt-3'></div>
        </div>
        </motion.div>
        <motion.div 
        initial={{
          opacity: 0,
          y: 45,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: "true",
          amount: 0.5
        }}
        transition={{
          duration: 1
        }}
        >
            <div className="relative w-[95vw] md:w-[35vw] mx-auto mt-12">
            <span
              aria-hidden
              className="pointer-events-none absolute top-0 bottom-0 left-[25px] w-[2px] bg-gray-600 dark:bg-[#7A7A73]"
            />

            <ul className="grid grid-cols-[64px,1fr] gap-x-4">
              {aboutDetails.map(obj => (
                <li key={obj.id} className="contents">
                  <div className="relative col-[1] flex items-center justify-center">
                    <img
                      src={obj.img}
                      alt="img"
                      className="w-12 h-12 rounded-full z-10 bg-black/10 dark:bg-white/10 cursor-pointer"
                    />
                  </div>
                  <div className="col-[2] py-4">
                    <h3 className="font-bold text-xl mb-1 dark:text-white">{obj.title}</h3>
                    <p className="dark:text-gray-400">{obj.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </ motion.div>

        <div className='md:mt-10 mt-15'>
              <motion.hr
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              transition={{
                duration: 0.75
              }}
              className='bg-[#7A7A73] md:w-[70vw] w-[90vw] h-1 m-auto' />
            <motion.div
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: "true",
              amount: "all"
            }}
            transition={{
              duration: 1
            }}
            className='w-[70vw] md:h-[12vh] h-auto m-auto md:flex items-center'>
                <Aboutcard title="LinkedIn" location="https://www.linkedin.com/in/mfuzailahmed/"/>
                <Aboutcard title="GitHub" location="https://github.com/muhammadfuzailahmed" />
                <Aboutcard title="Instagram" location="https://www.instagram.com/muhammad_fuzail_30/" />
            </motion.div>
            <motion.hr
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            transition={{
              duration: 0.75
            }}
            viewport={{
              once: "true",
              amount: "all"
            }}
            className='bg-[#7A7A73] md:w-[70vw] w-[90vw] h-1 m-auto' />
        </div>

        <div>
              <div className='md:w-[50vw] m-auto'>
                  <motion.h1
                  initial={{
                    opacity: 0
                  }}
                  whileInView={{
                    opacity: 1
                  }}
                  transition={{
                    duration: 1
                  }}
                  className='dark:text-white font-bold text-4xl text-center mt-10'><span><i class="fa-solid fa-graduation-cap"></i></span> Certificates</motion.h1>
                  <div className='md:w-[45vw] m-auto mt-10 md:flex items-center justify-between'>
                      <Aboutcertificatecard redirectTo="/certificates/meta" provider="Meta"desc="Front-End Web Developer" type="Course Specialization" img={<i class="fa-brands fa-meta"></i>} />
                      <Aboutcertificatecard redirectTo="/certificates/google" provider="Google"desc="Programming in Python" type="Crash course" img={<i class="fa-brands fa-google"></i>} />
                  </div>
              </div>
        </div>
    </div>
  )
}

export default About