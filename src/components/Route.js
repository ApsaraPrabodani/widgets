import { useEffect, useState } from "react";

const Route = ({pathname, children}) => {
    const [currentPathName, setCurrentPathName] = useState(window.location.pathname);

    useEffect(()=> {
        const onLocaionChange = () => {
            setCurrentPathName(window.location.pathname);
        };

        window.addEventListener('popstate', onLocaionChange);

        return () => {
            window.removeEventListener('popstate', onLocaionChange)
        };
    }, []);
    return currentPathName === pathname ? children : null;
}

export default Route;