import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Calendarimg from '../../assets/About/Calendarimg.jpg'
import Codeimg from '../../assets/About/Codeimg.png'
import Pythonimg from '../../assets/About/Pythonimg.png'
import Webimg from '../../assets/About/Webimg.png'
import reactLogo from '../../assets/About/react.svg'
import {motion} from 'motion/react'
import Aboutcard from '../Cards/Aboutcard';

function About() {

  const aboutDetails = [
    {
      id: uuidv4(),
      img: Codeimg,
      title: "Started with C++ & C#",
      description: "Began with learnig programming fundamentals with C++and C#."
    },
    {
      id: uuidv4(),
      img: Pythonimg,
      title: "Explored Python",
      description: "Dived deeper into object-orlented programmmg concepts using Python."
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
      description: "Dived deeper into object-orlented programmmg concepts using Python."
    },
  ]

  return (
    <div className='w-full min-h-screen dark:bg-[#0d0e0e] pt-10'>
        <div className='text-center'>
        <h1 className='dark:text-white font-bold text-5xl'>About Me</h1>
        <div className='w-52 h-2 bg-cyan-400 m-auto rounded-lg mt-3'></div>
        </div>
        <div>
            <div className="relative w-[95vw] md:w-[35vw] mx-auto mt-12">
            {/* vertical line centered in the 64px icon column */}
            <span
              aria-hidden
              className="pointer-events-none absolute top-0 bottom-0 left-[25px] w-[2px] bg-gray-600 dark:bg-gray-700"
            />

            <ul className="grid grid-cols-[64px,1fr] gap-x-4">
              {aboutDetails.map(obj => (
                <li key={obj.id} className="contents">
                  <div className="relative col-[1] flex items-center justify-center">
                    <img
                      src={obj.img}
                      alt="img"
                      className="w-12 h-12 rounded-full z-10 bg-black/10 dark:bg-white/10"
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

        </div>

        <div className='md:mt-10 mt-15'>
              <hr className='bg-gray-800 md:w-[70vw] w-[90vw] h-1 m-auto' />
            <div className='w-[70vw] md:h-[12vh] h-auto m-auto md:flex items-center'>
                <Aboutcard title="LinkedIn" />
                <Aboutcard title="GitHub" />
                <Aboutcard title="Instagram" />
            </div>
            <hr className='bg-gray-800 md:w-[70vw] w-[90vw] h-1 m-auto' />
        </div>

        <div>
              <div className='w-[80vw] m-auto'>
                  {/* {Render cards here} */}
              </div>
        </div>
    </div>
  )
}

export default About