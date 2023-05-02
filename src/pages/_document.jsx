import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

function MainDocument() {
    return (
        <Html dir="ltr" lang="en">
            <Head>
                <meta name="theme-color" content="#0C0E3C" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

MainDocument.getInitialProps = async ctx => {
    const initialProps = await Document.getInitialProps(ctx);
    return {
        ...initialProps,
    };
};

export default MainDocument;
