import React, { useState } from 'react'
import TextIcon from './TextIcon'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { FaLaravel, FaJava } from "react-icons/fa6";

import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiInertia, SiPhp, SiCsharp, SiAndroidstudio } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
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
            languageName: 'JavaScript',
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
        }, {
            icon: <FaJava />,
            languageName: 'Java',
            category: 'other'
        }, {
            icon: <SiCsharp />,
            languageName: 'C#',
            category: 'other'
        }, {
            icon: <SiAndroidstudio />,
            languageName: 'Android Studio',
            category: 'other'
        },
        {
            icon: <TbBrandFramerMotion />,
            languageName: 'Framer Motion',
            category: 'frontend'
        },
    ]

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.02 * index,

            },
        })
    }

    const filterCategory = skills.filter((skill) => selectedCategory === 'all' || skill.category === selectedCategory);

    const filterTabActive = "'tab-active bg-secondary text-white rounded-lg transition-all ease-in-out duration-300'"
    return (
        <div className=' mx-auto lg:max-w-7xl mb-20 h-1/2 '>
            <div className='text-medium uppercase text-center text-3xl font-medium pt-10'>My Skills</div>
            <p className='text-center text-slate-400  mb-10 font-light'>Here are my skills</p>
            <motion.div role='tablist' className='tabs flex justify-center  pb-4' >
                <a role="tab" className={`tab ${selectedCategory === 'all' ? `${filterTabActive}` : ''}`} onClick={() => handleCategoryChange('all')}>All</a>
                <a role="tab" className={`tab ${selectedCategory === 'frontend' ? `${filterTabActive}` : ''}`} onClick={() => handleCategoryChange('frontend')}>Frontend</a>
                <a role="tab" className={`tab ${selectedCategory === 'backend' ?`${filterTabActive}` : ''}`} onClick={() => handleCategoryChange('backend')}>Backend</a>
                <a role="tab" className={`tab ${selectedCategory === 'other' ?`${filterTabActive}` : ''}`} onClick={() => handleCategoryChange('other')}>Other</a>
            </motion.div>
            <div className='mt-5 px-4 lg:p-0'>
                <ul className='flex gap-5 justify-center flex-wrap '>

                    {
                        filterCategory
                            .map(({ icon, languageName }, index) => (
                                <motion.li className='flex gap-5 flex-wrap justify-center'
                                    key={index}
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once: true
                                    }}
                                    custom={index}
                                >
                                    <TextIcon icon={icon} languageName={languageName} />
                                </motion.li>
                            ))
                    }

                </ul>
            </div>

        </div>
    )
}

export default Skills