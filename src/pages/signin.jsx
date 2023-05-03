import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AuthLayout from '@/components/authLayout';
import { Input } from '@/components/ui/input';
import Head from 'next/head';

function SignInPage() {
    return (
        <>
            <Head>
                <title>Sign in | Baslid</title>
            </Head>
            <AuthLayout>
                <h2 className="text-4xl">Sign In</h2>
                <p className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                </p>
                <div className="mt-5 space-y-4">
                    <Input
                        type="text"
                        placeholder="Username"
                        className="w-full"
                    />
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
                    I don't have an account?{' '}
                    <Link href="/signup">
                        <span className="text-white cursor-pointer">
                            Register
                        </span>
                    </Link>
                </div>
            </AuthLayout>
        </>
    );
}

export default SignInPage;
