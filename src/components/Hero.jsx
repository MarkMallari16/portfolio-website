import React from 'react';
import WaveHand from '../assets/wave.png';
import Profile from '../assets/profile.png';
import Blob from '../assets/blob.png';
function Hero() {
    return (
        <div className='h-screen grid grid-cols-1 lg:grid-cols-2 place-content-center  lg:items-center lg:justify-center'>
            <div>
                <div className='flex items-center w-full'>
                    <div className='text-6xl'>Mark Christian Mallari👋</div>

                </div>

                <div className='mt-4 '>
                    A skilled Web Developer Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia tempora fugiat pariatur, illum ullam earum nemo temporibus aut magnam laborum.
                </div>

                <div className='mt-4'>
                    <a className='btn bg-slate-300'>
                        <span>Download CV</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </a>
                </div>
            </div>
            <div>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF0066" d="M66.3,-21.3C76,8.5,67.3,44.5,45.8,59.3C24.3,74,-10,67.4,-34.8,49.1C-59.7,30.7,-75.2,0.6,-67.8,-25.9C-60.5,-52.4,-30.2,-75.4,-1,-75C28.3,-74.7,56.5,-51.1,66.3,-21.3Z" transform="translate(100 100)" />
                </svg>
            </div>
        </div>
    );
}

export default Hero;
