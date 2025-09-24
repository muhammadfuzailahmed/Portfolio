import React from 'react'
import { HashLink, NavHashLink } from 'react-router-hash-link';
import {motion} from 'motion/react'

function Scrolltotop() {
  function Top() {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }
  return (
    <>
    <motion.p
    onClick={Top}
    whileHover={{
            scale: 1.05,
            cursor: "pointer",
            color: "#fff",
            boxShadow: "0 0 10px cyan, 0 0 20px cyan, 0 0 30px cyan"
        }}
        transition={{
            duration: 0.3
        }}
    className='dark:text-white font-bold fixed bottom-10 right-5 text-3xl  border-2 border-cyan-400 rounded-[50%] p-5 dark:bg-[#0d0e0e] z-10'>
        <i className="fa-solid fa-angle-up"></i>
    </motion.p>
    </>
  )
}

export default Scrolltotop