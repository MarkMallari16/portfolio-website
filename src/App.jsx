import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
function App() {
  const [scrollVisible, setIsScrollVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0

      setIsScrollVisible(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className='relative'>
      <NavBar />
      <Hero />
      <About />
      <Skills />

      <div className={`fixed bottom-0 right-0 me-10 mb-10 ${scrollVisible ? '' : 'hidden'} transition-all ease-in-out`}>
        <button onClick={scrollToTop} className="btn bg-secondary text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default App
