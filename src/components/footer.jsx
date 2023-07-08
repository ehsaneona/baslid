import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { TwitterIcon } from 'lucide-react';

const Footer = () => {
    const router = useRouter();
    const navItems = [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Help', path: '/help' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact Us', path: '/contact-us' },
    ];

    return (
        <div className="border-t-2 border-t-gray-800 mt-44">
            <div className="max-w-4xl mx-auto text-center p-14">
                <div className="text-4xl font-medium">Join Our List</div>
                <div className="mt-10">
                    Signup to be the first to hear about exclusive deals,
                    special offers and upcoming collections
                </div>
                <div className="w-full flex items-center border-b-2 border-b-gray-800 py-4 mt-6">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full placeholder:text-gray-900 outline-none text-black-900"
                    />
                    <button className="font-medium">Subscribe</button>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-14 pb-14">
                <div className="flex items-center justify-between border-t-2 border-t-gray-800 pt-8">
                    <div className="text-sm">
                        <span className="font-bold">Baslid</span>© All rights
                        reserved 2023
                    </div>
                    <div className="flex space-x-12 ml-20">
                        {navItems.map(item => (
                            <Link key={item.path} href={item.path}>
                                <a className="font-medium relative">
                                    {item.name}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div>
                        <a href="#" target="_blank">
                            <TwitterIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
