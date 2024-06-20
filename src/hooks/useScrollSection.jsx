import { useRef } from 'react'

function useScrollSection() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);


    const scrollIntoSection = ( ref) => {
        
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return { homeRef, aboutRef, skillsRef, projectsRef, contactRef, scrollIntoSection };

}

export default useScrollSection