import React from 'react'
import SkillIcon from './SkillIcon'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";

import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";


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
        },
        {
            icon: <GrMysql />,
            languageName: 'SQL'
        },
        {
            icon: <FaGitAlt />,
            languageName: 'Git'
        }]
    return (
        <div className='mt-40 mx-auto lg:max-w-7xl mb-20 h-1/2 '>
            <div className='text-medium text-center text-3xl font-medium pt-10'>Skills</div>
            <p className='text-center text-slate-400  mb-10 '>Here are my recent works</p>
            <div role="tablist" className="tabs">
                <a role="tab" className="tab">All</a>
                <a role="tab" className="tab">Frontend</a>
                <a role="tab" className="tab tab-active">Backend</a>
                <a role="tab" className="tab">Other</a>

            </div>
            <div className='mt-5'>
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