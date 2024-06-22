import React from 'react'
import { FaGithub } from 'react-icons/fa'
import SkillIcon from './SkillIcon'

function SingeProject({ projectPicture, projectTitle, projectDescripton, projectStacks, projectLiveURL = null, projectGithubRepository }) {
    console.log(projectStacks)
    return (

        <div className='py-20 lg:py-10'>
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
                        <a href={projectLiveURL} target='_blank' className='btn btn-secondary '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>


                            Demo</a>
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