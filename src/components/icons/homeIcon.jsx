import React from 'react';
import { cx } from 'class-variance-authority';

function HomeIcon({ isActive, className }) {
    return isActive ? (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20">
            <path
                fill="#fff"
                d="M13.6 17.917H6.4c-1.184 0-2.425-.925-2.767-2.059l-1.375-4.583c-.258-.858.025-2.108.633-2.775l4.976-5.45c1.174-1.283 3.091-1.283 4.266 0l4.975 5.45c.608.667.892 1.917.633 2.775l-1.375 4.583c-.341 1.134-1.583 2.059-2.766 2.059z"
            />
            <path
                fill="#35353A"
                d="M10 13.642a2.192 2.192 0 100-4.384 2.192 2.192 0 000 4.384z"
            />
        </svg>
    ) : (
        <svg
            className={cx(className, 'opacity-70')}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            fill="none"
            viewBox="0 0 20 21">
            <path
                stroke="white"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M13.6 18.64H6.4c-1.184 0-2.425-.926-2.767-2.059l-1.375-4.583c-.258-.859.025-2.109.633-2.775l4.976-5.45c1.174-1.284 3.091-1.284 4.266 0l4.975 5.45c.608.666.892 1.916.633 2.775l-1.375 4.583c-.341 1.133-1.583 2.058-2.766 2.058z"
            />
            <path
                stroke="white"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M10 14.364a2.192 2.192 0 100-4.383 2.192 2.192 0 000 4.383z"
            />
        </svg>
    );
}

export default HomeIcon;
