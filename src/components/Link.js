import React from "react";


const Link = ({href, className, children}) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '',  href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    
    return (
        <div>
            <a
                className={className}
                onClick={onClick}
                href={href}> {children} </a>
        </div>
    );
};

export default Link;