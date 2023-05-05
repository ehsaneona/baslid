import React from 'react';
import Link from 'next/link';
import { cx } from 'class-variance-authority';
import HomeIcon from '@/components/icons/homeIcon';
import WalletIcon from '@/components/icons/walletIcon';
import ProductIcon from '@/components/icons/productIcon';
import SettingIcon from '@/components/icons/settingIcon';
import SearchIcon from '@/components/icons/searchIcon';

function DashboardLayout({ headerTitle, children }) {
    const isActive = true;

    return (
        <div className="h-full">
            <div className="w-1/5 bg-black-800 h-full p-4 flex flex-col justify-between">
                <div className="space-y-2">
                    <div className="h-14 flex items-center justify-center">
                        <img src="../logo-white.png" alt="logo" />
                    </div>
                    <div className="flex items-center h-14 border-b px-5">
                        <SearchIcon className="min-w-fit" />
                        <input
                            type="text"
                            className="bg-transparent ml-4 outline-0 text-white text-sm font-medium tracking-wide"
                            placeholder="Search"
                        />
                    </div>
                    <nav className="pt-2 space-y-2">
                        <Link href="/">
                            <span
                                className={cx(
                                    'rounded-lg text-gray-700 h-12 flex items-center p-4 text-base cursor-pointer',
                                    { 'bg-gray-100 shadow-menu': !isActive }
                                )}>
                                <HomeIcon
                                    className="mr-2"
                                    isActive={isActive}
                                />
                                Dashboard
                            </span>
                        </Link>
                        <Link href="/">
                            <span
                                className={cx(
                                    'rounded-lg text-gray-700 h-12 flex items-center p-4 text-base cursor-pointer',
                                    { 'bg-gray-100 shadow-menu': isActive }
                                )}>
                                <WalletIcon
                                    className="mr-2"
                                    isActive={isActive}
                                />
                                My Wallet
                            </span>
                        </Link>
                        <Link href="/">
                            <span
                                className={cx(
                                    'rounded-lg text-gray-700 h-12 flex items-center p-4 text-base cursor-pointer',
                                    { 'bg-gray-100 shadow-menu': !isActive }
                                )}>
                                <ProductIcon
                                    className="mr-2"
                                    isActive={isActive}
                                />
                                My Products
                            </span>
                        </Link>
                        <Link href="/">
                            <span
                                className={cx(
                                    'rounded-lg text-gray-700 h-12 flex items-center p-4 text-base cursor-pointer',
                                    { 'bg-gray-100 shadow-menu': isActive }
                                )}>
                                <SettingIcon
                                    className="mr-2"
                                    isActive={isActive}
                                />
                                Profile and Settings
                            </span>
                        </Link>
                    </nav>
                </div>
                <div className="space-y-3 p-3">
                    <div className="uppercase text-gray-200 font-medium text-base">
                        Profile
                    </div>
                    <div className="flex items-center text-white space-x-3">
                        <img
                            className="rounded-full"
                            src="../profile.png"
                            alt="profile"
                        />
                        <div className="flex flex-col">
                            <span className="font-bold text-base">
                                Ehsan Akbarzadeh
                            </span>
                            <span className="font-normal text-gray-600">
                                Leader
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full"></div>
        </div>
    );
}

export default DashboardLayout;
