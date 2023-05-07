import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
    'inline-flex items-center justify-center rounded-full px-4 h-[30px] text-xs font-semibold',
    {
        variants: {
            variant: {
                default: 'bg-white text-black-900',
                secondary: 'bg-gray-100 text-white',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

function Badge({ className, variant, ...props }) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
