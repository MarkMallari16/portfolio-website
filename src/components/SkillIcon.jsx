import React from 'react'

function SkillIcon({ icon, languageName }) {


    return (
        <div className='flex border px-4 py-1 rounded-lg  bg-base-200 hover:bg-secondary hover:scale-110 hover:border-secondary transition-all ease-in-out duration-300'>
            <div className='flex items-center gap-1'>
                <p className='text-2xl'> {icon}</p>

                <p className='select-none'>{languageName}</p>
            </div>
        </div>
    )
}

export default SkillIcon