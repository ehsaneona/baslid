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
        <div className="h-full flex text-white">
            <div className="w-1/5 bg-black-800 h-full p-4 flex flex-col justify-between fixed left-0">
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
                                    { 'bg-gray-100 shadow-menu': isActive }
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
                                    { 'bg-gray-100 shadow-menu': isActive }
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
            <div className="w-4/5 pl-0.5 ml-auto">
                {headerTitle && (
                    <div className="px-10 py-4 h-20 bg-black-800 flex items-center justify-between w-full">
                        <span className="font-semibold text-xl leading-none">
                            {headerTitle}
                        </span>
                        <div className="flex items-center">
                            <div className="flex items-center bg-black-900 h-full p-2 pl-3 rounded-xl space-x-2 text-[12.5px]">
                                <svg
                                    className="w-fit"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.3">
                                        <path
                                            d="M8.40433 15.125C12.0333 15.125 14.9752 12.1831 14.9752 8.55417C14.9752 4.9252 12.0333 1.98334 8.40433 1.98334C4.77536 1.98334 1.8335 4.9252 1.8335 8.55417C1.8335 12.1831 4.77536 15.125 8.40433 15.125Z"
                                            stroke="white"
                                            strokeWidth="1.36172"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15.6665 15.8167L14.2832 14.4333"
                                            stroke="white"
                                            strokeWidth="1.36172"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                </svg>
                                <input
                                    className="outline-0 bg-transparent placeholder:text-gray-300"
                                    type="text"
                                    placeholder="Search a transaction"
                                />
                                <button className="bg-white text-black-800 font-medium p-2 rounded-lg flex items-center">
                                    <svg
                                        className="mr-2"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.4227 5.56036H5.58105V10.402H10.4227V5.56036Z"
                                            stroke="#292D32"
                                            strokeWidth="1.29688"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M3.76533 14.0332C4.76393 14.0332 5.58096 13.2162 5.58096 12.2176V10.402H3.76533C2.76674 10.402 1.94971 11.219 1.94971 12.2176C1.94971 13.2162 2.76674 14.0332 3.76533 14.0332Z"
                                            stroke="#292D32"
                                            strokeWidth="1.29688"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M3.76533 5.56039H5.58096V3.74476C5.58096 2.74617 4.76393 1.92914 3.76533 1.92914C2.76674 1.92914 1.94971 2.74617 1.94971 3.74476C1.94971 4.74336 2.76674 5.56039 3.76533 5.56039Z"
                                            stroke="#292D32"
                                            strokeWidth="1.29688"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10.4224 5.56039H12.238C13.2366 5.56039 14.0536 4.74336 14.0536 3.74476C14.0536 2.74617 13.2366 1.92914 12.238 1.92914C11.2394 1.92914 10.4224 2.74617 10.4224 3.74476V5.56039Z"
                                            stroke="#292D32"
                                            strokeWidth="1.29688"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12.238 14.0332C13.2366 14.0332 14.0536 13.2162 14.0536 12.2176C14.0536 11.219 13.2366 10.402 12.238 10.402H10.4224V12.2176C10.4224 13.2162 11.2394 14.0332 12.238 14.0332Z"
                                            stroke="#292D32"
                                            strokeWidth="1.29688"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Enter
                                </button>
                            </div>
                            <div className="ml-6">
                                <svg
                                    width="26"
                                    height="23"
                                    viewBox="0 0 26 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="cursor-pointer">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M20.2493 15.8428H19.2118C18.6391 15.8428 18.1743 15.4253 18.1743 14.9109V10.2513C18.1743 9.73684 18.6391 9.31934 19.2118 9.31934H20.2493C21.3958 9.31934 22.3243 10.1534 22.3243 11.1832V13.979C22.3243 15.0088 21.3958 15.8428 20.2493 15.8428Z"
                                        stroke="white"
                                        strokeWidth="1.55625"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.76191 15.8428H5.72441C4.57798 15.8428 3.64941 15.0088 3.64941 13.979V11.1832C3.64941 10.1534 4.57798 9.31934 5.72441 9.31934H6.76191C7.33461 9.31934 7.79941 9.73684 7.79941 10.2513V14.9109C7.79941 15.4253 7.33461 15.8428 6.76191 15.8428Z"
                                        stroke="white"
                                        strokeWidth="1.55625"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M19.7307 9.31935V8.85338C19.7307 5.50775 16.7115 2.79584 12.9869 2.79584V2.79584C9.26229 2.79584 6.24316 5.50775 6.24316 8.85338V9.31935"
                                        stroke="white"
                                        strokeWidth="1.55625"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13.6353 19.8035H12.3384C11.6225 19.8035 11.0415 19.2816 11.0415 18.6386V18.6386C11.0415 17.9956 11.6225 17.4737 12.3384 17.4737H13.6353C14.3511 17.4737 14.9321 17.9956 14.9321 18.6386V18.6386C14.9321 19.2816 14.3511 19.8035 13.6353 19.8035Z"
                                        stroke="white"
                                        strokeWidth="1.55625"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M14.9321 18.6386H17.1368C18.2833 18.6386 19.2118 17.8045 19.2118 16.7748V15.8428"
                                        stroke="white"
                                        strokeWidth="1.55625"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;
