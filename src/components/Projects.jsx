import React from 'react'
import SkillIcon from './SkillIcon'

import { FaGithub } from "react-icons/fa";

import OnlineVotingPicture from '../assets/onlinevoting-ss.png'
import DesktopTodoPicture from '../assets/todo-ss1.png'
import SingleProject from './SingeProject';

function Projects() {
    return (
        <div className=' mx-auto lg:max-w-7xl'>
            <div className='text-medium text-center text-3xl font-medium pt-10'>My Projects</div>
            <p className='text-center text-slate-400 font-light'>Here are my recent works</p>
            <div className='px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-14 py-20'>
                <div className='pt-10'>
                    <div className='w-full h-72 bg-base-300 rounded-xl' style={{
                        backgroundImage: `url('${OnlineVotingPicture}')`,
                        backgroundSize: 'cover'
                    }}></div>
                    <div className='w-full h-60  rounded-xl mb-20 lg:mb-0'>
                        <h1 className='pt-8 text-2xl font-medium'>Online Voting System at STI College Bacoor SHS student council</h1>
                        <p className='mt-4 text-lg'>This web application allows students to vote easily. It is my first capstone project, and it won Best in User Interface and System Development at the SHS Expo 2024 at our school.</p>


                        <div className='flex mt-3 gap-3 flex-wrap'>
                            <SkillIcon languageName='React JS' />
                            <SkillIcon languageName='Laravel' />
                            <SkillIcon languageName='MySQL' />
                            <SkillIcon languageName='Inertia' />
                        </div>

                        <div className='mt-6'>
                            <a href="" className='btn btn-outline'>
                                <FaGithub className='text-xl' />
                                View Github</a>

                        </div>
                    </div>
                </div>

                <SingleProject projectPicture={OnlineVotingPicture} projectTitle="Online Voting System at STI College Bacoor SHS student council" projectDescripton="This web application allows students to vote easily. It is my first capstone project, and it won Best in User Interface and System Development at the SHS Expo 2024 at our school."
                    projectGithubRepository="" />

                <SingleProject projectPicture={DesktopTodoPicture} projectTitle="To-do List Application" projectDescripton="I developed a user-friendly To-do list application to help users manage their daily tasks efficiently. Built with React JS and styled with Tailwind CSS and daisy UI, it features an intuitive interface for adding, editing, and organizing tasks."
                    projectLiveURL="https://simple-todo-list-mark.netlify.app/" projectGithubRepository="" />

                <SingleProject projectPicture={DesktopTodoPicture} projectTitle="To-do List Application" projectDescripton="I developed a user-friendly To-do list application to help users manage their daily tasks efficiently. Built with React JS and styled with Tailwind CSS and daisy UI, it features an intuitive interface for adding, editing, and organizing tasks."
                    projectGithubRepository="" />
            </div>
        </div>
    )
}

export default Projects