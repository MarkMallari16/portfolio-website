import React from 'react'

import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from 'react-icons/fi';

function Footer({ homeRef, aboutRef, skillsRef, projectsRef, contactRef, scrollIntoSection }) {
    const linkStyle = "cursor-pointer hover:text-secondary font-medium transition-all ease-out";
    return (
        <footer>
            <div className="w-full px-6 lg:px-0 footer flex flex-col lg:flex-row justify-start items-center lg:justify-between py-6 bg-ghost  border-t-2 border-base-300" >

                <div className='text-4xl lg:text-3xl font-black flex'>Mark
                    <span className='text-secondary'> Mallari</span>
                </div>

                <nav className='w-full flex justify-center'>
                    <div className="grid grid-flow-col gap-6">
                        <a onClick={() => scrollIntoSection(homeRef)} className={linkStyle}>Home</a>
                        <a onClick={() => scrollIntoSection(aboutRef)} className={linkStyle}>About</a>
                        <a onClick={() => scrollIntoSection(skillsRef)} className={linkStyle}>Skills</a>
                        <a onClick={() => scrollIntoSection(projectsRef)} className={linkStyle}>Projects</a>
                        <a onClick={() => scrollIntoSection(contactRef)} className={linkStyle}>Contact</a>
                    </div>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-3 w-full">
                        <a href='https://www.facebook.com/Markccmllari.16/' className='p-2 bg-base-300 rounded-md hover:bg-secondary hover:text-base-300 transition-all ease-in-out'>
                            <FiGithub className='size-6' />
                        </a>
                        <a href='https://www.youtube.com/channel/UCjmHlbLg0GEGH4SOS04jQPg' className='p-2 bg-base-300 rounded-md hover:bg-secondary hover:text-base-300 transition-all ease-in-out'>
                            <FiLinkedin className='size-6' />
                        </a>

                        <a href='https://x.com/markymallari16' className='p-2 bg-base-300 rounded-md hover:bg-secondary hover:text-base-300 transition-all ease-in-out'>
                            <FaXTwitter className='size-6' />
                        </a>
                    </div>
                </nav>
            </div>
        </footer>

    )
}

export default Footer