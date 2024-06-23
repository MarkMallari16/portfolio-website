import React from 'react';

import ResumeBtn from './ResumeBtn';
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import useScrollSection from '../hooks/useScrollSection';


function Hero({ projectsRef }) {
    const { scrollIntoSection } = useScrollSection();

    return (
        <div className='min-h-[100vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-32 items-center lg:items-center lg:justify-center lg:px-0'>

            <motion.div className='flex flex-col-reverse lg:flex-row lg:items-center space-x-10 w-full'
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                transition={{ ease: 'easeOut', delay: 0.20 }}
                viewport={{ once: true }}>

                <motion.div className='flex flex-row ms-10 mt-6 gap-5 lg:ms-0 lg:mt-0 lg:gap-0 lg:flex-col lg:space-y-6 '
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', delay: 0.50 }}
                    viewport={{ once: true }}>
                    <a href="https://github.com/MarkMallari16" className=' tooltip hover:tooltip-open tooltip-right   hover:text-secondary transition-colors duration-200' data-tip="Github">
                        <FiGithub className='size-6' />
                    </a>
                    <a href="https://www.linkedin.com/in/mark-christian-mallari-47850a279/" className='tooltip hover:tooltip-open tooltip-right  hover:text-secondary transition-colors duration-200' data-tip="LinkIn">
                        <FiLinkedin className='size-6' />
                    </a>
                    <a href="https://www.instagram.com/mrkymllari/" className='tooltip hover:tooltip-open tooltip-right  hover:text-secondary transition-colors duration-200' data-tip="Instagram">
                        <FaInstagram className='size-6' />
                    </a>
                </motion.div>

                <div>
                    <div className=' w-full'>
                        <div className='text-6xl lg:text-5xl font-black'>Hello, I'm Mark👋🏻
                        </div>
                        <motion.span
                            className='text-6xl'
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [-8.0, -14, -4, 10, 0] }}
                            exit={{ rotate: 0 }}
                            transition={{
                                repeat: Infinity,
                                ease: "easeIn",
                                duration: 1,
                            }}

                        ></motion.span>

                    </div>

                    <div className='mt-4 text-xl'>
                        Aspiring <span className='font-bold text-secondary'>Web Developer</span> from the Philippines
                    </div>


                    <div className='mt-4 flex items-center gap-3'>
                        <a href='#projects' onClick={() => scrollIntoSection(projectsRef)} className='btn btn-secondary  hover:bg-secondary-dark transition-colors duration-300'>Visit Projects</a>

                        <ResumeBtn />
                    </div>


                </div>


            </motion.div>

            <motion.div className='hidden lg:block '
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ ease: 'easeInOut', delay: 0.58, duration: 0.3 }}
                viewport={{ once: true }}>
                <div className="profile w-[30rem] h-[30rem] object-cover border-8 border-secondary ">
                </div>
            </motion.div>
        </div>
    );
}

export default Hero;
