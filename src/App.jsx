import { useRef } from 'react'
import { motion, useScroll } from "framer-motion";
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ScrollBtn from './components/ScrollBtn'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar';


function App() {
  const homeRef = useRef('null');
  const aboutRef = useRef('null');
  const skillsRef = useRef('null');
  const projectsRef = useRef('null');
  const contactRef = useRef('null');



  return (
    <div >
      <ProgressBar />
      <NavBar homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        ref={homeRef}>
        <Hero />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        ref={aboutRef}

      >
        <About />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        ref={skillsRef}>
        <Skills />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        ref={projectsRef}>
        <Projects />
      </motion.section>
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        ref={contactRef}>
        <Contact />
      </motion.section>
      <Footer />

      <ScrollBtn />
    </div>
  )
}

export default App
