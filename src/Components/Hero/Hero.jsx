import React from 'react'
import Mainvideo from '../../assets/Mainvideo.mp4'
import Button from '../Button/Button'

function Hero() {
  return (
    <>
    <div className='w-full h-[90vh] dark:bg-[#0d0e0e]'>
        <div className='flex items-center justify-between px-40 pt-40'>
            {/* left */}
            <div className='md:w-[45vw]'>
                <h1 className='font-bold text-6xl dark:text-white'>I'm <span className='dark:text-cyan-400'>Fuzail</span>  <div>Frontend Developer & React Enthusiast</div></h1>
                <p className='dark:text-white mt-10 md:w-[35vw] font-[600]'><span className='relative bottom-1.5 right-0.5'><i class="fa-solid fa-quote-left"></i></span>Built a feature-rich e-commerce demo using React and loalStorage – with login/signup, product pages, Filters, cart totals, checkout, and order history. Passionate about clean UI, responsive design, actively expanding my skills through D3A and Android development in my upcoming semester.<span className='relative bottom-1.5 left-0.5'><i class="fa-solid fa-quote-right"></i></span></p>
                <div className='flex items-center gap-4 mt-5'>
                    <div>
                <Button title="Download Resume"  bg="tranparent" bgHover="hover:bg-cyan-400"/>
                    </div>
                    <div>
                    <Button title="Let's Connect"  bg="bg-cyan-500" bgHover="hover:bg-transparent"/>
                    </div>
                </div>
            </div>
            {/* right */}
            <div className='md:w-[28vw] relative'>
                <div className='md:w-[26vw] md:h-[30vh] border-4 border-black m-auto dark:border-gray-700 rounded-lg'>
                    <video loop autoPlay muted className='w-[100%] h-[100%] object-cover rounded-sm cursor-pointer' src={Mainvideo}></video>
                </div>
                <div className='absolute bottom-0 md:w-full h-[1.5vh] bg-gray-500 dark:bg-gray-900 rounded-lg'>
                    <div className='w-[6vw] h-1.5 bg-gray-800 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-lg'>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Hero