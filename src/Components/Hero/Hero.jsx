import React,{useEffect, useState} from 'react'
import {motion} from 'motion/react'
import ShopSpherevideo from '../../assets/Projects/React/ShopSphere/ShopSpherevideo.mp4'
import Button from '../Button/Button'
import { toast } from 'react-toastify';
import { NavHashLink } from 'react-router-hash-link';

function Hero() {
    const [downloadSuccessfull, isDownloadSuccessfull] = useState(false)

    async function DownloadResume() {
        try {
        const res = await fetch('/Resume.pdf', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch PDF');
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'My_resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();

        URL.revokeObjectURL(url);
    } catch (e) {
        window.open('/Resume.pdf', '_blank', 'noopener,noreferrer');
    }
        isDownloadSuccessfull(true)
    }

  return (
    <>
    <div className='w-full md:h-screen h-[95vh] dark:bg-[#0d0e0e]'>
        <div className='md:flex items-center justify-between md:px-30 md:pt-30 pt-10'>
            {/* left */}
            <div className='md:w-[45vw] w-[90vw] md:m-0 m-auto text-center md:text-left'>
                <motion.h1 
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: "true"
                }}
                transition={{
                    duration: 0.5
                }}
                className='font-bold md:text-6xl text-4xl dark:text-white'>I'm <motion.span 
                whileHover={{
                    color: "cyan",
                    cursor:"pointer"
                }}
                transition={{
                    duration: 0.3
                }}
                className='dark:text-cyan-400 inline-block'>Fuzail</motion.span>  <div>Frontend Developer & React Enthusiast</div></motion.h1>
                <motion.p 
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: "true"
                }}
                transition={{
                    delay: 0.5,
                    duration: 0.5
                }}
                className='dark:text-white md:mt-10 mt-5 md:w-[35vw] text-justify md:font-[600]'><span className='relative bottom-1.5 right-0.5'><i class="fa-solid fa-quote-left"></i></span>Built a feature-rich e-commerce demo using React and loalStorage – with login/signup, product pages, Filters, cart totals, checkout, and order history. Passionate about clean UI, responsive design, actively expanding my skills through DSA and Android development in my upcoming semester.<span className='relative bottom-1.5 left-0.5'><i class="fa-solid fa-quote-right"></i></span></motion.p>
                <motion.div
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: "true"
                }}
                transition={{
                    delay: 1,
                    duration: 0.5
                }}
                className='md:flex items-center gap-4 mt-5 md:mb-0 mb-5'>
                    <div className='md:mb-0 mb-3'>
                        <div onClick={DownloadResume}>
                    <Button title="Download Resume" bg="tranparent" bgHover="hover:bg-cyan-400"/>
                        </div>
                    </div>
                    <div>
                    <NavHashLink smooth to="/#contact">
                    <Button title="Let's Connect"  bg="bg-cyan-500" bgHover="hover:bg-transparent"/>
                    </NavHashLink>
                    </div>
                </motion.div>
            </div>
            {/* right */}
            <div className='md:w-[33vw] w-[95vw] md:m-0 m-auto md:h-[50vh] relative md:mt-0 mt-15'>
                <motion.video
                initial={{
                    opacity: 0,
                    y: 45
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: "true",
                    amount: 0.3
                }}
                transition={{
                    delay: 1.5,
                    duration: 0.5
                }}
                loop autoPlay muted className='w-[100%] h-[100%]  rounded-lg cursor-pointer' src={ShopSpherevideo}></motion.video>
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