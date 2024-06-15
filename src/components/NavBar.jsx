import React, { useState } from 'react'

function NavBar({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollIntoSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <nav className=' mx-6 lg:mx-36'>
      <div className='navbar flex justify-between items-center mt-5 bg-base-100'>
        <a className='text-2xl font-bold '>
          Mark.<span className='text-secondary'>Mallari</span>
        </a>


        <label className="btn btn-square swap swap-rotate lg:hidden" onClick={toggleMenu}>

          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

          {/* close icon */}
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

        </label>
        <div className={`lg:flex items-center gap-8 ${isMenuOpen ? 'flex' : 'hidden'}`} >
          <a href='#home' onClick={() => scrollIntoSection(homeRef)}>Home</a>
          <a href='#about' onClick={() => scrollIntoSection(aboutRef)}>About</a>
          <a href='#skills' onClick={() => scrollIntoSection(skillsRef)}>Skills</a>
          <a href='#projects' onClick={() => scrollIntoSection(projectsRef)}>Projects</a>
          <a href='#contacts' onClick={() => scrollIntoSection(contactRef)}>Contact</a>
        </div>
        <label className="cursor-pointer place-items-center ease-in-out hidden lg:grid">
          <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>

      </div>
    </nav>

  )
}

export default NavBar