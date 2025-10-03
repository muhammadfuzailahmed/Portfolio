import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Projects } from '../../Data/Projects'
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import {motion} from "motion/react";


const normalize = s => decodeURIComponent(s).trim().toLowerCase();
function Projectid() {
    const ImgRef = useRef(null)

    const move = (dir = 1) => {
        const el = ImgRef.current;
        el.scrollBy({
            left: dir * el.clientWidth * 1,
            behavior: "smooth"
            
        })
    }
    useEffect(() => {
        window.scrollTo({top: 0,
            left: 0,
            behavior: "instant"
        })
    }, [])
    let {projectid} = useParams()
    const id = normalize(projectid)
    let project = Projects.find(p => normalize(p.title) === id) 
    if(!project) return <h1 className='dark:text-white'>Not found</h1>
  return (
    <div className='w-full min-h-screen dark:bg-[#0d0e0e]'>
        <div className='w-full h-14 sticky top-0 backdrop-blur-xl'></div>
        <motion.div 
        initial={{
            opacity: 0,
            y: 10
        }}
        animate={{
            opacity: 1,
            y: 0
        }}
        className='md:flex items-center justify-between px-10'>
            <Link to="/projects">
            <p className='dark:text-white transition-all hover:text-gray-500 cursor-pointer'><span className='mr-5'><i class="fa-solid fa-arrow-left"></i></span> Explore more projects</p></Link>
            <div className='md:mt-0 mt-5 md:flex-row flex'>
                <Link to={project.liveDemo} target='_blank'>
                <Button title="Live Demo" bg="transparent" bgHover="hover:bg-cyan-500"/>
                </Link>
                <span className='ml-3'>
                    <Link to={project.sourceCode} target='_blank'>
                    <Button title="GitHub" bg="bg-cyan-500" bgHover="hover:bg-transparent"/>
                    </Link>
                    </span>
            </div>
        </motion.div>
        <div className='px-10 mt-8'>
        <motion.h1
        initial={{
            opacity: 0,
            y: 35
        }}
        animate={{
            opacity: 1,
            y: 0
        }}
        transition={{
            duration: 0.5
        }}
        className='dark:text-white font-bold text-4xl'>{project.title}</motion.h1>
        <motion.p
        initial={{
            opacity: 0,
            y: 35
        }}
        animate={{
            opacity: 1,
            y: 0
        }}
        transition={{
            delay: 0.5,
            duration: 0.5
        }}
        className='mt-2 dark:text-white'>{project.shortDesc}</motion.p>
        <motion.div 
        initial={{
            opacity: 0,
            y: 35
        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        viewport={{
            once: "true"
        }}
        transition={{
            delay: 1,
            duration: 0.5
        }}
        className='my-8 md:w-[70%] w-[95%] md:h-120 h-68 m-auto bg-gray-600 rounded-md'>
            <video controls muted autoPlay src={project.video}></video>
        </motion.div>

        <motion.div 
        className='mt-20 md:flex justify-between md:px-10'>
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
                amount: 0.5
            }}
            transition={{
                duration: 0.5
            }}
            className='md:w-[70%] mt-10'>
                <h1 className='dark:text-white font-bold text-3xl md:text-left text-center'>Description</h1>
                {project.fullDesc.map(desc => (
                    <p className='mt-3 dark:text-white md:text-left text-justify'>{desc}</p>
                ))}
            </motion.div>
            <motion.div 
            initial={{
                opacity: 0,
                x: 35
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{
                once: "true",
                amount: 0.5
            }}
            transition={{
                delay: 0.2,
                duration: 0.5
            }}
            className='mt-10 md:w-[30%] md:text-center'>
                <h1 className='dark:text-white font-bold text-3xl text-center'>Tech Stack</h1>
                <div className='mt-10'>
                {project.techSTack.map(tech => (
                    <span className='dark:text-white ml-2 px-2 py-1 bg-gray-300 dark:bg-gray-600 font-bold cursor-pointer rounded-sm'>{tech}</span>
                ))}
                </div>
            </motion.div>
        </motion.div>

        <motion.div
        className='mt-20 md:flex justify-between md:px-10'>
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
                amount: 0.5
            }}
            transition={{
                duration: 0.5
            }}
            className='md:w-[70%] mt-10'>
                <h1 className='dark:text-white font-bold text-3xl md:text-left text-center'>Key Features</h1>
                <ul className='w-[90%]'>
                {project.keyFeatures.map(feature => (
                    <li className='mt-2 dark:text-white list-disc'>{feature}</li>
                ))}
                </ul>
            </motion.div>
            <motion.div 
            initial={{
                opacity: 0,
                x: 35
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{
                once: "true",
                amount: 0.5
            }}
            transition={{
                delay: 0.2,
                duration: 0.5
            }}
            className='mt-10 md:w-[30%] text-center'>
                <h1 className='dark:text-white font-bold text-3xl text-center'>Timeline</h1>
                <div className='mt-10'>
                <ul>
                {project.timeLine.map(timeline => (
                    <div className='w-86 m-auto'>
                    <div className='dark:text-white font-bold rounded-sm w-86 mb-2 flex items-center justify-between text-lg border-b-2 border-gray-500'>
                        <p>Duration:</p>
                        <p>{timeline.duration}</p>
                    </div>
                    <div className='dark:text-white font-bold rounded-sm w-86 mb-2 flex items-center justify-between text-lg border-b-2 border-gray-500'>
                        <p>Completed:</p>
                        <p>{timeline.isCompleted}</p>
                    </div>
                    <div className='dark:text-white font-bold rounded-sm w-86 mb-2 flex items-center justify-between text-lg border-b-2 border-gray-500'>
                        <p>Status:</p>
                        <p>{timeline.status}</p>
                    </div>
                    </div>
                ))}
                </ul>
                </div>
            </motion.div>
        </motion.div>

        <motion.div
        className='mt-20 md:px-10'>
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
                amount: 0.5
            }}
            transition={{
                delay: 0.2,
                duration: 0.5
            }}
            >
            <h1 className='font-bold text-3xl dark:text-white mt-10'>What I learned</h1>
            <div className='mt-5'>

                {project.learning.map(learned => (
                <li className='mt-2 dark:text-white list-disc'>{learned}</li>
            ))}
            </div>
            </motion.div>
        </motion.div>

         <motion.div
         className='mt-20 md:px-10'>
            <motion.div
            initial={{
                opacity: 0,
                x: 35
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{
                once: "true",
                amount: 0.5
            }}
            transition={{
                delay: 0.2,
                duration: 0.5
            }}
            >
            <h1 className='font-bold text-3xl dark:text-white mt-10'>Some Snapshots</h1>
            <div className='md:w-[40%] w-[100%] mt-10 m-auto'>
                    <div className='relative'>
                        <p onClick={()=> move(-1)} className='font-bold text-cyan-400 absolute left-0 md:top-32 top-21 text-3xl cursor-pointer'><i class="fa-solid fa-angle-left"></i></p>
                    </div>
                <div className='relative'>
                        <p onClick={()=> move(1)} className='font-bold text-cyan-400 absolute right-0 md:top-32 top-21 text-3xl cursor-pointer'><i class="fa-solid fa-angle-right"></i></p>
                    </div>
                <div ref={ImgRef} className='flex flex-nowrap overflow-x-auto scroll-smooth py-2 no-scrollbar'>
                {project.snapShots.map(pic => (
                    <img className='border-2 border-cyan-400 h-48 md:h-68 w-[100%] flex-none rounded-lg md:object-cover shadow-sm cursor-pointer' src={pic} alt="img" />
                ))}    
                </div>
            </div>
            </motion.div>
        </motion.div>
                

        <motion.div
        className='mt-10 md:px-10 py-10'>
            <NavHashLink to="/#projects">
            <motion.p 
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 0.5
            }}
            viewport={{
                once: "true",
                amount: 0.9
            }}
            className='dark:text-white transition-all hover:text-gray-500 cursor-pointer inline-block'><span className='mr-5'><i class="fa-solid fa-arrow-left"></i></span> Back</motion.p></NavHashLink>
        </motion.div>
        </div>
    </div>
  )
}

export default Projectid