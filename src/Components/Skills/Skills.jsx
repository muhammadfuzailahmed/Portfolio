import React, { useState } from 'react'
import Webdevelopment from './Webdevelopment'
import Programminglanguages from './Programminglanguages'
import Extras from './Extras'
import {motion} from 'motion/react'

const tabs = [
    {
        id: "web",
        label: "Web Development"
    },
    {
        id: "programming",
        label: "Programming Languages"
    },
    {
        id: "extra",
        label: "Extras"
    },
]


function Skills() {
    const [tab, setTab] = useState("web")
  return (
    <div className='w-full md:min-h-[100vh] min-h-[90vh] pt-5 dark:bg-[#0d0e0e] overflow-hidden'>
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
          amount: 0.8
        }}
        transition={{
          duration: 0.5
        }}
        >
        <h1 className='dark:text-white text-center text-5xl font-bold pt-10'>Skills</h1>
        <div className='w-40 h-2 bg-cyan-400 m-auto rounded-lg mt-2'></div>
        </motion.div>
        <div className='mt-10 md:w-[80vw] w-[90vw] m-auto text-center py-5'>
            {
                tabs.map(t => (
                    <motion.button
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
                    amount: 0.8
                    }}
                    transition={{
                    duration: 0.5
                    }}
                    key={t.id} className={`md:px-4 px-2 text-md py-2 font-bold cursor-pointer hover:text-cyan-400 transition-all 
                        ${tab === t.id ? 'text-cyan-400' : 'dark:text-white'}`}
                        onClick={() => setTab(t.id)}>{t.label}{console.log(tab)}</motion.button>  
                    ))
                }
                <motion.hr
                initial={{
                opacity: 0,
                width: 0
                }}
                whileInView={{
                opacity: 1,
                width: "100%"
                }}
                viewport={{
                once: "true",
                amount: 0.8
                }}
                transition={{
                duration: 0.7
                }}
                className=' h-1 bg-cyan-400 mt-1.5 rounded-full m-auto' />

            {tab === "web" && <Webdevelopment />}
            {tab === "programming" && <Programminglanguages />}
            {tab === "extra" && <Extras />}
        </div>
    </div>
  )
}

export default Skills