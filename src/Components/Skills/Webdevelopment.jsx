import React from 'react'
import {motion} from 'motion/react'

const webDevelopmentSkills = [
    {
        label: "HTML5",
        completed: "90%"
    },
    {
        label: "CSS3",
        completed: "90%"
    },
    {
        label: "JavaScript",
        completed: "80%"
    },
    {
        label: "ReactJS",
        completed: "70%"
    },
    {
        label: "Tailwind CSS",
        completed: "90%"
    },
    {
        label: "Bootstrap",
        completed: "85%"
    },
]

function Webdevelopment() {
  return (
    <div className='w-full mt-8'>
        {
            webDevelopmentSkills.map(skill => (
                <motion.div 
                whileHover={{
                cursor: "pointer",
                scale: 1.10,
                boxShadow: "5px 5px 15px 4px cyan"
                }}
                transition={{
                    duration: 0.5
                }}
                initial={{
                    opacity: 0,
                    y: 25
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                once: "true",
                amount: "all"
                }}
                className='mt-3 p-3 rounded-sm  m-auto md:w-[30vw] dark:border-0 border-2 border-cyan-400'>
                    <div className='flex items-center justify-between'>
                        <p className='dark:text-white font-bold'>{skill.label}</p>
                        <p className='dark:text-white font-bold'>{skill.completed}</p>
                    </div>
                    <div className='mt-3'>
                        <div className={`h-2 rounded-full bg-cyan-400`} style={{ width: skill.completed }}>
                        </div>
                    </div>
                </motion.div>
            ))
        }   
    </div>
  )
}

export default Webdevelopment