import React, { useState } from 'react'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=' mx-6 lg:mx-40'>
      <div className='navbar flex justify-between items-center mt-5 bg-base-100'>
        <a className='text-2xl font-medium '>
          Mark.Dev
        </a>
        <div className='lg:hidden'>
          <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
        <div className={`lg:flex items-center gap-8`} >
          <a href=''>Home</a>
          <a href=''>About</a>
          <a href=''>Skills</a>
          <a href=''>Contact</a>
        </div>


      </div>
    </nav>

  )
}

export default NavBar