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
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 lg:size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        ,
        linkRef: homeRef
      },
      {
        title: "About",
        path: "#about",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 lg:size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        ,
        linkRef: aboutRef
      },
      {
        title: "Skills",
        path: "#skills",
        icon:
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 lg:size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
        ,
        linkRef: skillsRef
      },
      {
        title: "Projects",
        path: "#projects",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 lg:size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>,
        linkRef: projectsRef
      },
      {
        title: "Contacts",
        path: "#contacts",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 lg:size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        ,
        linkRef: contactRef
      }
    ]
  return (
    <nav className={`mx-0 lg:mx-auto`}  >
      <div className={`lg:px-0 flex flex-col lg:flex-row  lg:justify-between items-start lg:items-center lg:py-8`}>
        <div className={`${scrollVisible && 'py-6 backdrop-blur-sm transition-all border-base-300'} px-8 lg:px-0 py-6 lg:py-0 flex justify-between fixed  items-center w-full lg:static lg:w-auto z-20 `}>
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
          className={`min-h-screen lg:min-h-0 pt-40  bg-secondary-content lg:bg-transparent  fixed lg:static lg:flex flex-col z-10 w-full lg:w-auto ps-10 lg:py-0 lg:flex-row gap-16 ${isMenuOpen ? 'flex' : 'hidden'} `}
          initial="hidden"
          whileInView="visible"
          animate={isMenuOpen ? "visible" : "hidden"}
          transition={{ ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
          variants={fadeTopAnimationVariants}>
          {links.map((link, index) => (
            <li key={index} className='lg:tooltip  lg:tooltip-bottom' data-tip={link.title}>
              <a href={link.path} className='flex gap-2 hover:text-secondary transition-all ease-in-out duration-300' onClick={() => {
                scrollIntoSection(link.linkRef);
                setIsMenuOpen(false);
              }} >
                {link.icon}
                <h1 className='text-4xl font-black lg:hidden'>{link.title}</h1>
              </a>
            </li>
          ))}
          <li className='flex gap-2 lg:items-center'>
            {/*Theme*/}
            <Theme />

          </li>

        </motion.ul>

      </div>
    </nav>

  )
}

export default NavBar