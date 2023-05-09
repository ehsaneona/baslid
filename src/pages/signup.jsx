import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Controller, useForm } from 'react-hook-form';
import router from 'next/router';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/components/authLayout';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Countries, Types } from '@/constants/appData';
import { registerApi } from '@/services/core/register';
import { Spinner } from '@/components/ui/spinner';
import { useProvider } from '@/context/Store';
import { setToken } from '@/lib/localstorage';
import { toast } from 'react-toastify';

function RegisterPage() {
    const { register, handleSubmit, control } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useProvider();

    const onSubmit = async formData => {
        setIsLoading(true);
        try {
            const { data } = await registerApi(formData);
            setUser(data);
            setToken(data.token);
            router.push('/dashboard/statistics');
        } catch (e) {
            toast.error(e?.response?.data?.message);
        }
        setIsLoading(false);
    };

    return (
        <>
            <Head>
                <title>Sign up | Baslid</title>
            </Head>
            <h2 className="text-4xl">Sign Up</h2>
            <p className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5 space-y-4">
                    <div className="flex space-x-4">
                        <Input
                            type="text"
                            placeholder="First name"
                            className="w-full"
                            {...register('firstName', { required: true })}
                        />
                        <Input
                            type="text"
                            placeholder="Last name"
                            className="w-full"
                            {...register('lastName', { required: true })}
                        />
                    </div>
                    <Input
                        type="tel"
                        placeholder="Phone"
                        className="w-full"
                        {...register('phone', {
                            required: true,
                        })}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        className="w-full"
                        {...register('email', {
                            required: true,
                        })}
                    />
                    <Controller
                        render={({ field: { onChange } }) => (
                            <Select onValueChange={e => onChange(e)}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Account type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {Types.map(type => (
                                            <SelectItem
                                                value={type.id}
                                                key={type.id}>
                                                {type.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                        control={control}
                        name="type"
                    />
                    <Controller
                        render={({ field: { onChange } }) => (
                            <Select onValueChange={e => onChange(e)}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {Countries.map(country => (
                                            <SelectItem
                                                value={country.code}
                                                key={country.code}>
                                                {country.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                        control={control}
                        name="country"
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
                Already have an account?{' '}
                <Link href="/">
                    <span className="text-white cursor-pointer">Login</span>
                </Link>
            </div>
        </>
    );
}

RegisterPage.getLayout = function getLayout(page) {
    return <AuthLayout>{page}</AuthLayout>;
};

export default RegisterPage;
