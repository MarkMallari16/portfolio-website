import React from 'react'
import SkillIcon from './SkillIcon'
import { FaHtml5, FaCss3Alt , FaReact } from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";


function Skills() {
    return (
        <div className='mt-40 mx-auto lg:max-w-7xl mb-20'>
            <div className='text-medium text-center text-3xl font-medium'>Skills</div>
            <div className='flex gap-5 justify-center mt-5 flex-wrap'>
                <SkillIcon icon={<FaHtml5 />} languageName="HTML" />
                <SkillIcon icon={<FaCss3Alt  />} languageName="CSS" />
                <SkillIcon icon={<DiJavascript />} languageName="JS" />
                <SkillIcon icon={<FaReact />} languageName="React JS" />
                <SkillIcon icon={<FaBootstrap />} languageName="Bootsrap" />
                <SkillIcon icon={<RiTailwindCssFill />} languageName="Tailwind" />
            </div>
        </div>
    )
}

export default Skills