import React from 'react'
import {motion} from 'motion/react'
import {Link} from 'react-router-dom'

function Aboutcard({title,location}) {
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
        className="card w-full md:w-1/3 h-16 md:h-full relative">
            <Link to={location} target='_blank'>
            <h1 className='font-bold text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-white'>{title}</h1>
            </Link>
    </motion.div>
  )
}

export default Aboutcard