import React from 'react'
import { FaGithub } from 'react-icons/fa'
import SkillIcon from './SkillIcon'

function SingeProject({ projectPicture, projectTitle, projectDescripton, projectStacks, projectLiveURL = null, projectGithubRepository }) {
    console.log(projectStacks)
    return (

        <div className='py-10'>
            <div className='w-full h-80 bg-base-300 rounded-xl' style={{
                backgroundImage: `url('${projectPicture}')`,
                backgroundSize: 'cover'
            }}></div>
            <div className='w-full h-60  rounded-xl'>
                <h1 className='pt-8 text-2xl font-medium'>{projectTitle}</h1>
                <p className='mt-4 text-lg leading-8 text-justify'>{projectDescripton}</p>

                <div className='flex flex-wrap mt-6 gap-3'>
                    {projectStacks.map((stack, index) => (
                        <SkillIcon key={index} languageName={stack} />
                    ))}


                </div>

                <div className='mt-6 flex gap-3'>
                    {projectLiveURL && (
                        <a href={projectLiveURL} target='_blank' className='btn btn-outline'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            View Live</a>
                    )}
                    <a href={projectGithubRepository} className='btn btn-outline'>
                        <FaGithub className='text-xl' />
                        View Repository</a>
                </div>
            </div>
        </div>
    )
}

export default SingeProject