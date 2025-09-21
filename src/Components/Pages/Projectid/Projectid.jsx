import React from 'react'
import { useParams } from 'react-router-dom'
import { Projects } from '../../Data/Projects'
const normalize = s => decodeURIComponent(s).trim().toLowerCase();
function Projectid() {
    let {projectid} = useParams()
    const id = normalize(projectid)
    let project = Projects.find(p => normalize(p.title) === id) 
    if(!project) return <h1 className='dark:text-white'>Not found</h1>
  return (
    <div className='w-full min-h-screen dark:bg-[#0d0e0e]'>
        <div>
            
        </div>
        <p className='dark:text-white'>{project.title}</p>
    </div>
  )
}

export default Projectid