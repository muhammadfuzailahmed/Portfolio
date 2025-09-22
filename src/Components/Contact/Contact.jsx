import React from 'react'
import contact from '../../assets/Contact/contact.png'
import Button from '../Button/Button.jsx'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='w-full h-[80vh] bg-[#0d0e0e]'>
        <div className='border-2 border-cyan-400 rounded-sm w-[80vw] m-auto h-96'>
            <h1 className='dark:text-white text-center font-bold text-5xl'>Contact</h1>
            <div className='w-52 h-2 bg-cyan-400 m-auto rounded-lg mt-3 mb-16'></div>
            <div className='flex items-center justify-between px-10'>
                <div>
                    <img className=' w-[200px] rounded-full border-2 border-cyan-400' src={contact} alt="" />
                </div>
                <div>
                    <h1 className='dark:text-white font-bold text-5xl w-[100%]'>Let's work together on your next project!</h1>
                    <p className='my-5 dark:text-gray-300 text-xl text-center'>Tell me about your idea</p>
                    <div className='mt-4'>
                    <Link to="/contact">
                    <Button title="Let's-get-in-touch" bg="transparent" bgHover="hover:text-cyan-400"/>
                    </Link>
                    <div className='flex gap-4 mt-5'>
                        <Link>
                            <p className='dark:text-white'><span><i class="fa-solid fa-clock"></i></span> Avg. respone - within 24hrs</p>
                        </Link>
                        <Link>
                            <p className='dark:text-white'><span><i class="fa-solid fa-envelope"></i></span> name.mf30@gmail.com</p>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact