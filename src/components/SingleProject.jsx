import React from 'react'
import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'
import TextIcon from './TextIcon'

function SingeProject({
    picture,
    title,
    description,
    stacks,
    liveUrl = null,
    githubRepository }) {

    return (
        <div className='pb-16 lg:pb-16'>
            <div className='h-80 rounded-xl ' style={{
                backgroundImage: `url('${picture}')`,
                backgroundSize: 'cover'
            }}></div>
            <div className='w-full rounded-xl'>
                <h1 className='mt-8 text-2xl font-medium'>{title}</h1>

                <p className='mt-4 text-base-content text-lg  text-justify '>{description}</p>

                <div className='flex flex-wrap mt-6 gap-3 overflow-hidden rounded-lg'>
                    {stacks.map((stack, index) => (
                        <TextIcon key={index} languageName={stack} />
                    ))}
                </div>

                <div className='mt-8 flex items-center gap-3'>
                    {liveUrl && (
                        <a href={liveUrl} target='_blank' className='btn btn-secondary font-semibold'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            Demo</a>
                    )}
                    <a href={githubRepository} className='btn btn-outline font-semibold' target='_blank'>
                        <FaGithub className='text-xl' />
                        View Repository</a>
                </div>
            </div>
        </div>
    )
}

SingeProject.propTypes = {
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    projectDescription: PropTypes.string,
    stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveUrl: PropTypes.string,
    projectGithubRepository: PropTypes.string.isRequired,
};

export default SingeProject