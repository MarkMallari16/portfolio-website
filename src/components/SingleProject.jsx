import React, { useState, useEffect } from 'react'
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
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = picture;
        img.onload = () => setIsLoaded(true);
    }, [picture]);

    return (
        <div className='pb-10 lg:pb-16 my-6'>
            {!isLoaded && (
                <div className='h-80 rounded-xl skeleton animate-pulse'></div>
            )}

            {isLoaded && (
                <div className='h-[30rem] rounded-xl ring-1 ring-base-300 ' style={{
                    backgroundImage: `url('${picture}')`,
                    backgroundSize: 'cover'
                }}></div>
            )
            }

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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                            </svg>
                            Demo
                        </a>
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