import React from 'react'
import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'
import SkillIcon from './SkillIcon'

function SingeProject({
    projectPicture,
    projectTitle,
    projectDescripton,
    projectStacks,
    projectLiveURL = null,
    projectGithubRepository }) {

    return (

        <div className='py-20 lg:py-16 '>
            <div className='drop-shadow-md h-80 rounded-xl' style={{
                backgroundImage: `url('${projectPicture}')`,
                backgroundSize: 'cover'
            }}></div>
            <div className='w-full h-60  rounded-xl'>
                <h1 className='pt-8 text-2xl font-medium'>{projectTitle}</h1>

                <p className='mt-4 text-base-content text-lg lg:text-lg leading-8 text-justify text-wrap'>{projectDescripton}</p>

                <div className='flex flex-wrap mt-6 gap-3'>
                    {projectStacks.map((stack, index) => (
                        <SkillIcon key={index} languageName={stack} />
                    ))}


                </div>

                <div className='mt-8 flex items-center gap-3'>
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
                    <div className='flex w-full items-center gap-2'>
                        <div className='h-1 bg-secondary w-full rounded-lg'>

                        </div>
                        2024
                    </div>
                </div>
            </div>
        </div>
    )
}

SingeProject.propTypes = {
    projectPicture: PropTypes.string.isRequired,
    projectTitle: PropTypes.string.isRequired,
    projectDescription: PropTypes.string,
    projectStacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectLiveURL: PropTypes.string,
    projectGithubRepository: PropTypes.string.isRequired,
};

export default SingeProject