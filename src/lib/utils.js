// eslint-disable-next-line import/no-extraneous-dependencies
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// eslint-disable-next-line import/prefer-default-export
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
