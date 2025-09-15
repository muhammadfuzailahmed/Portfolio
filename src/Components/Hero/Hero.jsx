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
            <div className='md:w-[30vw] md:h-[50vh] relative'>
                <video loop autoPlay muted className='w-[100%] h-[100%] object-cover rounded-lg cursor-pointer' src={Mainvideo}></video>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Hero