import React, { useState } from 'react'
import Webdevelopment from './Webdevelopment'
import Programminglanguages from './Programminglanguages'
import Extras from './Extras'

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
    <div className='w-full min-h-[120vh] dark:bg-[#0d0e0e]'>
        <h1 className='dark:text-white text-center text-5xl font-bold pt-10'>Skills</h1>
        <div className='w-40 h-2 bg-cyan-400 m-auto rounded-lg mt-2'></div>
        <div className='h-96 mt-10 w-[80vw] m-auto'>
            {
                tabs.map(t => (
                  <button key={t.id} className={`px-4 py-2 font-bold cursor-pointer hover:text-cyan-400 transition-all 
                ${tab === t.id ? 'text-cyan-400' : 'text-white'}`}
                onClick={() => setTab(t.id)}>{t.label}{console.log(tab)}</button>  
                ))
            }

            {tab === "web" && <Webdevelopment />}
            {tab === "programming" && <Programminglanguages />}
            {tab === "extra" && <Extras />}
        </div>
    </div>
  )
}

export default Skills