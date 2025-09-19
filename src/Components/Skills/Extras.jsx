import React from 'react'
import {motion} from 'motion/react'

function Extras() {

    const ExtraSkills = [
    {
        label: "Object-Oriented Programming (OOP)",
        completed: "95%"
    },
    {
        label: "Data Structures & Algorithm",
        completed: "40%"
    },
    {
        label: "App Development",
        completed: "20%"
    }
]

   return (
    <div className='w-full mt-8'>
        {
            ExtraSkills.map(skill => (
                <motion.div 
                whileHover={{
                // scale: 1.02,
                cursor: "pointer",
                backgroundColor: "#000000",
                color: "#fff",
                width: "35vw",
                boxShadow: "5px 5px 15px 4px cyan"
                }}
                transition={{
                    duration: 0.45
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

export default Extras