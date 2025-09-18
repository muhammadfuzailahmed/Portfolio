import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'

function Maincontent() {
  return (
    <>
    <section id='home'>
        <Hero />
    </section>

    <section id='about'>
        <About />
    </section>

    <section id='skills'>
        <Skills />
    </section>
    </>
  )
}

export default Maincontent