import React from 'react'
import SkillIcon from './SkillIcon'

import { FaGithub } from "react-icons/fa";

import OnlineVotingPicture from '../assets/onlinevoting-ss.png'
import DesktopTodoPicture from '../assets/todo-ss1.png'
import SingleProject from './SingeProject';

function Projects() {

    const projects = [
        {
            projectPicture: OnlineVotingPicture,
            projectTitle: "Online Voting System at STI College",
            projectDescripton: "This web application allows students to vote easily. It is my first capstone project, and it won Best in User Interface and System Development at the SHS Expo 2024 at our school.",
            projectLiveURL: "",
            projectGithubRepository: ""
        },
        {
            projectPicture: DesktopTodoPicture,
            projectTitle: "To-do List Application",
            projectDescripton: "I developed a user-friendly To-do list application to help users manage their daily tasks efficiently. Built with React JS and styled with Tailwind CSS and daisy UI, it features an intuitive interface for adding, editing, and organizing tasks.",
            projectLiveURL: "https://simple-todo-list-mark.netlify.app/",
            projectGithubRepository: ""
        }
    ]
    return (
        <div className=' mx-auto lg:max-w-7xl'>
            <div className='text-medium text-center text-3xl font-medium pt-10'>My Projects</div>
            <p className='text-center text-slate-400 font-light'>Here are my recent works</p>
            <div className='px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-14 py-10'>
                
                {projects.map((project) => (
                    <SingleProject projectPicture={project.projectPicture} projectTitle={project.projectTitle} projectDescripton={project.projectDescripton}
                        projectLiveURL={project.projectLiveURL}
                        projectGithubRepository={project.projectGithubRepository}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects