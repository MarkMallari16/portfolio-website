import React from 'react'
import Profile from '../assets/profile.png'
function About() {
  return (
    <div className='mt-10 mx-auto lg:max-w-7xl'>
      <div className='text-medium text-center text-3xl font-medium'>About Me</div>

      <div className='grid grid-cols-1 lg:grid-cols-2 items-center mt-20 mx-auto place-items-center'>
        <div >
          <img src={Profile} className='w-96 border-8 border-secondary rounded-lg' />
        </div>
        <div className='px-5 pt-8 lg:px-0 lg:pt-0'>
          <p className='text-justify'>
            Hello! I'm Mark Christian Mallari, a passionate and dedicated web developer based in the Philippines. With a keen eye for detail and a deep love for creating seamless, user-friendly web experiences, I have honed my skills in various front-end and back-end technologies.
          </p>

        </div>
      </div>
    </div>
  )
}

export default About