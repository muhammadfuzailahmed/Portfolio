import React from 'react'

function Button({title, bg, bgHover}) {
  return (
    <button className={`dark:text-white font-bold border-3 border-cyan-400 px-3 w-46 py-1.5 rounded-md cursor-pointer ${bg} ${bgHover}`}>{title}</button>
  )
}

export default Button