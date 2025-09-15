import React from 'react'
import {motion} from 'motion/react'

function Aboutcard({title}) {
  return (
    <motion.div
        whileHover={{
            scale: 1.1,
            cursor: "pointer",
            backgroundColor: "#000000"
        }}
        transition={{
            duration: 0.3
        }}
        className="card md:w-[33%] md:h-[100%] h-[20%] bg-green-500 relative">
            <h1 className='font-bold text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-white'>{title}</h1>
    </motion.div>
  )
}

export default Aboutcard