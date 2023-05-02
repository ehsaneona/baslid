import React from 'react';
import NextErrorComponent from 'next/error';

// eslint-disable-next-line react/prop-types
function Error({ statusCode }) {
    return <NextErrorComponent statusCode={statusCode} />;
}

Error.getInitialProps = async ({ res, err }) => {
    const errorInitialProps = await NextErrorComponent.getInitialProps({
        res,
        err,
    });

    if (res?.statusCode === 404) return { statusCode: 404 };

    return errorInitialProps;
};

export default Error;
