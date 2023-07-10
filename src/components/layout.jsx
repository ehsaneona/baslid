import React, { useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getStrapiToken } from '@/lib/localstorage';
import { useProvider } from '@/context/Store';
import { meApi } from '@/services/me';
import { useRouter } from 'next/router';
import { validatePaymentApi } from '@/services/validatePayment';
import { toast } from 'react-toastify';

function Layout({ children }) {
    const router = useRouter();
    const { strapiUser, setStrapiUser } = useProvider();

    useEffect(async () => {
        if (getStrapiToken()) {
            if (!strapiUser) {
                const data = await meApi();
                setStrapiUser(data);
            }
        }
    }, []);
    useEffect(async () => {
        if (router.query.paymentId && router.query.code) {
            try {
                const result = await validatePaymentApi({
                    paymentId: router.query.paymentId,
                    code: router.query.code,
                });
                if (result) toast.success('Your payment was successful.');
            } catch (e) {}
        }
    }, [router]);

    return (
        <div className="min-h-screen max-w-7xl mx-auto px-3">
            <Header />
            <div className="mt-20 lg:mt-44">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
