import React from 'react'

const SocialLink = ({ link, children, dataTip,  position = "right" }) => {
    return (
        <a href={link} target='_blank' className={`tooltip hover:tooltip-open tooltip-${position} p-2 bg-base-300 rounded-md hover:bg-secondary hover:text-base-300 transition-all ease-in-out`} data-tip={dataTip}>
            {children}
        </a>
    )
}

export default SocialLink