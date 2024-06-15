import React from 'react'
import Avatar from '../assets/avatar.png'
function About() {
  return (
    <div className=' my-40 mx-auto lg:max-w-7xl'>
      <div className='text-medium text-center text-3xl font-medium pt-10'>About Me</div>
      <p className="text-center text-slate-400 font-light">Introduction</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center mt-20 mx-auto place-items-center'>
        <div
          className='h-96 w-96 bg-cover bg-center border-2 border-secondary rounded-2xl'
          style={{ backgroundImage: `url(${Avatar})` }}
        >
        </div>
        <div className='px-5 pt-8 lg:px-0 lg:pt-0'>
          <p className='text-justify text-xl '>
            Hello! I'm Mark Christian Mallari, a passionate and dedicated web developer based in the Philippines.  I discovered my love for programming at the age of 16 and have since honed my skills through hands-on experience and continuous learning.
          </p>
        </div>
      </div>


      <div className='mt-40 px-6 lg:px-0'>
        <h1 className='text-center mb-20 text-3xl font-medium'>Educational Background</h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Current</time>
              <div className="text-lg font-black">STI College Bacoor</div>

            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2022</time>

              <div className="text-lg font-black">Bacoor National High School Villa Maria Annex</div>
              <div className="text-secondary font-bold">Graduated</div>

            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2018</time>

              <div className="text-lg font-black">Queen's Row Elementary School</div>
              <div className="text-secondary font-bold">Graduated</div>

            </div>
            <hr />
          </li>

        </ul>
      </div>
    </div>
  )
}

export default About