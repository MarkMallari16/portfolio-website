import React from 'react'
import { motion } from 'framer-motion'
const NewContact = () => {
    const fadeInAnimationVariants = {
        hidden: {
            x: -60,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.5
            }
        }
    }
    return (
        <div className='pt-24 lg:pt-20 pb-40 px-6 lg:px-0 overflow-hidden'>
            <div viewport={{ once: true }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInAnimationVariants}
                    transition={{ ease: 'easeInOut' }}
                    viewport={{ once: true }}>
                    <h2 className='uppercase text-3xl  font-medium'>
                        Contact Me!
                    </h2>
                    <p className='text-slate-400 font-light'>Let's connect each other</p>
                </motion.div>
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInAnimationVariants}
                    transition={{ ease: 'easeInOut' }}
                    viewport={{ once: true }}
                    className='mt-8 text-6xl md:text-6xl lg:text-9xl font-black hover:text-secondary break-all transition-colors ease-in-out duration-200'>
                    <a href="mailto:mallariftw01@gmail.com">
                        mark.
                        mallari16
                        @gmail.com</a>
                </motion.h1>
            </div>
        </div >
    )
}

export default NewContact