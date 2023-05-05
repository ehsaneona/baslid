import React from 'react';

function SearchIcon(props) {
    return (
        <svg
            {...props}
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11 20.5C15.9706 20.5 20 16.4706 20 11.5C20 6.52944 15.9706 2.5 11 2.5C6.02944 2.5 2 6.52944 2 11.5C2 16.4706 6.02944 20.5 11 20.5Z"
                stroke="white"
                strokeOpacity="0.4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.9299 21.1898C19.4599 22.7898 20.6699 22.9498 21.5999 21.5498C22.4499 20.2698 21.8899 19.2198 20.3499 19.2198C19.2099 19.2098 18.5699 20.0998 18.9299 21.1898Z"
                fill="white"
                fillOpacity="0.4"
            />
        </svg>
    );
}

export default SearchIcon;
