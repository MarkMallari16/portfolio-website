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
        <div className='pb-60 lg:pb-20'>
            <div className='h-80 rounded-xl ' style={{
                backgroundImage: `url('${picture}')`,
                backgroundSize: 'cover'
            }}></div>
            <div className='w-full h-64  rounded-xl'>
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z" clipRule="evenodd" />
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