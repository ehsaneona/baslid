import React, { useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getStrapiToken } from '@/lib/localstorage';
import { useProvider } from '@/context/Store';
import { meApi } from '@/services/me';

function Layout({ children }) {
    const { strapiUser, setStrapiUser } = useProvider();

    useEffect(async () => {
        if (getStrapiToken()) {
            if (!strapiUser) {
                const data = await meApi();
                setStrapiUser(data);
            }
        }
    }, []);

    return (
        <div className="min-h-screen max-w-7xl mx-auto px-3">
            <Header />
            <div className="mt-20 lg:mt-44">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
