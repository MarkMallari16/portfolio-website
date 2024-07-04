import React from 'react'

function SkillIcon({ icon, languageName }) {


    return (
        <div className='flex border px-4 py-1 rounded-lg border-gra bg-base-200 hover:bg-secondary hover:border-secondary hover:text-white transition-all ease-in-out duration-150'>
            <div className='flex items-center gap-1'>
                <p className='text-2xl'> {icon}</p>

                <p >{languageName}</p>
            </div>
        </div>
    )
}

export default SkillIcon