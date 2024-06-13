import React from 'react'

function SkillIcon({ icon, languageName }) {
    return (
        <div className='flex border border-base-300 px-4 py-1 rounded-lg'>
            <div className='flex items-center gap-1'>
                <p className='text-3xl'> {icon}</p>

                <p className='font-normal'>{languageName}</p>
            </div>
        </div>
    )
}

export default SkillIcon