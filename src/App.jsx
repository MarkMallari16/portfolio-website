import { Suspense, useRef, useState, useEffect } from 'react'
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
import Loading from './components/Loading';
import useScrollSection from './hooks/useScrollSection';


function App() {


  const [isLoading, setIsLoading] = useState(true);
  const { homeRef, aboutRef, skillsRef, projectsRef, contactRef, scrollIntoSection } = useScrollSection();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    isLoading ? (
      <Loading />
    ) : (
      <div className='min-h-screen relative'>

        <ProgressBar />
        <section>
          <NavBar homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} scrollIntoSection={scrollIntoSection}/>

        </section>
        <motion.section
          initial={{ opacity: 0, transform: 0 }}
          whileInView={{ opacity: 1, transform: 1 }}
          viewport={{ once: true }}
          ref={homeRef}>
          <Hero projectsRef={projectsRef} />
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          ref={aboutRef}

        >
          <About />
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          ref={skillsRef}>
          <Skills />
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          ref={projectsRef}>
          <Projects />
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          ref={contactRef}>
          <Contact />
        </motion.section>

        <Footer homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} scrollIntoSection={scrollIntoSection} />

        <ScrollBtn />
      </div>
    )


  )
}

export default App
