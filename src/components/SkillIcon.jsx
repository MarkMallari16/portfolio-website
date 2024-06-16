import React from 'react'

function SkillIcon({ icon, languageName }) {
    return (
        <div className='flex border border-base-300 px-4 py-1 rounded-lg bg-base-200 hover:bg-secondary hover:text-white transition-all ease-in-out duration-150'>
            <div className='flex items-center gap-1'>
                <p className='text-2xl'> {icon}</p>

                <p >{languageName}</p>
            </div>
        </div>
    )
}

export default SkillIcon