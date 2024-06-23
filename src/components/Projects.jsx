import React, { useState } from 'react'

import OnlineVotingPicture from '../assets/onlinevoting-ss.png'
import DesktopTodoPicture from '../assets/todo-ss1.png'
import PortfolioPicture from '../assets/portfoliopicture.png'
import StatQuickPicture from '../assets/statquick-ss.png'
import SingleProject from './SingeProject';
import { motion } from 'framer-motion'

function Projects() {
    const [isExpand, setIsExpand] = useState(false);

    const fadeInRightVariants = {
        hidden: {
            x: -20,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }

    const fadeInLeftVariants = {
        hidden: {
            x: 20,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }

    const projects = [
        {
            projectPicture: OnlineVotingPicture,
            projectTitle: "Online Voting System at STI College Bacoor",
            projectDescripton: "This web application allows students to vote easily. It is my first capstone project, and it won Best in User Interface and System Development at the SHS Expo 2024 at our school.",
            projectStacks: ["Laravel", "ReactJS", "TailwindCSS", "Material Design", "Inertia", "MySQL"],

            projectGithubRepository: "https://github.com/MarkMallari16/Online-Voting-System-Version-2"
        },
        {
            projectPicture: DesktopTodoPicture,
            projectTitle: "To-do List Application",
            projectDescripton: "I developed a user-friendly To-do list application to help users manage their daily tasks efficiently. Built with React JS and styled with Tailwind CSS and daisy UI, it features an intuitive interface for adding, editing, and organizing tasks.",
            projectStacks: ["ReactJS", "TailwindCSS", "Daisy UI"],
            projectLiveURL: "https://simple-todo-list-mark.netlify.app/",
            projectGithubRepository: ""
        },
        {
            projectPicture: StatQuickPicture,
            projectTitle: "Calculate mean, median, mode, range, and more with StatQuick! ",
            projectDescripton: "This website helps you calculate mean, median, mode, range, and more statistics quickly and easily.",
            projectStacks: ["HTML", "CSS", "JavaScript", "ChartJS"],
            projectLiveURL: "https://statquik.netlify.app/",
            projectGithubRepository: ""
        },
        {
            projectPicture: PortfolioPicture,
            projectTitle: "Website Portfolio",
            projectDescripton: "I developed a website portfolio for me which I showcase my projects. I used tailwind CSS and daisyUI for user interface.",
            projectStacks: ["ReactJS", "TailwindCSS", "Daisy UI"],
            projectLiveURL: "https://simple-todo-list-mark.netlify.app/",
            projectGithubRepository: ""
        },

    ]

    const sliceProjects = isExpand ? projects : projects.slice(0, 2);

    const toggleExpand = () => {
        setIsExpand(!isExpand);
    }

    const rotateChevronVariants = {

        rotated: { rotate: 180 },
        unrotated: { rotate: 0 },
    }
    return (
        <div className=' mx-auto lg:max-w-7xl'>
            <div className='text-medium uppercase text-center text-3xl font-medium pt-10'>My Projects</div>
            <p className='text-center text-slate-400 font-light'>Here are my recent works</p>
            <div className='px-4 lg:px-0 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:mt-4 w-full'>

                {sliceProjects.map((project, id) => (
                    <motion.div key={id} initial="hidden" whileInView="visible" transition={{ ease: 'easeInOut', duration: 0.5 }} viewport={{ once: true }} variants={id % 2 !== 0 ? fadeInLeftVariants : fadeInRightVariants}>

                        <SingleProject projectPicture={project.projectPicture} projectTitle={project.projectTitle} projectDescripton={project.projectDescripton}
                            projectStacks={project.projectStacks}
                            projectLiveURL={project.projectLiveURL}
                            projectGithubRepository={project.projectGithubRepository}
                        />
                    </motion.div>
                ))
                }


            </div >
            <div className='flex justify-center mt-10'>
                <button className='btn  text-center' onClick={toggleExpand}>
                    {isExpand ? 'See Less' : 'See More'}
                    <motion.span
                        initial="unrotated"
                        animate={isExpand ? "rotated" : "unrotated"}
                        variants={rotateChevronVariants}
                        transition={{ ease: 'easeOut', duration: 0.2 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                        </svg>
                    </motion.span>
                </button>
            </div>
        </div >
    )
}

export default Projects