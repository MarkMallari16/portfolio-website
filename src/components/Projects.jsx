import React, { useState } from 'react'

import OnlineVotingPicture from '../assets/onlinevoting-ss.png'
import DesktopTodoPicture from '../assets/todo-ss1.png'
import PortfolioPicture from '../assets/portfoliopicture.png'
import StatQuickPicture from '../assets/statquick-ss.png'
import QuizGamePicture from '../assets/quiz-game-ss.png'
import GuessGamePicture from '../assets/guess-game-ss.png'
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
            projectDescription: "This web application allows students to vote easily. It is my first capstone project, and it won Best in User Interface and System Development at the SHS Expo 2024 at our school.",
            projectStacks: ["Laravel", "ReactJS", "TailwindCSS", "Material Design", "Inertia", "MySQL"],

            projectGithubRepository: "https://github.com/MarkMallari16/Online-Voting-System-Version-2"
        },
        {
            projectPicture: DesktopTodoPicture,
            projectTitle: "To-do List Application",
            projectDescription: "I developed a user-friendly To-do list application to help users manage their daily tasks efficiently. Built with React JS and styled with Tailwind CSS and daisy UI, it features an intuitive interface for adding, editing, and organizing tasks.",
            projectStacks: ["ReactJS", "TailwindCSS", "Daisy UI"],
            projectLiveURL: "https://simple-todo-list-mark.netlify.app/",
            projectGithubRepository: "https://github.com/MarkMallari16/Simple-Todo-List-React"
        },
        {
            projectPicture: StatQuickPicture,
            projectTitle: "Calculate mean, median, mode, range, and more with StatQuick! ",
            projectDescription: "This website helps you calculate mean, median, mode, range, and more statistics quickly and easily.",
            projectStacks: ["HTML", "CSS", "JavaScript", "ChartJS"],
            projectLiveURL: "https://statquik.netlify.app/",
            projectGithubRepository: ""
        },
        {
            projectPicture: PortfolioPicture,
            projectTitle: "Personal Website Portfolio",
            projectDescription: "I developed a website portfolio for me which I showcase my projects. I use ReactJS for this website.",
            projectStacks: ["ReactJS", "TailwindCSS", "Daisy UI"],
            projectLiveURL: "https://markdev16.netlify.app/",
            projectGithubRepository: "https://github.com/MarkMallari16/Portfolio"
        },
        {
            projectPicture: QuizGamePicture,
            projectTitle: "Quiz Website",
            projectDescription: "I developed a quiz website that has 4 categories: English, Science, Mathematics, and Programming.",
            projectStacks: ["ReactJS", "TailwindCSS", "Daisy UI"],
            projectLiveURL: "https://quiz-game-react-eywht4mbd-mark-mallaris-projects.vercel.app/",
            projectGithubRepository: "https://github.com/MarkMallari16/quiz-game-react"
        },
        {
            projectPicture: GuessGamePicture,
            projectTitle: "Guessing Game",
            projectDescription: "A fun and interactive game where players guess a randomly generated number within a specified range. The game includes multiple difficulty levels, visual and audio feedback, and is built using ReactJS and Daisy UI.",
            projectStacks: ["ReactJS", "TailwindCSS", "Daisy UI"],
            projectLiveURL: "https://guessinggamereact.netlify.app/",
            projectGithubRepository: "https://github.com/MarkMallari16/Guess-the-number-react"
        },

    ]

    const sliceProjects = isExpand ? projects : projects.slice(0, 4);

    const toggleExpand = () => {
        setIsExpand(!isExpand);
    }

    const rotateChevronVariants = {
        rotated: { rotate: 180 },
        unrotated: { rotate: 0 },
    }
    return (
        <div >
            <div className='text-medium uppercase text-center text-3xl font-medium pt-10'>My Projects</div>
            <p className='text-center text-slate-400 font-light'>Here are my recent works</p>
            <div className='px-4 lg:px-0 lg:pt-0 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-20  w-full'>

                {sliceProjects.map((project, id) => (
                    <motion.div key={id} initial="hidden" whileInView="visible" transition={{ ease: 'easeInOut', duration: 0.5 }} viewport={{ once: true }} variants={id % 2 !== 0 ? fadeInLeftVariants : fadeInRightVariants}>

                        <SingleProject projectPicture={project.projectPicture} projectTitle={project.projectTitle} projectDescription={project.projectDescription}
                            projectStacks={project.projectStacks}
                            projectLiveURL={project.projectLiveURL}
                            projectGithubRepository={project.projectGithubRepository}
                        />
                    </motion.div>
                ))
                }
                <div className='flex justify-center col-span-2'>
                    <button className='btn  text-center' onClick={toggleExpand}>
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
        </div>
    )
}

export default Projects