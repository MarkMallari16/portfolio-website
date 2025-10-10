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
import { IoLogoVercel } from 'react-icons/io5';

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
            textColor: "text-orange-500"
        },
        {
            icon: <FaCss3Alt />,
            languageName: 'CSS',
            category: 'frontend',
            textColor: "text-blue-500"
        },
        {
            icon: <DiJavascript />,
            languageName: 'JavaScript',
            category: 'frontend',
            textColor: "text-yellow-500"

        },
        {
            icon: <FaReact />,
            languageName: 'React JS',
            category: 'frontend',
            textColor: "text-blue-500"
        },
        {
            icon: <FaBootstrap />,
            languageName: 'Bootsrap',
            category: 'frontend',
            textColor: "text-violet-500"
        },
        {
            icon: <RiTailwindCssFill />,
            languageName: 'Tailwind',
            category: 'frontend',
            textColor: "text-cyan-500"
        },
        {
            icon: <SiPhp />,
            languageName: 'PHP',
            category: 'backend',
            textColor: "text-indigo-500"
        },
        {
            icon: <FaLaravel />,
            languageName: 'Laravel',
            category: 'backend',
            textColor: "text-red-500"
        },
        {
            icon: <GrMysql />,
            languageName: 'SQL',
            category: 'backend',
            textColor: "text-orange-500"
        },
        {
            icon: <FaGitAlt />,
            languageName: 'Git',
            category: 'other',
            textColor: "text-red-500"
        },
        {
            icon: <SiInertia />,
            languageName: 'Inertia',
            category: 'other',
            textColor: "text-violet-500"
        },
        , {
            icon: <FaJava />,
            languageName: 'Java',
            category: 'other',
            textColor: "text-amber-500"

        }, {
            icon: <SiCsharp />,
            languageName: 'C#',
            category: 'other',
            textColor: "text-violet-500"

        }, {
            icon: <SiAndroidstudio />,
            languageName: 'Android Studio',
            category: 'other',
            textColor: "text-green-500"
        },
        {
            icon: <TbBrandFramerMotion />,
            languageName: 'Motion',
            category: 'frontend',
            textColor: "text-yellow-500"
        },
        {
            icon: <IoLogoVercel />,
            languageName: 'Vercel',
            category: 'other',
        }
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
                delay: 0.06 * index,

            },
        })
    }

    const filterCategory = skills.filter((skill) => selectedCategory === 'all' || skill.category === selectedCategory);

    const filterTabActive = "'tab-active bg-secondary text-white  transition-all ease-in-out duration-300'"

    return (
        <div className='mx-auto lg:max-w-7xl pt-24 lg:pt-0 my-20 lg:mt-0 lg:mb-96'>
            <section className="py-10 text-center">
                <h2 className="text-3xl font-semibold uppercase relative inline-block">
                    My Skills
                    <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded"></span>
                </h2>
                <p className="text-slate-400 font-light mt-4 mb-10">Technologies I work with</p>
            </section>
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
                            .map(({ icon, languageName, textColor }, index) => (
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
                                    <TextIcon icon={icon} languageName={languageName} className={`py-3 hover:bg-base-300 ${textColor}`} />
                                </motion.li>
                            ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default Skills