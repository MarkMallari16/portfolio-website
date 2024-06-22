import React from 'react'
import { motion } from 'framer-motion';
function Loading() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ ease: 'easeInOut' }}
            className='h-screen grid place-content-center bg-neutral-content'>
            <span className="loading loading-infinity w-32 "></span>
        </motion.div>
    )
}

export default Loading