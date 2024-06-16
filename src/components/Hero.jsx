import React from 'react';

import ResumeBtn from './ResumeBtn';
import { easeInOut, motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";


function Hero() {

    return (
        <div className='h-screen grid grid-cols-1 lg:grid-cols-2 items-center lg:items-center lg:justify-center px-8 lg:px-0 mx-auto max-w-7xl gap-20'>

            <div className='flex items-center space-x-10'>
                <div className='flex flex-col space-y-6 '>
                    <a href="https://github.com/MarkMallari16" className='tooltip hover:tooltip-open tooltip-right text-slate-800 hover:text-secondary transition-colors duration-200' data-tip="Github">
                        <FiGithub className='size-6' />
                    </a>
                    <a href="https://www.linkedin.com/in/mark-christian-mallari-47850a279/" className='tooltip hover:tooltip-open tooltip-right text-slate-800 hover:text-secondary transition-colors duration-200' data-tip="LinkIn">
                        <FiLinkedin className='size-6' />
                    </a>
                    <a href="https://www.instagram.com/mrkymllari/" className='tooltip hover:tooltip-open tooltip-right text-slate-800 hover:text-secondary transition-colors duration-200' data-tip="Instagram">
                        <FaInstagram className='size-6' />
                    </a>
                </div>
                <div>
                    <div className='flex items-center w-full'>

                        <div className='text-5xl lg:text-6xl font-semibold'>Hey, I'm Mark
                        </div>
                        <motion.span
                            className='text-6xl'
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [-8.0, -14, -4, 10, 0] }}
                            exit={{ rotate: 0 }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 1,
                            }}

                        >👋🏻</motion.span>

                    </div>

                    <div className='mt-4 text-xl'>
                        Aspiring <span className='font-bold text-secondary'>Web Developer</span> from the Philippines
                    </div>


                    <div className='mt-4 flex items-center gap-5'>
                        <ResumeBtn />
                    </div>

                </div>


            </div>
            <div className='hidden lg:block'>
                <div className="profile w-[30rem] h-[30rem] object-cover border-8 border-secondary">
                </div>
            </div>
        </div>
    );
}

export default Hero;
