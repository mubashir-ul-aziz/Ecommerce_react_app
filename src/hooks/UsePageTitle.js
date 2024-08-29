
// hooks/usePageTitle.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function usePageTitle() {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;

        switch (path) {
            case '/':
                document.title = 'Home';
            break;
            default:
                document.title = path.charAt(1).toUpperCase() + path.slice(2);
                break;
        }
    }, [location]);
}

export default usePageTitle; // Make sure it's exported as default
