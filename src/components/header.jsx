import Link from 'next/link';
import { cx } from 'class-variance-authority';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import BasketIcon from '@/components/icons/basketIcon';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { useProvider } from '@/context/Store';
import { buyProductApi } from '@/services/buyProduct';
import { toast } from 'react-toastify';

const Header = () => {
    const router = useRouter();
    const { basket, setBasket } = useProvider();
    const [code, setCode] = useState(null);
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Customers', path: '/customers' },
        { name: 'About us', path: '/about-us' },
    ];

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

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
                                    alt=""
                                />
                                <div className="ml-4">
                                    <div>{product.name}</div>
                                    <div>{product.price}$</div>
                                </div>
                            </div>
                        ))}
                        {!!basket.length && (
                            <>
                                <div className="w-full flex items-center border-b-2 border-b-gray-800 py-2.5">
                                    <input
                                        type="text"
                                        placeholder="Enter Code"
                                        className="w-full placeholder:text-gray-900 outline-none text-black-900"
                                        onChange={e => setCode(e.target.value)}
                                        value={code}
                                    />
                                </div>
                                <button
                                    className="rounded-full px-8 h-12 font-medium text-xl hover:bg-transparent hover:text-black-900 hover:border hover:border-black-900 transition-colors bg-black-900 text-white flex items-center justify-center border mt-4 mx-auto"
                                    onClick={async () => {
                                        if (!code)
                                            return toast.error(
                                                'Code is require.'
                                            );

                                        try {
                                            await Promise.all(
                                                basket.map(async product => {
                                                    const response =
                                                        await buyProductApi(
                                                            code,
                                                            {
                                                                name: product.name,
                                                                image: product.image,
                                                                date: getCurrentDate(),
                                                                tendered: 50,
                                                                earning: 20,
                                                                status: 1,
                                                            }
                                                        );
                                                    if (response.error) {
                                                        throw new Error(
                                                            'There was an error processing the request'
                                                        );
                                                    }
                                                    return response;
                                                })
                                            );

                                            toast.success('Successfully paid.');
                                            setBasket([]);
                                        } catch (e) {
                                            toast.error(
                                                'Your code is wrong, please enter a valid code.'
                                            );
                                        }
                                    }}>
                                    Pay
                                </button>
                            </>
                        )}
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};
export default Header;
