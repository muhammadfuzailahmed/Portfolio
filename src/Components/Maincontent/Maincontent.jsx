import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'

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

    <section id='projects'>
        <Project />
    </section>

    <section id='contact'>
        <Contact />
    </section>
    </>
  )
}

export default Maincontent