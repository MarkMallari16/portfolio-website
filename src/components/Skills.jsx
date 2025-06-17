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
            category: 'frontend',
            bgColor: 'bg-orange-600'
        },
        {
            icon: <FaCss3Alt />,
            languageName: 'CSS',
            category: 'frontend',
            bgColor: 'bg-blue-600'
        },
        {
            icon: <DiJavascript />,
            languageName: 'JavaScript',
            category: 'frontend',
            bgColor: 'bg-yellow-600'
        },
        {
            icon: <FaReact />,
            languageName: 'React JS',
            category: 'frontend',
            bgColor: 'bg-cyan-600'
        },
        {
            icon: <FaBootstrap />,
            languageName: 'Bootsrap',
            category: 'frontend',
            bgColor: 'bg-purple-600'
        },
        {
            icon: <RiTailwindCssFill />,
            languageName: 'Tailwind',
            category: 'frontend',
            bgColor: 'bg-sky-600'
        },
        {
            icon: <SiPhp />,
            languageName: 'PHP',
            category: 'backend',
            bgColor: 'bg-purple-600'
        },
        {
            icon: <FaLaravel />,
            languageName: 'Laravel',
            category: 'backend',
            bgColor: 'bg-red-600'
        },
        {
            icon: <GrMysql />,
            languageName: 'SQL',
            category: 'backend',
            bgColor: 'bg-blue-600'
        },
        {
            icon: <FaGitAlt />,
            languageName: 'Git',
            category: 'other',
            bgColor: 'bg-orange-600'
        },
        {
            icon: <SiInertia />,
            languageName: 'Inertia',
            category: 'other',
            bgColor: 'bg-green-600'
        },
        , {
            icon: <FaJava />,
            languageName: 'Java',
            category: 'other',
            bgColor: 'bg-red-600'
        }, {
            icon: <SiCsharp />,
            languageName: 'C#',
            category: 'other',
            bgColor: 'bg-blue-600'
        }, {
            icon: <SiAndroidstudio />,
            languageName: 'Android Studio',
            category: 'other',
            bgColor: 'bg-green-600'
        },
        {
            icon: <TbBrandFramerMotion />,
            languageName: 'Framer Motion',
            category: 'frontend',
            bgColor: 'bg-purple-600'
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

    const filterTabActive = "'tab-active bg-secondary text-white  transition-all ease-in-out duration-300'"

    return (
        <div className='mx-auto lg:max-w-7xl pt-24 lg:pt-0 my-20 lg:mt-0 lg:mb-96'>
            <div className='text-medium uppercase text-center text-3xl font-medium pt-10'>My Skills</div>
            <p className='text-center text-slate-400 font-light  mb-10 '>Here are my skills</p>
            <motion.div role='tablist' className='tabs flex justify-center  pb-4' >
                <a role="tab" className={`rounded-lg tab ${selectedCategory === 'all' ? `${filterTabActive}` : ''}`} onClick={() => handleCategoryChange('all')}>All</a>
                <a role="tab" className={`rounded-lg tab ${selectedCategory === 'frontend' ? `${filterTabActive}` : ''}`} onClick={() => handleCategoryChange('frontend')}>Frontend</a>
                <a role="tab" className={`rounded-lg tab ${selectedCategory === 'backend' ? `${filterTabActive}` : ''}`} onClick={() => handleCategoryChange('backend')}>Backend</a>
                <a role="tab" className={`rounded-lg tab ${selectedCategory === 'other' ? `${filterTabActive}` : ''}`} onClick={() => handleCategoryChange('other')}>Other</a>
            </motion.div>
            <div className='mt-5 px-4 lg:p-0'>
                <ul className='flex gap-5 justify-center flex-wrap '>
                    {
                        filterCategory
                            .map(({ icon, languageName, bgColor }, index) => (
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
                                    <TextIcon icon={icon} languageName={languageName} className={bgColor} />
                                </motion.li>
                            ))
                    }

                </ul>
            </div>

        </div>
    )
}

export default Skills