import React, { useState } from 'react'
import contact from '../../assets/Contact/contact.png'
import Button from '../Button/Button.jsx'
import { Link } from 'react-router-dom'
 import { toast } from 'react-toastify';

function Contact() {
    const [isCopied, setIsCopied] = useState(false)
     const CopyEmail = async () => {
     const Email = "name.mf30@gmailcom";
     await navigator.clipboard.writeText(Email)
     setIsCopied(true) 
        setTimeout(() => {
            setIsCopied(false)
        }, 2000);

    } 
  return (
    <div className='w-full min-h-[80vh] dark:bg-[#0d0e0e] md:pt-10 pt-20'>
        <div className='border-1 border-cyan-400 rounded-sm w-[80vw] m-auto py-8 shadow-lg shadow-cyan-400 hover:shadow-xl hover:cursor-pointer'>
            <h1 className='dark:text-white text-center font-bold text-5xl'>Contact</h1>
            <div className='w-52 h-2 bg-cyan-400 m-auto rounded-lg mt-3 mb-12'></div>
            <div className='md:flex items-center justify-between px-5'>
                <div>
                    <img className=' w-[200px] rounded-3xl border-2 border-cyan-400 m-auto md:mb-0 mb-5' src={contact} alt="" />
                </div>
                <div>
                    <h1 className='dark:text-white font-bold md:text-5xl text-3xl w-[100%] md:text-left text-center'>Let's work together on your next project!</h1>
                    <p className='my-5 dark:text-gray-300 text-xl text-center'>Tell me about your idea</p>
                    <div className='mt-4 md:text-left text-center'>
                    <Link to="/contact">
                    <Button title="Let's-get-in-touch &#8594;" bg="bg-cyan-500" bgHover="hover:bg-transparent"/>
                    </Link>
                    
                    {isCopied ? <span onClick={CopyEmail} className='md:ml-3'><Button title="Copied! &#10003;" bg="transparent" bgHover="hover:bg-cyan-400"/></span> : <span onClick={CopyEmail} className='md:ml-3'><Button title="Email me" bg="transparent" bgHover="hover:bg-cyan-400"/></span>}
                    <div className='md:flex gap-4 mt-5'>
                        <Link>
                            <p className='dark:text-white'><span><i class="fa-solid fa-clock"></i></span> Avg. respone: within 24 hrs &#xb7; Available for freelance/remote</p>
                        </Link>
                        <Link>
                            <p className='dark:text-white md:mt-0 mt-3'><span><i class="fa-solid fa-envelope"></i></span> name.mf30@gmail.com</p>
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