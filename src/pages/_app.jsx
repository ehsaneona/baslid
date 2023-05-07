import React from 'react';
import Head from 'next/head';
import router from 'next/router';
import NProgress from 'nprogress';
import { ToastContainer } from 'react-toastify';
// eslint-disable-next-line import/no-unresolved
import '@/static/global.css';
import AppContext from '../context/Store';
// import { getDefaultLayout } from 'widgets/pages/siteArea';

router.events.on('routeChangeStart', () => NProgress.start());
router.events.on('routeChangeComplete', () => NProgress.done());
router.events.on('routeChangeError', () => NProgress.done());

// eslint-disable-next-line react/prop-types
function MainApp({ Component, pageProps, err }) {
    const getLayout = Component.getLayout || (page => page);

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
                <meta name="mobile-web-app-capable" />
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="keywords" content="Keywords" />
            </Head>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                pauseOnFocusLoss={false}
                closeOnClick={false}
                rtl
            />
            <AppContext>
                <div className="bg-black-900 min-h-screen">
                    {getLayout(<Component {...pageProps} err={err} />)}
                </div>
            </AppContext>
        </>
    );
}

export default MainApp;
