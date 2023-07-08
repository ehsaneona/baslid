import React from 'react';

function ArrowIcon({ className }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <g
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                opacity="0.3">
                <path d="M19 12H5M14 17l5-5M14 7l5 5" />
            </g>
        </svg>
    );
}

export default ArrowIcon;
