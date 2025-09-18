import React, { useState } from 'react'

const tabs = [
    {
        id: "js",
        label: "JavaScript"
    },
    {
        id: "react",
        label: "React"
    },
    {
        id: "Others",
        label: "Others"
    },
]


function Skills() {
    const [tab, setTab] = useState("js")
  return (
    <div className='w-full h-screen dark:bg-[#0d0e0e]'>
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

            {tab === "js" && <div className='dark:text-white'>JavaScript content here</div>}
            {tab === "react" && <div className='dark:text-white'>React content here</div>}
            {tab === "Others" && <div className='dark:text-white'>Other content here</div>}
        </div>
    </div>
  )
}

export default Skills