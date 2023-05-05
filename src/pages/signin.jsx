import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/components/authLayout';
import { Input } from '@/components/ui/input';

function SignInPage() {
    return (
        <>
            <Head>
                <title>Sign in | Baslid</title>
            </Head>
            <h2 className="text-4xl">Sign In</h2>
            <p className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <div className="mt-5 space-y-4">
                <Input type="text" placeholder="Username" className="w-full" />
                <Input
                    type="password"
                    placeholder="Password"
                    className="w-full"
                />
            </div>
            <div className="mt-5 space-y-4">
                <Button className="w-full">Continue</Button>
                <Button className="w-full" variant="secondary">
                    Reset Password
                </Button>
            </div>
            <div className="text-gray-500 mt-5">
                {/* eslint-disable-next-line react/no-unescaped-entities */}I
                don't have an account?{' '}
                <Link href="/signup">
                    <span className="text-white cursor-pointer">Register</span>
                </Link>
            </div>
        </>
    );
}

SignInPage.getLayout = function getLayout(page) {
    return <AuthLayout>{page}</AuthLayout>;
};

export default SignInPage;
