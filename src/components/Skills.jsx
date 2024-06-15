import React, { useState } from 'react'
import SkillIcon from './SkillIcon'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";

import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiInertia, SiPhp } from "react-icons/si";
import { motion } from 'framer-motion';

function Skills() {

    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    }
    const skills = [
        {
            icon: <FaHtml5 />,
            languageName: 'HTML',
            category: 'frontend'
        },
        {
            icon: <FaCss3Alt />,
            languageName: 'CSS',
            category: 'frontend'
        },
        {
            icon: <DiJavascript />,
            languageName: 'JS',
            category: 'frontend'
        },
        {
            icon: <FaReact />,
            languageName: 'React JS',
            category: 'frontend'
        },
        {
            icon: <FaBootstrap />,
            languageName: 'Bootsrap',
            category: 'frontend'
        },
        {
            icon: <RiTailwindCssFill />,
            languageName: 'Tailwind',
            category: 'frontend'
        },
        {
            icon: <SiPhp />,
            languageName: 'PHP',
            category: 'backend'
        },
        {
            icon: <FaLaravel />,
            languageName: 'Laravel',
            category: 'backend'
        },
        {
            icon: <GrMysql />,
            languageName: 'SQL',
            category: 'backend'
        },
        {
            icon: <FaGitAlt />,
            languageName: 'Git',
            category: 'other'
        },
        {
            icon: <SiInertia />,
            languageName: 'Inertia',
            category: 'other'
        },

    ]
    return (
        <div className='mt-40 mx-auto lg:max-w-7xl mb-20 h-1/2 '>
            <div className='text-medium text-center text-3xl font-medium pt-10'>Skills</div>
            <p className='text-center text-slate-400  mb-10 '>Here are my recent works</p>
            <motion.div role='tablist' className='tabs flex justify-center text-2xl pb-4' >
                <a role="tab" className={`tab ${selectedCategory === 'all' ? 'tab-active bg-secondary text-white rounded-lg' : ''}`} onClick={() => handleCategoryChange('all')}>All</a>
                <a role="tab" className={`tab ${selectedCategory === 'frontend' ? 'tab-active bg-secondary text-white rounded-lg' : ''}`} onClick={() => handleCategoryChange('frontend')}>Frontend</a>
                <a role="tab" className={`tab ${selectedCategory === 'backend' ? 'tab-active bg-secondary text-white rounded-lg' : ''}`} onClick={() => handleCategoryChange('backend')}>Backend</a>
                <a role="tab" className={`tab ${selectedCategory === 'other' ? 'tab-active bg-secondary text-white rounded-lg' : ''}`} onClick={() => handleCategoryChange('other')}>Other</a>
            </motion.div>
            <div className='mt-5 px-4 lg:p-0'>
                <motion.div className='flex gap-5 justify-center flex-wrap '
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}>
                    {
                        skills
                            .filter((skill) => selectedCategory === 'all' || skill.category === selectedCategory)
                            .map(({ index, icon, languageName }) => (
                                <SkillIcon key={index} icon={icon} languageName={languageName} />
                            ))
                    }
                </motion.div>
            </div>

        </div>
    )
}

export default Skills