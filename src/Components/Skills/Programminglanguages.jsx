import React from 'react'
import {motion} from 'motion/react'

const prograamingLanguagesSkills = [
    {
        label: "C++",
        completed: "90%"
    },
    {
        label: "C#",
        completed: "95%"
    },
    {
        label: "JavaScript",
        completed: "80%"
    },
    {
        label: "Python",
        completed: "70%"
    }
]

function Programminglanguages() {
   return (
    <div className='w-full mt-8'>
        {
            prograamingLanguagesSkills.map(skill => (
                <motion.div 
                whileHover={{
                cursor: "pointer",
                backgroundColor: "#000000",
                color: "#fff",
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
                className='mt-3 p-3 rounded-sm md:w-[30vw] m-auto dark:border-0 border-2 border-cyan-400'>
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

export default Programminglanguages