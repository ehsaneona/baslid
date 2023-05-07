import React from 'react';

function AuthLayout({ children }) {
    return (
        <div className="flex text-white h-screen">
            <div className="bg-black-800 w-full h-full flex flex-col !justify-center !items-center text-center">
                <div className="max-w-1/2">{children}</div>
            </div>
            <div className="h-full w-9/12 flex !justify-center !items-center relative">
                <img src="image/signin-vector.png" alt="vector" />
                <img
                    className="absolute bottom-12"
                    src="/logo.png"
                    alt="logo"
                />
            </div>
        </div>
    );
}

export default AuthLayout;
