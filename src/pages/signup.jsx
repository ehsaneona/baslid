import React from 'react';
import Link from 'next/link';
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
import Head from 'next/head';
import { Skeleton } from '@/components/ui/skeleton';
import { Spinner } from '@/components/ui/spinner';

function RegisterPage() {
    return (
        <>
            <Head>
                <title>Sign up | Baslid</title>
            </Head>
            <AuthLayout>
                <h2 className="text-4xl">Sign Up</h2>
                <p className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                </p>
                <div className="mt-5 space-y-4">
                    <div className="flex space-x-4">
                        <Input
                            type="text"
                            placeholder="First name"
                            className="w-full"
                        />
                        <Input
                            type="text"
                            placeholder="Last name"
                            className="w-full"
                        />
                    </div>
                    <Input type="tel" placeholder="Phone" className="w-full" />
                    <Input
                        type="email"
                        placeholder="Email"
                        className="w-full"
                    />
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Account type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="Seller">Seller</SelectItem>
                                <SelectItem value="Buyer">Buyer</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="apples">iur</SelectItem>
                                <SelectItem value="appless">sApple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Input
                        type="password"
                        placeholder="Password"
                        className="w-full"
                    />
                </div>
                <div className="mt-5 space-y-4">
                    <Button className="w-full">Continue</Button>
                </div>
                <div className="text-gray-500 mt-5">
                    Already have an account?{' '}
                    <Link href="/signin">
                        <span className="text-white cursor-pointer">Login</span>
                    </Link>
                </div>
            </AuthLayout>
        </>
    );
}

export default RegisterPage;
