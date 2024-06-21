import React from 'react'

function ContactDetails({ contactIcon, contactTitle, contactDescription }) {
    return (
        <div className=' px-4 py-2 rounded-xl flex items-center gap-4'>
            <div className='bg-secondary p-2 rounded-lg text-base-100'>

                {contactIcon}
            </div>
            <div >
                <div className='text-lg font-extrabold'>{contactTitle}</div>
                <div className='text-xl '>
                    {contactDescription}
                </div>
            </div>
        </div>
    )
}

export default ContactDetails