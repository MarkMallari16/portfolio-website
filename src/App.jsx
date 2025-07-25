
import './App.css'
import { motion } from "framer-motion";
import About from './components/About'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ScrollBtn from './components/ScrollBtn'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar';
import Loading from './components/Loading';
import useScrollSection from './hooks/useScrollSection';
import useLoading from './hooks/useLoading';
import NewContact from "./components/NewContact";

function App() {
  const { homeRef, aboutRef, skillsRef, projectsRef, contactRef, scrollIntoSection } = useScrollSection();
  const isLoading = useLoading();

  const fadeAnimationVariants = {
    hidden: { opacity: 0, transform: 0 },
    visible: { opacity: 1, transform: 1 },
  }
  const bg = {
    backgroundImage: `
    linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
    radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
  `,
    backgroundSize: '32px 32px, 32px 32px, 100% 100%',
  }

  return (
    isLoading ? (
      <Loading />
    ) : (
      <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeAnimationVariants} >
        <div className='relative md:px-10 mx-auto max-w-6xl w-full' >
          <ProgressBar />
          <section ref={homeRef}>
            <NavBar homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} scrollIntoSection={scrollIntoSection} />
          </section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeAnimationVariants}>
            <Hero projectsRef={projectsRef} />
          </motion.section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeAnimationVariants}
            ref={aboutRef}
          >
            <About contactRef={contactRef} />
          </motion.section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeAnimationVariants}
            ref={skillsRef}>
            <Skills />
          </motion.section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeAnimationVariants}
            ref={projectsRef}>
            <Projects />
          </motion.section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeAnimationVariants}
            ref={contactRef}>
            <NewContact />
          </motion.section>
          <Footer homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} scrollIntoSection={scrollIntoSection} />
          <ScrollBtn />
        </div>
      </motion.div>
    )
  )
}

export default App
