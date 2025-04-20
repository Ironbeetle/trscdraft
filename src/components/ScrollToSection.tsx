import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const ScrollToSection: React.FC = () => {
    const { hash } = useLocation();
    
    useEffect(() => {
        if (hash) {
            const elementId = hash.replace('#', '');
            const element = document.getElementById(elementId);
            
            if (element) {
                // Use requestAnimationFrame for smoother scrolling
                requestAnimationFrame(() => {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                });
            }
        } else {
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [hash]);

    return null;
};
export default ScrollToSection
