import React from 'react';

import { LuGithub } from 'react-icons/lu';
import Resume from '../assets/Resume.pdf'

function Hero() {
    return (
        <div className='h-screen grid grid-cols-1 lg:grid-cols-2 items-center lg:items-center lg:justify-center px-4 lg:px-0 mx-auto max-w-7xl gap-20'>
            <div >
                <div className='flex items-center w-full'>
                    <div className='text-6xl'>Mark Christian Mallari👋</div>

                </div>

                <div className='mt-4 text-xl'>
                    A skilled Web Developer based in Philippines
                </div>


                <div className='mt-4 flex items-center gap-5'>
                    <a href={Resume} download className='btn bg-secondary text-white hover:bg-secondary-dark transition-colors duration-300'>
                        <span>Download CV</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </a>

                    <a href="https://github.com/MarkMallari16" className='text-black hover:text-gray-700 transition-colors duration-300'>
                        <LuGithub className='size-8' />
                    </a>
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
