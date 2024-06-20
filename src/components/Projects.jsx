import React from 'react'

import OnlineVotingPicture from '../assets/onlinevoting-ss.png'
import DesktopTodoPicture from '../assets/todo-ss1.png'
import SingleProject from './SingeProject';

function Projects() {

    const projects = [
        {
            projectPicture: OnlineVotingPicture,
            projectTitle: "Online Voting System at STI College",
            projectDescripton: "This web application allows students to vote easily. It is my first capstone project, and it won Best in User Interface and System Development at the SHS Expo 2024 at our school.",
            projectStacks: ["Laravel", "ReactJS", "TailwindCSS", "Material Design", "Inertia", "MySQL"],
            projectLiveURL: "",
            projectGithubRepository: ""
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
            projectPicture: DesktopTodoPicture,
            projectTitle: "To-do List Application",
            projectDescripton: "I developed a user-friendly To-do list application to help users manage their daily tasks efficiently. Built with React JS and styled with Tailwind CSS and daisy UI, it features an intuitive interface for adding, editing, and organizing tasks.",
            projectStacks: ["ReactJS", "TailwindCSS", "Daisy UI"],
            projectLiveURL: "https://simple-todo-list-mark.netlify.app/",
            projectGithubRepository: ""
        },
        {
            projectPicture: DesktopTodoPicture,
            projectTitle: "To-do List Application",
            projectDescripton: "I developed a user-friendly To-do list application to help users manage their daily tasks efficiently. Built with React JS and styled with Tailwind CSS and daisy UI, it features an intuitive interface for adding, editing, and organizing tasks.",
            projectStacks: ["ReactJS", "TailwindCSS", "Daisy UI"],
            projectLiveURL: "https://simple-todo-list-mark.netlify.app/",
            projectGithubRepository: ""
        }
    ]
    return (
        <div className=' mx-auto lg:max-w-7xl'>
            <div className='text-medium text-center text-3xl font-medium pt-10'>My Projects</div>
            <p className='text-center text-slate-400 font-light'>Here are my recent works</p>
            <div className='px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-20 py-10 w-full'>

                {projects.map((project, id) => (
                    <SingleProject key={id} projectPicture={project.projectPicture} projectTitle={project.projectTitle} projectDescripton={project.projectDescripton}
                        projectStacks={project.projectStacks}
                        projectLiveURL={project.projectLiveURL}
                        projectGithubRepository={project.projectGithubRepository}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects