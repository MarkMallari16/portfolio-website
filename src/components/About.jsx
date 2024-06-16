import React from 'react'
import Avatar from '../assets/avatar.png'
import Timeline from './Timeline'
import { motion } from 'framer-motion'
function About() {
  return (
    <div className='mx-auto px-6 lg:px-0 lg:max-w-7xl'>
      <div className='text-medium text-center text-3xl font-medium pt-10'>About Me</div>
      <p className="text-center text-slate-400 font-light">Introduction</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center pt-20 mx-auto place-items-center gap-10 lg:gap-20'>
        <div className="mockup-code h-full w-full">
          <pre data-prefix="$"><code>npm i mark mallari</code></pre>
          <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
          <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
        </div>
        <div className='px-5 pt-8 lg:px-0 lg:pt-0'>
          <div className='flex gap-4 mb-8'>
            <div className='ring-1 ring-inset w-full py-10 px-6 rounded-xl  hover:bg-secondary hover:text-white transition-colors ease-linear'>
              <div className='text-4xl font-bold'>12</div>
              <div className='font-medium'
              > Web Developer</div>
            </div>
            <motion.div className='ring-1 ring-inset w-full py-10 px-6 rounded-xl  hover:bg-secondary hover:text-white transition-colors ease-linear'>
              <div className='text-4xl font-bold'>12</div>
              <div className='font-medium'>Mobile Developer</div>
            </motion.div>
            <motion.div className='ring-1 ring-inset w-full py-10 px-6 rounded-xl  hover:bg-secondary hover:text-white transition-colors ease-linear'>
              <div className='text-4xl font-bold'>12</div>
              <div className='font-medium'>Desktop Developer</div>
            </motion.div>
          </div>
          <p className='text-justify text-xl '>
            Hello! I'm Mark Christian Mallari, a passionate and dedicated web developer based in the Philippines.  I discovered my love for programming at the age of 16 and have since honed my skills through hands-on experience and continuous learning.
          </p>
        </div>
      </div>

      <Timeline />

    </div>
  )
}

export default About