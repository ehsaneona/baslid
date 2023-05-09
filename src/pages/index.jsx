import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { toast } from 'react-toastify';
import router from 'next/router';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/components/authLayout';
import { Input } from '@/components/ui/input';
import { useProvider } from '@/context/Store';
import { setToken } from '@/lib/localstorage';
import { Spinner } from '@/components/ui/spinner';
import { loginApi } from '@/services/core/login';

function SignInPage() {
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useProvider();

    const onSubmit = async formData => {
        setIsLoading(true);
        try {
            const { data } = await loginApi(formData);
            setUser(data);
            setToken(data.token);
            await router.push('/dashboard/statistics');
        } catch (e) {
            toast.error(e?.response?.data?.message);
        }
        setIsLoading(false);
    };

    return (
        <>
            <Head>
                <title>Sign in | Baslid</title>
            </Head>
            <h2 className="text-4xl">Sign In</h2>
            <p className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5 space-y-4">
                    <Input
                        type="email"
                        placeholder="Username"
                        className="w-full"
                        {...register('email', {
                            required: true,
                        })}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        className="w-full"
                        {...register('password', {
                            required: true,
                        })}
                    />
                </div>
                <div className="mt-5 space-y-4">
                    <Button className="w-full" type="submit">
                        {isLoading ? (
                            <Spinner color="black" width={32} height={32} />
                        ) : (
                            'Continue'
                        )}
                    </Button>
                </div>
            </form>
            <div className="text-gray-500 mt-5">
                I don't have an account?{' '}
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
