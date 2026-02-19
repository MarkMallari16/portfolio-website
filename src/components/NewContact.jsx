import { motion } from 'framer-motion'
const NewContact = () => {
    const headerVariants = {
        hidden: {
            x: -20,
            opacity: 0,
            transition: {
                ease: 'ease',
            }
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                duration: 0.4,
            }
        }
    }
    const contentVariants = {
        hidden: {
            x: -20,
            opacity: 0,
            transition: {
                ease: 'ease',
            }
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                duration: 0.6,
                delay: 0.2

            }
        }
    }
    const viewPortVariants = {
        once: true,
        amount: 0.8
    }
    return (
        <div className='pt-24 lg:pt-20 pb-40 px-6 lg:px-0 overflow-hidden'>
            <div viewport={{ once: false }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={headerVariants}
                    viewport={viewPortVariants}>
                    <h2 className='uppercase text-3xl  font-medium'>
                        Contact Me!
                    </h2>
                    <span className="block w-16 h-1 bg-secondary mt-2 mb-4 rounded"></span>
                    <p className='text-slate-400 font-light'>Let's connect each other</p>
                </motion.div>

                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    variants={contentVariants}
                    viewport={viewPortVariants}
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