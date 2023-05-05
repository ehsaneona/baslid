import React from 'react';
import { cx } from 'class-variance-authority';

function HomeIcon({ isActive, className }) {
    return isActive ? (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            fill="none"
            viewBox="0 0 20 21">
            <path
                fill="#fff"
                d="M17.025 7.04c-.567-.659-1.358-1.05-2.242-1.167L14.35 4.13a2.283 2.283 0 00-2.225-1.733h-4.25A2.3 2.3 0 005.65 4.13l-.433 1.742c-.884.116-1.667.508-2.242 1.166-.683.784-.975 1.825-.817 2.917l.859 5.992c.241 1.716 1.85 3.108 3.583 3.108h6.792c1.733 0 3.341-1.392 3.583-3.108l.858-5.992c.159-1.1-.125-2.133-.808-2.917zm-5.308 7.416H8.292a.63.63 0 01-.625-.625.63.63 0 01.625-.625h3.425a.63.63 0 01.625.625.63.63 0 01-.625.625zm-5.2-8.642l.35-1.383a1.041 1.041 0 011.008-.792h4.25c.475 0 .892.325 1.008.792l.35 1.392H6.517v-.009z"
            />
        </svg>
    ) : (
        <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cx(className, 'opacity-70')}>
            <g clipPath="url(#clip0_256_3524)">
                <path
                    d="M5.75 6.43933H14.25C16.15 6.43933 17.4833 7.981 17.2167 9.86433L16.3583 15.856C16.1583 17.2727 14.8167 18.431 13.3917 18.431H6.60002C5.16668 18.431 3.83333 17.2727 3.63333 15.856L2.775 9.86433C2.50833 7.981 3.85 6.43933 5.75 6.43933Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                />
                <path
                    d="M5.7168 6.43928L6.25848 4.27262C6.44182 3.53095 7.10849 3.01428 7.87515 3.01428H12.1251C12.8918 3.01428 13.5585 3.53095 13.7418 4.27262L14.2835 6.43928"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.2832 13.8309H11.7165"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_256_3524">
                    <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.722656)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}

export default HomeIcon;
