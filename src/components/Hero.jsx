import React, { useRef } from 'react';
import Resume from "../assets/Resume.pdf"
import ResumeBtn from './ResumeBtn';
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from "react-icons/fi";
import useScrollSection from '../hooks/useScrollSection';
import { FaXTwitter } from 'react-icons/fa6';

function Hero({ projectsRef }) {
    const { scrollIntoSection } = useScrollSection();
    const modalRef = useRef();

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }
    
    const closeModal = () => {
        if (modalRef?.current) {
            modalRef.current.close();
        }
    }

    return (
        <div className='pt-52 lg:pt-0 px-8 lg:min-h-screen lg:ms-0  flex justify-between items-center lg:px-0'>
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true }}>

                {/* <motion.div className='flex flex-row ms-10 mt-6 gap-5 lg:ms-0 lg:mt-0 lg:gap-0 lg:flex-col lg:space-y-6 '
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
                </motion.div> */}

                <div>
                    <h1 className='text-5xl md:text-5xl lg:text-5xl font-black w-full'>Hello, I'm Mark👋🏻
                    </h1>
                    <div className='mt-2 h-1 w-28 bg-secondary'>

                    </div>
                    <div className='mt-4 text-2xl md:text-2xl lg:text-xl'>
                        Aspiring <span className='font-bold text-secondary'>Web Developer</span> from the Philippines
                    </div>

                    <div className='mt-4 flex flex-wrap items-center gap-3 w-full'>
                        <a href='#projects' onClick={() => scrollIntoSection(projectsRef)} className='btn btn-secondary  hover:bg-secondary-dark transition-colors duration-300'>
                            Visit Projects
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0  0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                            </svg>

                        </a>
                        <ResumeBtn onOpenModal={openModal} />
                    </div>

                </div>
                {/*Modal */}
                <dialog ref={modalRef} className="modal ">
                    <div className="modal-box max-w-5xl">
                        <div className='flex items-center justify-between mb-4'>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                <h2 className='text-2xl font-medium'>
                                    My Resume
                                </h2>
                            </div>
                            <button onClick={closeModal} className='btn btn-ghost'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </button>
                        </div>
                        <div className='w-full  overflow-hidden'>
                            <iframe src={Resume} title="Resume" width="100%" height="600px" className='rounded-l-md'></iframe>
                        </div>
                        <div className="modal-action">

                        </div>
                    </div>
                </dialog>
            </motion.div>

            <motion.div className='hidden lg:block overflow-hidden '
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ ease: 'easeInOut', delay: 0.48, duration: 0.3 }}
                viewport={{ once: true }}>
                <div className="profile w-[30rem] h-[30rem] object-cover border-8 border-secondary ">
                </div>
            </motion.div>
        </div>
    );
}

export default Hero;
