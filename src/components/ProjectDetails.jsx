import React from 'react'
import { FaGithub } from 'react-icons/fa'
import SkillIcon from './SkillIcon'

function ProjectDetails({ projectPicture, projectTitle, projectDescripton, projectGithubRepository }) {
    return (

        <div className='py-20'>
            <div className='w-full h-80 bg-base-300 rounded-xl' style={{
                backgroundImage: `url('${projectPicture}')`,
                backgroundSize: 'cover'
            }}></div>
            <div className='w-full h-60  rounded-xl'>
                <h1 className='pt-8 text-2xl font-medium'>{projectTitle}</h1>
                <p className='mt-4 text-lg leading-8'>{projectDescripton}</p>

                <div className='flex mt-3 gap-3'>
                    <SkillIcon languageName='React JS' />
                    <SkillIcon languageName='Tailwind' />

                </div>

                <div className='mt-6 flex gap-3'>

                    <a href={projectGithubRepository} className='btn btn-outline'>
                        <FaGithub className='text-xl' />
                        View Repository</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails