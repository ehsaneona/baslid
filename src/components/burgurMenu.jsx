import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import router from 'next/router';
import { cx } from 'class-variance-authority';
import { getUserName } from '@/utils/getUserName';
import { getAccountType } from '@/utils/getAccountType';

function BurgurMenu({ navbarItems, user, onLogoutClick }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="bg-black-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <div className="flex items-center">
                    <img src="../logo-white.png" alt="logo" className="h-8" />
                </div>
                <div className="hidden md:block">
                    <nav className="ml-auto flex space-x-4">
                        {navbarItems.map(item => (
                            <Link href={item.path} key={item.path}>
                                <a
                                    className={cx(
                                        'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium',
                                        {
                                            'bg-gray-900 text-white':
                                                router.asPath === item.path,
                                        }
                                    )}>
                                    {item.title}
                                </a>
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="-mr-2 flex md:hidden">
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? (
                            <XIcon
                                className="block h-6 w-6"
                                aria-hidden="true"
                            />
                        ) : (
                            <MenuIcon
                                className="block h-6 w-6"
                                aria-hidden="true"
                            />
                        )}
                    </button>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navbarItems.map(item => (
                        <Link href={item.path} key={item.path}>
                            <a
                                className={cx(
                                    'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium',
                                    {
                                        'bg-gray-900 text-white':
                                            router.asPath === item.path,
                                    }
                                )}>
                                {item.title}
                            </a>
                        </Link>
                    ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">
                        <img
                            className="rounded-full w-[45.5px] h-[45.5px] object-cover"
                            src={user.avatar ?? '/profile.jpg'}
                            alt="profile"
                        />
                        <div className="ml-3">
                            <div className="text-base font-medium leading-none text-white">
                                {getUserName(user)}
                            </div>
                            <div className="text-sm font-medium leading-none text-gray-400">
                                {getAccountType(user.type)}
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={onLogoutClick}
                            className="ml-auto inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-red-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BurgurMenu;
