import React, { useState } from 'react';
import router from 'next/router';
import { getToken } from '@/lib/localstorage';
import { Spinner } from '@/components/ui/spinner';
import { useMount } from 'react-use';

function AuthLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useMount(() => {
        if (getToken()) router.replace('/dashboard/statistics');
        else setIsLoading(false);
    });

    if (isLoading)
        return (
            <div className="bg-black-900 min-h-screen">
                <div className="h-screen flex items-center justify-center">
                    <Spinner color="white" width={50} height={50} />
                </div>
            </div>
        );

    return (
        <div className="bg-black-900 min-h-screen">
            <div className="flex text-white min-h-screen bg-black-800 lg:bg-transparent">
                <div className="bg-black-800 w-full flex flex-col justify-center items-center text-center">
                    <div className="p-6 lg:p-0 lg:max-w-1/2">{children}</div>
                    <img
                        className="my-6 lg:hidden"
                        src="/logo-white.png"
                        alt="logo"
                    />
                </div>
                <div className="w-9/12 !justify-center !items-center relative hidden lg:flex">
                    <img src="image/signin-vector.png" alt="vector" />
                    <img
                        className="absolute bottom-12"
                        src="/logo.png"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
