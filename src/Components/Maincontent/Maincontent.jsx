import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'

function Maincontent() {
  return (
    <>
    <section id='home'>
        <Hero />
    </section>

    <section id='about'>
        <About />
    </section>
    </>
  )
}

export default Maincontent