import React from 'react'
import SkillIcon from './SkillIcon'
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";

import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";


function Skills() {
    const skills = [
        {
            icon: <FaHtml5 />,
            languageName: 'HTML'
        },
        {
            icon: <FaCss3Alt />,
            languageName: 'CSS'
        },
        {
            icon: <DiJavascript />,
            languageName: 'JS'
        },
        {
            icon: <FaReact />,
            languageName: 'React JS'
        },
        {
            icon: <FaBootstrap />,
            languageName: 'Bootsrap'
        },
        {
            icon: <RiTailwindCssFill />,
            languageName: 'Tailwind'
        },
        {
            icon: <FaLaravel />,
            languageName: 'Laravel'
        }]
    return (
        <div className='mt-40 mx-auto lg:max-w-7xl mb-20'>
            <div className='text-medium text-center text-3xl font-medium'>Skills</div>
            <div className='mt-10'>
                <h1 className='font-medium'>Front End</h1>
                <div className='flex gap-5 justify-center flex-wrap'>

                    {
                        skills.map(({ index, icon, languageName }) => (
                            <SkillIcon key={index} icon={icon} languageName={languageName} />
                        ))
                    }
                </div>
            </div>
            <div>
                <h1 className='font-medium'>Backend</h1>
                <div className='flex gap-5 justify-center flex-wrap'>

                    {
                        skills.map(({ index, icon, languageName }) => (
                            <SkillIcon key={index} icon={icon} languageName={languageName} />
                        ))
                    }
                </div>
            </div>

            <div>
                <h1 className='font-medium'>Others</h1>
                <div className='flex gap-5 justify-center flex-wrap'>

                    {
                        skills.map(({ index, icon, languageName }) => (
                            <SkillIcon key={index} icon={icon} languageName={languageName} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills