import React from 'react'

import { FaXTwitter } from "react-icons/fa6";

function Footer({ homeRef, aboutRef, skillsRef, projectsRef, contactRef, scrollIntoSection }) {

    return (
        <footer>
            <div className="w-full px-6 lg:px-0 footer flex flex-col lg:flex-row justify-start items-center lg:justify-between py-6 bg-ghost  border-t-2 border-base-300" >

                <div className='text-4xl lg:text-3xl font-black flex'>Mark
                    <span className='text-secondary'> Mallari</span>
                </div>

                <nav className='w-full flex justify-center'>
                    <div className="grid grid-flow-col gap-6">
                        <a onClick={() => scrollIntoSection(homeRef)} className='cursor-pointer hover:text-secondary hover:font-medium transition-all ease-out'>Home</a>
                        <a onClick={() => scrollIntoSection(aboutRef)} className='cursor-pointer hover:text-secondary hover:font-medium transition-all ease-out'>About</a>
                        <a onClick={() => scrollIntoSection(skillsRef)} className='cursor-pointer hover:text-secondary hover:font-medium transition-all ease-out'>Skills</a>
                        <a onClick={() => scrollIntoSection(projectsRef)} className='cursor-pointer hover:text-secondary hover:font-medium transition-all ease-out'>Projects</a>
                        <a onClick={() => scrollIntoSection(contactRef)} className='cursor-pointer hover:text-secondary hover:font-medium transition-all ease-out'>Contact</a>
                    </div>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-3 w-full">
                        <a href='https://www.facebook.com/Markccmllari.16/' className='p-2 bg-base-300 rounded-md hover:bg-secondary hover:text-base-300 transition-all ease-in-out'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>

                        </a>
                        <a href='https://www.youtube.com/channel/UCjmHlbLg0GEGH4SOS04jQPg' className='p-2 bg-base-300 rounded-md hover:bg-secondary hover:text-base-300 transition-all ease-in-out'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                        </a>
                        
                        <a href='https://x.com/markymallari16' className='p-2 bg-base-300 rounded-md hover:bg-secondary hover:text-base-300 transition-all ease-in-out'>
                           <FaXTwitter className='text-xl'/>
                        </a>
                    </div>
                </nav>
            </div>
        </footer>

    )
}

export default Footer