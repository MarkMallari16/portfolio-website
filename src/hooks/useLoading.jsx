import React, { useEffect, useState } from 'react'

function useLoading() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);
    
    return isLoading;
}

export default useLoading