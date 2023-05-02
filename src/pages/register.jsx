import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/components/authLayout';
import { Input } from '@/components/ui/input';

function RegisterPage() {
    return (
        <AuthLayout>
            <h2 className="text-4xl">Sign Up</h2>
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
            </div>
            <div className="text-gray-500 mt-5">
                Already have an account?{' '}
                <Link href="/signin">
                    <span className="text-white cursor-pointer">Login</span>
                </Link>
            </div>
        </AuthLayout>
    );
}

export default RegisterPage;
