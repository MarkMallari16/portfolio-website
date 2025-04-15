import React from 'react'

function TextIcon({ icon, languageName }) {


    return (
        <div className='flex border px-4 py-2 rounded-lg  bg-base-200 hover:bg-base-300 hover:scale-110 hover:border-base-300 transition-all ease-in-out duration-200'>
            <div className='flex items-center gap-1'>
                <p className='text-2xl'> {icon}</p>

                <p className='select-none'>{languageName}</p>
            </div>
        </div>
    )
}

export default TextIcon