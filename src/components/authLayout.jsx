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
            <div className="h-screen flex items-center justify-center">
                <Spinner color="white" width={50} height={50} />
            </div>
        );

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
