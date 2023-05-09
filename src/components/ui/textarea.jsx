import * as React from 'react';

import { cn } from '@/lib/utils';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <textarea
            className={cn(
                'flex h-40 resize-none font-medium rounded-lg bg-black-700 px-5 py-4 text-base ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:bg-black-800 focus-visible:ring-1 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50 w-full',
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Textarea.displayName = 'Textarea';

export { Textarea };
