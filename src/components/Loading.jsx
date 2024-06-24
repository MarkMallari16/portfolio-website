import React from 'react'
import { motion } from 'framer-motion';

function Loading() {
    const rotateVariants = {
        start: {
            opacity: 0,
            rotate: 0
        },
        animate: {
            opacity: 1,
            rotate: ['0deg', '-90deg', '-180deg', '-270deg', '-360deg', '720deg']
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut' }}
            className={`h-screen grid place-content-center `}>
            <motion.div class="spinner"
                initial="start"
                animate="animate"
                variants={rotateVariants}
                exit={{opacity: 0}}
                transition={
                    {
                        repeat: Infinity,
                        duration: 1.5,
                        ease: 'easeOut',
                        times: [0, 0.1, 0.25, 0.4, 1]
                    }
                }>

            </motion.div>

        </motion.div>
    )
}

export default Loading