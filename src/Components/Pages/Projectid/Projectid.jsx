import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Projects } from '../../Data/Projects'
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';

const normalize = s => decodeURIComponent(s).trim().toLowerCase();
function Projectid() {
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
        <div className='flex items-center justify-between px-10'>
            <Link to="/projects">
            <p className='dark:text-white transition-all hover:text-gray-500 cursor-pointer'><span className='mr-5'><i class="fa-solid fa-arrow-left"></i></span> Back</p></Link>
            <div>
                <Button title="Live Deomo" bg="transparent" bgHover="hover:bg-cyan-500"/>
                <span className='ml-3'><Button title="GitHub" bg="bg-cyan-500" bgHover="hover:bg-transparent"/></span>
            </div>
        </div>
        <div className='px-10 mt-8'>
        <h1 className='dark:text-white font-bold text-4xl'>{project.title}</h1>
        <p className='mt-2 dark:text-white'>{project.shortDesc}</p>
        <div className='my-8 w-[70%] m-auto bg-gray-600 h-120 rounded-sm'>

        </div>

        <div className='border-t-2 border-white mt-20 flex justify-between px-10'>
            <div className='w-[70%] mt-10'>
                <h1 className='dark:text-white font-bold text-3xl'>Description</h1>
                {project.fullDesc.map(desc => (
                    <p className='mt-3 dark:text-white'>{desc}</p>
                ))}
            </div>
            <div className='mt-10 w-[30%] text-center'>
                <h1 className='dark:text-white font-bold text-3xl'>Tech Stack</h1>
                <div className='mt-10'>
                {project.techSTack.map(tech => (
                    <span className='dark:text-white ml-2 px-2 py-1 bg-gray-400 dark:bg-gray-600 font-bold cursor-pointer rounded-sm'>{tech}</span>
                ))}
                </div>
            </div>
        </div>

        <div className='border-t-2 border-white mt-20 flex justify-between px-10'>
            <div className='w-[70%] mt-10'>
                <h1 className='dark:text-white font-bold text-3xl'>Key Features</h1>
                <ul>
                {project.keyFeatures.map(feature => (
                    <li className='mt-2 dark:text-white list-disc'>{feature}</li>
                ))}
                </ul>
            </div>
            <div className='mt-10 w-[30%] text-center'>
                <h1 className='dark:text-white font-bold text-3xl'>Timeline</h1>
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
            </div>
        </div>

        <div  className='border-t-2 border-white mt-20 px-10'>
            <h1 className='font-bold text-3xl dark:text-white mt-10'>What I learned</h1>
            <div className='mt-5'>

                {project.learning.map(learned => (
                <p className='mt-2 dark:text-white'>{learned}</p>
            ))}
            </div>
        </div>

        <div className='border-t-2 border-white mt-10 px-10 py-10'>
            <Link to="/#home">
            <p className='dark:text-white transition-all hover:text-gray-500 cursor-pointer'><span className='mr-5'><i class="fa-solid fa-arrow-left"></i></span> Back to Home</p></Link>
        </div>
        </div>
    </div>
  )
}

export default Projectid