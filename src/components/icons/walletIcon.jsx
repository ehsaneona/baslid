import React from 'react';
import { cx } from 'class-variance-authority';

function WalletIcon({ isActive, className }) {
    return isActive ? (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            fill="none"
            viewBox="0 0 20 21">
            <g fill="#fff" clipPath="url(#clip0_263_1867)">
                <path d="M18.333 7.39v.674a.413.413 0 01-.416.417H2.082a.413.413 0 01-.417-.417V7.39c0-2.3 1.867-4.166 4.167-4.166h8.334c2.3 0 4.166 1.866 4.166 4.166zM17.916 9.731H2.083a.413.413 0 00-.417.417v3.908c0 2.3 1.867 4.167 4.167 4.167h8.334c2.3 0 4.166-1.867 4.166-4.167v-3.908a.413.413 0 00-.416-.417zm-9.583 4.95h-2.5a.63.63 0 01-.625-.625.63.63 0 01.625-.625h2.5a.63.63 0 01.625.625.63.63 0 01-.625.625z" />
            </g>
            <defs>
                <clipPath id="clip0_263_1867">
                    <path
                        fill="#fff"
                        d="M0 0H20V20H0z"
                        transform="translate(0 .723)"
                    />
                </clipPath>
            </defs>
        </svg>
    ) : (
        <svg
            className={cx(className, 'opacity-70')}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20">
            <g
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                clipPath="url(#clip0_180_2784)">
                <path d="M14.167 17.5H5.834a4.168 4.168 0 01-4.167-4.167V6.667c0-2.3 1.867-4.167 4.167-4.167h8.333c2.3 0 4.167 1.867 4.167 4.167v6.666c0 2.3-1.867 4.167-4.167 4.167zM1.667 8.383h16.667M5.833 13.333h2.5" />
            </g>
            <defs>
                <clipPath id="clip0_180_2784">
                    <path fill="white" d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default WalletIcon;
