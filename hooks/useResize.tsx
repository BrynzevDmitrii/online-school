import { useState, useEffect } from 'react';

export const useResize = () => {
    const [width, setWidth] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = (event: Event) => {
            setWidth((event.target as Window).innerWidth);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            (event.target as Window).innerWidth > 768 ? setIsMobile(false) : setIsMobile(true);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width,
        isMobile
    };
};