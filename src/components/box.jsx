import React from 'react';
import Link from 'next/link';
import { cx } from 'class-variance-authority';
import ArrowIcon from '@/components/icons/ArrowIcon';

function Box({
    title,
    value,
    linkTitle,
    linkIcon = true,
    pattern = 'left',
    className,
    link,
}) {
    const isLeftPattern = pattern === 'left';

    return (
        <div
            className={cx(
                'bg-black-800 rounded-lg ml-2 w-full flex flex-col overflow-clip relative',
                className
            )}>
            <img
                className={cx(
                    'absolute top-0 z-0',
                    isLeftPattern ? 'left-0' : 'right-0'
                )}
                src={isLeftPattern ? '../pattern.png' : '../pattern2.png'}
                alt="pattern"
            />
            <div className="border-b-[1.5px] border-gray-50 px-4 py-20 flex flex-col justify-center items-center h-full">
                <span className="text-gray-300 text-lg font-semibold">
                    {title}
                </span>
                <span className="text-[28px] font-semibold">{value}</span>
            </div>
            {/* eslint-disable-next-line no-script-url */}
            <Link href={link ?? 'javascript:void(0)'}>
                <span className="w-full flex items-center justify-center text-sm font-medium text-gray-300 py-5 cursor-pointer z-10">
                    {linkTitle}
                    {linkIcon && <ArrowIcon className="ml-2.5" />}
                </span>
            </Link>
        </div>
    );
}

export default Box;
