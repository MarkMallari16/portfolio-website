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
                        <a href={projectLiveURL} target='_blank' className='btn btn-secondary font-semibold'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z" clipRule="evenodd" />
                            </svg>



                            Demo</a>
                    )}
                    <a href={projectGithubRepository} className='btn btn-outline font-semibold' target='_blank'>
                        <FaGithub className='text-xl' />
                        View Repository</a>
                    <div className='block lg:flex  w-full items-center gap-2'>
                        <div className='ring-1 ring-neutral w-full rounded-lg'>

                        </div>
                        <span className='font-medium'>2024</span>
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