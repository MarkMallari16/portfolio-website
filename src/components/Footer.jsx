import React from 'react'

import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import SocialLink from './SocialLink';

function Footer({ homeRef, aboutRef, skillsRef, projectsRef, contactRef, scrollIntoSection }) {
    const linkStyle = "cursor-pointer hover:text-secondary font-medium transition-all ease-out";
    return (
        <footer>
            <div className="w-full px-6 lg:px-0 footer flex flex-col lg:flex-row justify-start items-center lg:justify-between py-6 bg-ghost border-t-2 border-base-300" >
                <a onClick={() => scrollIntoSection(homeRef)} className='text-4xl lg:text-3xl font-black flex cursor-pointer'>Mark
                    <span className='text-secondary'> Mallari</span>
                </a>

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
                        <SocialLink link="https://github.com/MarkMallari16" dataTip="GitHub" position='top'>
                            <FiGithub className='size-6' />
                        </SocialLink>
                        <SocialLink link="https://www.linkedin.com/in/mark-christian-mallari-47850a279/" dataTip="LinkIn" position='top'>
                            <FiLinkedin className='size-6' />
                        </SocialLink>
                        <SocialLink link="https://x.com/markymallari16" dataTip="X" position='top'>
                            <FaXTwitter className='size-6' />
                        </SocialLink>
                    </div>
                </nav>
            </div>
            <div className='bottom text-center'>
                <p className='font-light text-sm text-base-content '>
                  © {new Date().getFullYear()}  Mark Christian Mallari. All rights reserved.
                </p>
            </div>
        </footer>

    )
}

export default Footer