'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef(
    ({ className, children, isSlim, isMedium, outline, ...props }, ref) => (
        <SelectPrimitive.Trigger
            ref={ref}
            className={cn(
                'flex items-center justify-between rounded-lg font-medium px-5 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:bg-black-800 focus-visible:ring-1 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-gray-400',
                isSlim ? 'h-12' : isMedium ? 'h-14' : 'h-15',
                outline
                    ? 'bg-transparent border-[1.5px] border-gray-50'
                    : 'bg-black-700',
                className
            )}
            {...props}>
            {children}
            <SelectPrimitive.Icon asChild>
                <ChevronDown
                    className="w-6 h-6 ml-3"
                    color="white"
                    opacity="0.4"
                />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    )
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef(
    ({ className, children, position = 'popper', ...props }, ref) => (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                ref={ref}
                className={cn(
                    'relative z-50 min-w-[8rem] overflow-hidden rounded-lg bg-black-700 text-white shadow-md animate-in fade-in-80',
                    position === 'popper' && 'translate-y-1',
                    className
                )}
                position={position}
                {...props}>
                <SelectPrimitive.Viewport
                    className={cn(
                        'p-1',
                        position === 'popper' &&
                            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
                    )}>
                    {children}
                </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    )
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
    <SelectPrimitive.Label
        ref={ref}
        className={cn('py-1.5 pl-8 pr-2 text-base font-semibold', className)}
        {...props}
    />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <SelectPrimitive.Item
            ref={ref}
            className={cn(
                'relative flex w-full cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-base outline-none focus:bg-gray-100 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                className
            )}
            {...props}>
            <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                <SelectPrimitive.ItemIndicator>
                    <Check className="h-4 w-4" />
                </SelectPrimitive.ItemIndicator>
            </span>

            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    )
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
    <SelectPrimitive.Separator
        ref={ref}
        className={cn('-mx-1 my-1 h-px bg-muted', className)}
        {...props}
    />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
};
