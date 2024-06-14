import { useEffect, useRef, useState } from 'react'
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ScrollBtn from './components/ScrollBtn'
import Contact from './components/Contact'
function App() {
  const homeRef = useRef('null');
  const aboutRef = useRef('null');
  const skillsRef = useRef('null');
  const projectsRef = useRef('null');
  const contactRef = useRef('null');

  return (
    <div className='relative'>
      <NavBar homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
      <section ref={homeRef}>
        <Hero />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>

      <ScrollBtn />
    </div>
  )
}

export default App
