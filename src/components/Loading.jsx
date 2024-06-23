import React from 'react'
import { motion } from 'framer-motion';
import useTheme from '../hooks/useTheme';
function Loading() {

    const { theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut' }}
            className={`h-screen grid place-content-center `}>
            <div class="spinner">

            </div>
        </motion.div>
    )
}

export default Loading