import React, { useReducer, useState } from 'react'
import AboutImage from '../assets/about1.jpg'
import Avatar from '../assets/avatar.png';
import { motion } from 'framer-motion'
import useScrollSection from '../hooks/useScrollSection';

function About({ contactRef }) {
  const { scrollIntoSection } = useScrollSection();

  const fadeRightAnimationVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }
  const fadeLeftAnimationVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  return (
    <div className='py-20 px-6 lg:px-0 '>
     

      <div className='grid grid-cols-1 lg:grid-cols-2   mx-auto lg:gap-40'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          variants={fadeRightAnimationVariants}>
          <div className='bg-secondary  rounded-xl lg:w-[35rem]'>
            <img src={Avatar} alt="avatar" />
          </div>

        </motion.div>
        <motion.div className='px-5 pt-8 lg:px-0 lg:pt-0  w-full'
          initial="hidden"
          whileInView="visible"
          transition={{ ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
          variants={fadeLeftAnimationVariants}>
          <div className='text-xl uppercase font-medium pt-5 lg:pt-10 pb-6'>About Me</div>
          <div className='pb-6'>
            <h1 className='text-3xl font-bold '>"Programs must be written for people to read, and only incidentally for machines to execute."</h1>

          </div>
          <p className='text-justify text-xl leading-9'>
            Hello! I'm Mark Christian Mallari, a web developer based in the Philippines. I fell in love with programming at 16 year old and have been improving my skills ever since. I enjoy solving programming problems and creating great user interfaces and experiences.
          </p>
          <button className='btn btn-outline btn-secondary mt-6 flex items-center justify-center py-3 px-5 text-white  rounded-lg hover:bg-blue-700 transition duration-300' onClick={() => scrollIntoSection(contactRef)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>

            Contact Me
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default About