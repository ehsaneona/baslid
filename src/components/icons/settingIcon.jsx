import React from 'react';
import { cx } from 'class-variance-authority';

function HomeIcon({ isActive, className }) {
    return isActive ? (
        <svg
            className={className}
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.5 8.31429V13.1226C2.5 14.8893 2.5 14.8893 4.16667 16.0143L8.75 18.6643C9.44167 19.0643 10.5667 19.0643 11.25 18.6643L15.8333 16.0143C17.5 14.8893 17.5 14.8893 17.5 13.131V8.31429C17.5 6.55596 17.5 6.55596 15.8333 5.43096L11.25 2.78096C10.5667 2.38096 9.44167 2.38096 8.75 2.78096L4.16667 5.43096C2.5 6.55596 2.5 6.55596 2.5 8.31429Z"
                fill="white"
            />
            <path
                d="M10 13.2227C11.3807 13.2227 12.5 12.1034 12.5 10.7227C12.5 9.34194 11.3807 8.22266 10 8.22266C8.61929 8.22266 7.5 9.34194 7.5 10.7227C7.5 12.1034 8.61929 13.2227 10 13.2227Z"
                fill="#35353A"
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
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.5 8.314v4.809c0 1.766 0 1.766 1.667 2.891l4.583 2.65c.692.4 1.817.4 2.5 0l4.583-2.65C17.5 14.89 17.5 14.89 17.5 13.131V8.314c0-1.758 0-1.758-1.667-2.883l-4.583-2.65c-.683-.4-1.808-.4-2.5 0l-4.583 2.65C2.5 6.556 2.5 6.556 2.5 8.314z"
            />
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10 13.223a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            />
        </svg>
    );
}

export default HomeIcon;
