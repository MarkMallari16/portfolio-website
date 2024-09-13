import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Theme from './Theme';
import useScroll from '../hooks/useScroll';

function NavBar({ homeRef, aboutRef, skillsRef, projectsRef, contactRef, scrollIntoSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollVisible } = useScroll();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const fadeTopNameAnimationVariants = {
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const fadeTopAnimationVariants = {
    "hidden": { y: -20, opacity: 0 },
    "visible": { y: 0, opacity: 1 }
  }
  const links =
    [
      {
        title: "Home",
        path: "#home",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 lg:size-6">
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>,
        linkRef: homeRef
      },
      {
        title: "About",
        path: "#about",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 lg:size-6">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
        </svg>,
        linkRef: aboutRef
      },
      {
        title: "Skills",
        path: "#skills",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 lg:size-6">
          <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
          <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clipRule="evenodd" />
        </svg>,
        linkRef: skillsRef
      },
      {
        title: "Projects",
        path: "#projects",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 lg:size-6">
          <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
          <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
        </svg>,
        linkRef: projectsRef
      },
      {
        title: "Contacts",
        path: "#contacts",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 lg:size-6">
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>,
        linkRef: contactRef
      }
    ]
  return (
    <nav className={`mx-0 lg:mx-auto`}>
      <div className={` lg:px-0 flex flex-col lg:flex-row  lg:justify-between items-start lg:items-center lg:py-8`}>
        <div className={`${scrollVisible && 'py-6 backdrop-blur-sm transition-all border-base-300'} py-6 lg:py-0 flex justify-between fixed  items-center  w-full lg:static lg:w-auto z-20 px-8 lg:px-0`}>
          <motion.a className='text-3xl font-black cursor-pointer'
            onClick={() => scrollIntoSection(homeRef)}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: 'easeOut', delay: 0.2 }}
            variants={fadeTopNameAnimationVariants}
            viewport={{ once: true }}>
            Mark <span className='text-secondary'>Mallari</span>
          </motion.a>

          <div className='flex justify-end items-center'>
            <label className="btn btn-square swap swap-rotate lg:hidden">
              <input type="checkbox" checked={isMenuOpen} onClick={toggleMenu} />
              {/* hamburger icon */}
              <svg className={`swap-off fill-current`} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

              {/* close icon */}
              <svg className={`swap-on fill-current`} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
            </label>
          </div>
        </div>

        {/*Hamburger Menu*/}
        {/*Links*/}
        <motion.ul
          className={`min-h-screen lg:min-h-0 pt-40 bg-secondary-content lg:bg-transparent transit fixed lg:static lg:flex flex-col z-10 w-full lg:w-auto items-center lg:py-0 lg:flex-row lg:items-center gap-16 ${isMenuOpen ? 'flex' : 'hidden'}`}
          initial="hidden"
          whileInView="visible"
          animate={isMenuOpen ? "visible" : "hidden"}
          transition={{ ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
          variants={fadeTopAnimationVariants}>
          {links.map((link, index) => (
            <li key={index} className='lg:tooltip  lg:tooltip-bottom' data-tip={link.title}>
              <a href={link.path} className='flex gap-2 hover:text-secondary transition-all ease-in-out duration-300' onClick={() => scrollIntoSection(link.linkRef)} >
                {link.icon}
                <h1 className='text-4xl font-black lg:hidden'>{link.title}</h1>
              </a>
            </li>
          ))}
          <li>
            {/*Theme*/}
            <Theme />
          </li>
        </motion.ul>

      </div>
    </nav>

  )
}

export default NavBar