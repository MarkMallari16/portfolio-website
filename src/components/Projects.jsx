import React, { useState } from 'react'

import projects from '../data/projectsData';

import SingleProject from './SingleProject';
import { delay, motion } from 'framer-motion'

function Projects() {
    const [isExpand, setIsExpand] = useState(false);

    // const fadeInRightVariants = {
    //     hidden: {
    //         x: -20,
    //         opacity: 0,
    //     },
    //     visible: {
    //         x: 0,
    //         opacity: 1,
    //         transition: {
    //             duration: 0.6,
    //             ease: 'easeInOut',
    //         }
    //     },
    // }

    const fadeScaleVariants = {
        hidden: {
            scale: 0.90,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeInOut',
            }
        },
    }
    const sliceProjects = isExpand ? projects : projects.slice(0, 3);

    const toggleExpand = () => {
        setIsExpand(!isExpand);
    }

    const rotateChevronVariants = {
        rotated: { rotate: 180 },
        unrotated: { rotate: 0 },
    }

    return (
        <div className='min-h-screen overflow-hidden pt-24 lg:pt-0'>
            <div className='text-medium uppercase text-center text-3xl font-medium pt-10'>My Projects</div>
            <p className='text-center text-slate-400 font-light'>Here are my recent works</p>
            <div className='px-4 lg:px-0'>
                {sliceProjects.map((project, id) => (
                    <motion.div key={id} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.3 }} variants={fadeScaleVariants} >
                        <SingleProject picture={project.picture} title={project.title} description={project.description}
                            stacks={project.stacks}
                            liveUrl={project.liveUrl}
                            githubRepository={project.githubRepository}
                        />

                    </motion.div>
                ))
                }
                <div className="flex justify-center">
                    <button className='btn text-center' onClick={toggleExpand}>
                        {isExpand ? 'See Less' : 'See More'}
                        <motion.span
                            initial="unrotated"
                            animate={isExpand ? "unrotated" : "rotated"}
                            variants={rotateChevronVariants}
                            transition={{ ease: 'easeOut', duration: 0.2 }}>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                            </svg>
                        </motion.span>
                    </button>
                </div>
            </div>

        </div >
    )
}

export default Projects