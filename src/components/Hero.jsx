import React from 'react';

import ResumeBtn from './ResumeBtn';
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from "react-icons/fi";
import useScrollSection from '../hooks/useScrollSection';
import { FaXTwitter } from 'react-icons/fa6';


function Hero({ projectsRef }) {
    const { scrollIntoSection } = useScrollSection();

    return (
        <div className='min-h-screen grid grid-cols-1  lg:grid-cols-2 gap-0 lg:gap-32 items-center lg:items-center lg:justify-center lg:px-0'>
            <motion.div className='flex flex-col-reverse lg:flex-row lg:items-center space-x-10 w-full overflow-hidden'
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true }}>

                <motion.div className='flex flex-row ms-10 mt-6 gap-5 lg:ms-0 lg:mt-0 lg:gap-0 lg:flex-col lg:space-y-6 '
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', delay: 0.6 }}
                    viewport={{ once: true }}>
                        
                    <a href="https://github.com/MarkMallari16" className='tooltip hover:tooltip-open tooltip-right hover:text-secondary transition-colors duration-200' data-tip="GitHub">
                        <FiGithub className='size-6' />
                    </a>
                    <a href="https://www.linkedin.com/in/mark-christian-mallari-47850a279/" className='tooltip hover:tooltip-open tooltip-right  hover:text-secondary transition-colors duration-200' data-tip="LinkIn">
                        <FiLinkedin className='size-6' />
                    </a>
                    <a href="https://x.com/markymallari16" className='tooltip hover:tooltip-open tooltip-right  hover:text-secondary transition-colors duration-200' data-tip="X">
                        <FaXTwitter className='size-6' />
                    </a>
                </motion.div>

                <div>
                    <h1 className='text-5xl font-black w-full'>Hello, I'm Mark👋🏻
                    </h1>

                    <div className='mt-4 text-2xl lg:text-xl'>
                        Aspiring <span className='font-bold text-secondary'>Web Developer</span> from the Philippines
                    </div>


                    <div className='mt-4 flex flex-wrap items-center gap-3 w-full'>
                        <a href='#projects' onClick={() => scrollIntoSection(projectsRef)} className='btn btn-secondary  hover:bg-secondary-dark transition-colors duration-300'>Visit Projects</a>

                        <ResumeBtn />
                    </div>

                </div>
            </motion.div>

            <motion.div className='hidden lg:block overflow-hidden'
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
