import React from 'react';
import { cx } from 'class-variance-authority';
import { useCopyToClipboard } from 'react-use';
import CopyIcon from '@/components/icons/copyIcon';

function CopyCode({ title, code, isSlim, className }) {
    const [state, copyToClipboard] = useCopyToClipboard();

    return (
        <div
            className={cx(
                'bg-black-900 rounded-lg flex flex-col items-center justify-center space-y-1.5 px-4',
                isSlim ? 'py-3 lg:py-7' : 'py-5 lg:py-10',
                className
            )}
            style={{
                boxShadow: '-59px 0px 67px -45px rgba(0, 0, 0, 0.13)',
            }}>
            <span className="text-gray-600 font-semibold text-sm">{title}</span>
            <span className="font-medium text-lg flex items-center cursor-pointer">
                {state.value ? 'Copied' : code}
                <CopyIcon
                    className="ml-3"
                    onClick={() => copyToClipboard(code)}
                />
            </span>
        </div>
    );
}

export default CopyCode;
