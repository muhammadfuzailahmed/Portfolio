import React,{useEffect, useState} from 'react'
import {motion} from 'motion/react'
import Mainvideo from '../../assets/Mainvideo.mp4'
import Button from '../Button/Button'
 import { toast } from 'react-toastify';

function Hero() {
    const [downloadSuccessfull, isDownloadSuccessfull] = useState(false)
    useEffect(() => {
            window.scrollTo({top: 0,
                left: 0,
                behavior: "instant"
            })
        }, [])

    function DownloadResume() {
        const link = document.createElement("a")
        link.href = "../../public/Resume.pdf";
        link.setAttribute("download", "My_resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
        isDownloadSuccessfull(true)
    }

  return (
    <>
    <div className='w-full h-[90vh] dark:bg-[#0d0e0e]'>
        <div className='md:flex items-center justify-between md:px-40 md:pt-40 pt-10'>
            {/* left */}
            <div className='md:w-[45vw] w-[90vw] md:m-0 m-auto text-center md:text-left'>
                <h1 className='font-bold md:text-6xl text-4xl dark:text-white'>I'm <motion.span 
                whileHover={{
                    color: "cyan",
                    cursor:"pointer"
                }}
                transition={{
                    duration: 0.3
                }}
                className='dark:text-cyan-400 inline-block'>Fuzail</motion.span>  <div>Frontend Developer & React Enthusiast</div></h1>
                <p className='dark:text-white md:mt-10 mt-5 md:w-[35vw] text-justify md:font-[600]'><span className='relative bottom-1.5 right-0.5'><i class="fa-solid fa-quote-left"></i></span>Built a feature-rich e-commerce demo using React and loalStorage – with login/signup, product pages, Filters, cart totals, checkout, and order history. Passionate about clean UI, responsive design, actively expanding my skills through D3A and Android development in my upcoming semester.<span className='relative bottom-1.5 left-0.5'><i class="fa-solid fa-quote-right"></i></span></p>
                <div className='flex items-center gap-4 mt-5 md:mb-0 mb-5'>
                    <div>
                        <div onClick={DownloadResume}>
                    <Button title="Download Resume" bg="tranparent" bgHover="hover:bg-cyan-400"/>
                        </div>
                    </div>
                    <div>
                    <Button title="Let's Connect"  bg="bg-cyan-500" bgHover="hover:bg-transparent"/>
                    </div>
                </div>
            </div>
            {/* right */}
            <div className='md:w-[30vw] w-[95vw] md:m-0 m-auto md:h-[50vh] relative md:mt-0 mt-15'>
                <video loop autoPlay muted className='w-[100%] h-[100%] object-cover rounded-lg cursor-pointer' src={Mainvideo}></video>
            </div>
        </div>
        {
            downloadSuccessfull && toast.success("Downloaded Successfully")
        }
    </div>
    </>
  )
}

export default Hero