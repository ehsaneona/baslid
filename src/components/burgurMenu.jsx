import React, { useState } from 'react';
import { MenuIcon, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import router from 'next/router';
import { cx } from 'class-variance-authority';
import { getUserName } from '@/utils/getUserName';
import { getAccountType } from '@/utils/getAccountType';
import SearchIcon from '@/components/icons/searchIcon';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function BurgurMenu({ navbarItems, user, onLogoutClick }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="bg-black-600 flex items-center justify-between h-14 lg:hidden px-6">
                <div className="flex items-center">
                    <img src="../logo-white.png" alt="logo" />
                </div>
                <div className="flex">
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md text-gray-400">
                        <MenuIcon className="block h-6 w-6" />
                    </button>
                </div>
            </div>
            <div
                className={cx(
                    isOpen ? 'translate-x-0' : '-translate-x-full',
                    'lg:translate-x-0 lg:-static w-3/4 lg:w-72 bg-black-800 h-full p-4 flex flex-col justify-between fixed left-0 z-30 transition-transform duration-300 ease-in-out'
                )}>
                <div className="space-y-2">
                    <div className="h-14 flex items-center justify-center">
                        <img src="../logo-white.png" alt="logo" />
                    </div>
                    <div className="items-center h-14 border-b border-b-gray-50 px-5 hidden">
                        <SearchIcon className="min-w-fit" />
                        <input
                            type="text"
                            className="bg-transparent ml-4 outline-0 text-white text-sm font-medium tracking-wide"
                            placeholder="Search"
                        />
                    </div>
                    <nav className="pt-2 space-y-2">
                        {navbarItems.map(item => (
                            <Link href={item.path} key={item.path}>
                                <span
                                    className={cx(
                                        'rounded-lg text-gray-700 h-12 flex items-center p-4 text-base cursor-pointer',
                                        {
                                            'bg-gray-100 shadow-menu':
                                                router.asPath === item.path,
                                        }
                                    )}
                                    onClick={() => setIsOpen(false)}>
                                    {React.cloneElement(item.icon, {
                                        isActive: router.asPath === item.path,
                                    })}
                                    {item.title}
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="space-y-3 p-3">
                    <div className="uppercase text-gray-200 font-medium text-base">
                        Profile
                    </div>
                    <div className="flex items-center justify-between text-white space-x-3">
                        <div className="flex items-center space-x-3">
                            <img
                                className="rounded-full w-[45.5px] h-[45.5px] object-cover"
                                src={user.avatar ?? '/profile.jpg'}
                                alt="profile"
                            />
                            <div className="flex flex-col">
                                <span className="font-bold text-base">
                                    {getUserName(user)}
                                </span>
                                <span className="font-normal text-gray-600">
                                    {getAccountType(user.type)}
                                </span>
                            </div>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <MoreHorizontal className="cursor-pointer" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem
                                    className="text-red-900"
                                    onClick={onLogoutClick}>
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <div
                className={cx(
                    'bg-black-500 fixed top-0 left-0 right-0 bottom-0 z-20',
                    isOpen ? 'block' : 'hidden'
                )}
                onClick={() => setIsOpen(false)}
            />
        </>
    );
}

export default BurgurMenu;
