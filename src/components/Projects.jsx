import React from 'react'
import SkillIcon from './SkillIcon'

import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiInertia } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import OnlineVotingPicture from '../assets/onlinevoting-ss.png'
import DesktopTodoPicture from '../assets/todo-ss1.png'
import MobileTodoPicture from '../assets/todo-ss2.png'
function Projects() {
    return (
        <div className='mt-10 mx-auto lg:max-w-7xl'>
            <div className='text-medium text-center text-3xl font-medium pt-10'>Projects</div>
            <p className='text-center text-slate-400'>Here are my recent works</p>
            <div className='px-4 lg:px-0'>
                <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 '>
                    <div className='w-full h-72 bg-base-300 rounded-xl' style={{
                        backgroundImage: `url('${OnlineVotingPicture}')`,
                        backgroundSize: 'cover'
                    }}></div>
                    <div className='w-full h-60  rounded-xl mb-20 lg:mb-0'>
                        <h1 className='text-2xl font-medium'>Online Voting System at STI College Bacoor SHS student council</h1>
                        <p className='mt-4 text-lg'>This web application allows students to vote easily. It is my first capstone project, and it won Best in User Interface and System Development at the SHS Expo 2024 at our school.</p>


                        <div className='flex mt-3 gap-3 flex-wrap'>
                            <SkillIcon icon={<FaReact />} languageName='React JS' />
                            <SkillIcon icon={<FaLaravel />} languageName='Laravel' />
                            <SkillIcon icon={<SiMysql />} languageName='MySQL' />
                            <SkillIcon icon={<SiInertia />} languageName='Inertia' />
                        </div>

                        <div className='mt-6'>
                            <a href="" className='btn btn-outline'>
                                <FaGithub className='text-xl' />
                                View Github</a>

                        </div>
                    </div>
                </div>

                <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='w-full h-80 bg-base-300 rounded-xl' style={{
                        backgroundImage: `url('${DesktopTodoPicture}')`,
                        backgroundSize: 'cover'
                    }}></div>
                    <div className='w-full h-60  rounded-xl'>
                        <h1 className='text-2xl font-medium'>To-do List Application</h1>
                        <p className='mt-4 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, aperiam voluptate! Illum ducimus doloremque quam, excepturi asperiores error voluptatum voluptates.</p>

                        <div className='flex mt-3 gap-3'>
                            <SkillIcon icon={<FaReact />} languageName='React JS' />
                            <SkillIcon icon={<RiTailwindCssFill />} languageName='Tailwind' />

                        </div>

                        <div className='mt-6 flex gap-2'>
                            <a href="https://simple-todo-list-mark.netlify.app/" target='_blank' className='btn btn-outline'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                                View Live</a>
                            <a href="" className='btn btn-outline'>
                                <FaGithub className='text-xl' />
                                View Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects