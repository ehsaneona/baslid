import { cn } from '@/lib/utils';

function Spinner({ className, color, width = 25, height = 25, ...props }) {
    return (
        <div className={cn('flex items-center justify-center')} {...props}>
            <svg
                className={cn('animate-spin mr-3', className)}
                width={width}
                height={height}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5C8.13 5 5 8.13 5 12"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}

export { Spinner };
