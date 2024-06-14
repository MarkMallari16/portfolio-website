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
function Projects() {
    return (
        <div className='mt-10 mx-auto lg:max-w-7xl'>
            <div className='text-medium text-center text-3xl font-medium'>Projects</div>

            <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='w-full h-80 bg-base-300 rounded-xl'></div>
                <div className='w-full h-60  rounded-xl'>
                    <h1 className='text-2xl font-medium'>Online Voting System at STI College Bacoor SHS student council</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, aperiam voluptate! Illum ducimus doloremque quam, excepturi asperiores error voluptatum voluptates.</p>

                    <div className='flex mt-3 gap-3'>
                        <SkillIcon icon={<FaReact />} languageName='React JS' />
                        <SkillIcon icon={<FaLaravel />} languageName='Laravel' />
                        <SkillIcon icon={<SiMysql />} languageName='MySQL' />
                        <SkillIcon icon={<SiInertia />} languageName='Inertia' />
                    </div>

                    <div className='mt-6'>
                        <a href="" className='btn btn-outline'>
                            <FaGithub className='text-2xl' />
                            View Github</a>
                       
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects