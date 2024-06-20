import React from 'react'

function ContactDetails({ contactIcon, contactTitle, contactDescription }) {
    return (
        <div className=' px-4 py-2 rounded-xl flex items-center gap-4'>
            <div>

                {contactIcon}
            </div>
            <div >
                <div className='text-lg text-secondary font-medium'>{contactTitle}</div>
                <div className='text-xl '>
                    {contactDescription}
                </div>
            </div>
        </div>
    )
}

export default ContactDetails