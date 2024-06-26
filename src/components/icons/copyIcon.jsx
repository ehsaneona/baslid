import React from 'react';

function CopyIcon({ className, ...rest }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 18 18"
            {...rest}>
            <path
                stroke="#fff"
                d="M12 9.675v3.15c0 2.625-1.05 3.675-3.675 3.675h-3.15C2.55 16.5 1.5 15.45 1.5 12.825v-3.15C1.5 7.05 2.55 6 5.175 6h3.15C10.95 6 12 7.05 12 9.675z"
            />
            <path
                stroke="#fff"
                d="M16.5 5.175v3.15C16.5 10.95 15.45 12 12.825 12H12V9.675C12 7.05 10.95 6 8.325 6H6v-.825C6 2.55 7.05 1.5 9.675 1.5h3.15c2.625 0 3.675 1.05 3.675 3.675z"
            />
        </svg>
    );
}

export default CopyIcon;
