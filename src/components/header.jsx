import Link from 'next/link';
import { cx } from 'class-variance-authority';
import React from 'react';
import { useRouter } from 'next/router';
import BasketIcon from '@/components/icons/basketIcon';

const Header = () => {
    const router = useRouter();
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Customers', path: '/customers' },
        { name: 'About us', path: '/about-us' },
    ];

    return (
        <div className="flex items-center justify-between pt-9">
            <div className="flex items-center">
                <img src="/logo-black.png" alt="logo" />
                <div className="flex space-x-12 ml-20">
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
            <div className="flex items-center">
                <a
                    href="#products"
                    className="rounded-full px-12 h-14 font-medium text-xl hover:bg-transparent hover:text-black-900 hover:border hover:border-black-900 transition-colors bg-black-900 text-white flex items-center justify-center border mr-4">
                    Sign in
                </a>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <BasketIcon />
                    <span className="rounded-full bg-black-900 w-7 h-7 text-white flex items-center justify-center">
                        0
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Header;
