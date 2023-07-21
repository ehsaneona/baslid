import Link from 'next/link';
import { cx } from 'class-variance-authority';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BasketIcon from '@/components/icons/basketIcon';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { useProvider } from '@/context/Store';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Spinner } from '@/components/ui/spinner';
import { setStrapiToken } from '@/lib/localstorage';
import { loginApi } from '@/services/login';
import { registerApi } from '@/services/register';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_KEY } from '@/constants/appSettings';
import { ordersApi } from '@/services/orders';

const Header = () => {
    const stripePromise = loadStripe(STRIPE_KEY);
    const router = useRouter();
    const { basket, setBasket, strapiUser, setStrapiUser } = useProvider();
    const [loginStep, setLoginStep] = useState('login');
    const [payIsLoading, setPayIsLoading] = useState(false);
    const [loginIsLoading, setLoginIsLoading] = useState(false);
    const [registerIsLoading, setRegisterIsLoading] = useState(false);
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Customers', path: '/customers' },
        { name: 'About us', path: '/about-us' },
    ];
    const { register, handleSubmit, control } = useForm();
    const { register: signupRegister, handleSubmit: signupHandleSubmit } =
        useForm();
    const { register: payRegister, handleSubmit: payHandleSubmit } = useForm();

    const onPayButtonClick = async ({ code }) => {
        if (!strapiUser) return toast.info('You need to login first.');
        setPayIsLoading(true);
        try {
            const stripe = await stripePromise;
            const { stripeSession } = await ordersApi(basket, code);
            await stripe.redirectToCheckout({
                sessionId: stripeSession.id,
            });
            toast.success('Successfully paid.');
        } catch (e) {
            toast.error('Your code is wrong, please enter a valid code.');
        }
        setPayIsLoading(false);
    };
    const onLoginSubmit = async formData => {
        setLoginIsLoading(true);
        try {
            const loginData = await loginApi(formData);
            setStrapiUser(loginData.user);
            setStrapiToken(loginData.jwt);
        } catch (e) {
            toast.error(e?.response?.data?.error?.message);
        }
        setLoginIsLoading(false);
    };
    const onRegisterSubmit = async formData => {
        setRegisterIsLoading(true);
        try {
            const registerData = await registerApi(formData);
            setStrapiUser(registerData.user);
            setStrapiToken(registerData.jwt);
        } catch (e) {
            toast.error(e?.response?.data?.error?.message);
        }
        setRegisterIsLoading(false);
    };

    return (
        <div className="flex items-center justify-between pt-5 lg:pt-9">
            <div className="flex items-center">
                <img src="/logo-black.png" alt="logo" />
                <div className="hidden lg:flex space-x-12 ml-20">
                    {navItems.map(item => (
                        <Link key={item.path} href={item.path}>
                            <a
                                className={cx('font-medium relative', {
                                    'font-bold after:bg-black-900 after:absolute after:left-1/2 after:rounded-md after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-2':
                                        router.pathname === item.path,
                                })}>
                                {item.name}
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex items-center space-x-6">
                {!strapiUser && (
                    <Popover>
                        <PopoverTrigger className="font-bold ">
                            Sign in
                        </PopoverTrigger>
                        <PopoverContent>
                            {loginStep === 'register' ? (
                                <form
                                    onSubmit={signupHandleSubmit(
                                        onRegisterSubmit
                                    )}>
                                    <div className="font-bold mb-4 text-xl">
                                        Sign up
                                    </div>
                                    <div className="w-full flex items-center border-b-2 border-b-gray-800 py-2.5">
                                        <input
                                            type="email"
                                            placeholder="Enter an email"
                                            className="w-full placeholder:text-gray-900 outline-none text-black-900"
                                            {...signupRegister('email', {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                    <div className="w-full flex items-center border-b-2 border-b-gray-800 py-2.5 mt-4">
                                        <input
                                            type="text"
                                            placeholder="Enter a username"
                                            className="w-full placeholder:text-gray-900 outline-none text-black-900"
                                            {...signupRegister('username', {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                    <div className="w-full flex items-center border-b-2 border-b-gray-800 py-2.5 mt-4">
                                        <input
                                            type="password"
                                            placeholder="Enter a password"
                                            className="w-full placeholder:text-gray-900 outline-none text-black-900"
                                            {...signupRegister('password', {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                    <button
                                        className="rounded-full px-8 h-12 font-medium text-lg hover:bg-transparent hover:text-black-900 hover:border hover:border-black-900 transition-colors bg-black-900 text-white flex items-center justify-center border mt-4 mx-auto"
                                        type="submit">
                                        {registerIsLoading ? (
                                            <Spinner
                                                color="white"
                                                width={30}
                                                height={30}
                                                className="m-0"
                                            />
                                        ) : (
                                            'Sign up'
                                        )}
                                    </button>
                                    <div className="mt-4 text-center">
                                        Already have account?{' '}
                                        <span
                                            className="font-bold cursor-pointer"
                                            onClick={() =>
                                                setLoginStep('login')
                                            }>
                                            Login
                                        </span>
                                    </div>
                                </form>
                            ) : (
                                <form onSubmit={handleSubmit(onLoginSubmit)}>
                                    <div className="font-bold mb-4 text-xl">
                                        Sign in
                                    </div>
                                    <div className="w-full flex items-center border-b-2 border-b-gray-800 py-2.5">
                                        <input
                                            type="text"
                                            placeholder="Enter your email or username"
                                            className="w-full placeholder:text-gray-900 outline-none text-black-900"
                                            {...register('identifier', {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                    <div className="w-full flex items-center border-b-2 border-b-gray-800 py-2.5 mt-4">
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            className="w-full placeholder:text-gray-900 outline-none text-black-900"
                                            {...register('password', {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                    <button
                                        className="rounded-full px-8 h-12 font-medium text-lg hover:bg-transparent hover:text-black-900 hover:border hover:border-black-900 transition-colors bg-black-900 text-white flex items-center justify-center border mt-4 mx-auto"
                                        type="submit">
                                        {loginIsLoading ? (
                                            <Spinner
                                                color="white"
                                                width={30}
                                                height={30}
                                                className="m-0"
                                            />
                                        ) : (
                                            'Sign in'
                                        )}
                                    </button>
                                    <div className="mt-4 text-center">
                                        Don't have account?{' '}
                                        <span
                                            className="font-bold cursor-pointer"
                                            onClick={() =>
                                                setLoginStep('register')
                                            }>
                                            Register
                                        </span>
                                    </div>
                                </form>
                            )}
                        </PopoverContent>
                    </Popover>
                )}
                <Popover>
                    <PopoverTrigger>
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <BasketIcon />
                            <span className="rounded-full bg-black-900 w-7 h-7 text-white flex items-center justify-center">
                                {basket.length}
                            </span>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>
                        {!basket.length && (
                            <h3 className="font-bold text-lg text-center">
                                You have not added a product
                            </h3>
                        )}
                        {basket.map(product => (
                            <div className="flex mb-4" key={product.id}>
                                <img
                                    src={product.image}
                                    className="w-16 h-16 object-contain border border-gray-750"
                                    alt={product.name}
                                />
                                <div className="ml-4">
                                    <div>{product.name}</div>
                                    <div>{product.price}$</div>
                                </div>
                            </div>
                        ))}
                        {!!basket.length && (
                            <form onSubmit={payHandleSubmit(onPayButtonClick)}>
                                <div className="w-full flex items-center border-b-2 border-b-gray-800 py-2.5">
                                    <input
                                        type="text"
                                        placeholder="Enter Code"
                                        className="w-full placeholder:text-gray-900 outline-none text-black-900"
                                        defaultValue={router.query.code ?? ''}
                                        {...payRegister('code', {
                                            required: false,
                                        })}
                                    />
                                </div>
                                <button
                                    className="rounded-full px-8 h-12 font-medium text-lg hover:bg-transparent hover:text-black-900 hover:border hover:border-black-900 transition-colors bg-black-900 text-white flex items-center justify-center border mt-4 mx-auto"
                                    type="submit">
                                    {payIsLoading ? (
                                        <Spinner
                                            color="white"
                                            width={30}
                                            height={30}
                                            className="m-0"
                                        />
                                    ) : (
                                        'Pay'
                                    )}
                                </button>
                            </form>
                        )}
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};
export default Header;
