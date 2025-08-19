"use client";

import React, { forwardRef } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Size variant of the input */
  size?: 'small' | 'default' | 'large';
  /** Visual variant of the input */
  variant?: 'default' | 'filled' | 'borderless';
  /** Error state */
  error?: boolean;
  /** Additional class name */
  className?: string;
  /** Icon to display at the start of the input */
  startIcon?: React.ReactNode;
  /** Icon to display at the end of the input */
  endIcon?: React.ReactNode;
}


const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    size = 'default',
    variant = 'default',
    error = false,
    disabled = false,
    className,
    startIcon,
    endIcon,
    ...props
  }, ref) => {
    // Helper function to combine class names
    const combineClasses = (...classes: (string | undefined | false)[]) => {
      return classes.filter(Boolean).join(' ');
    };

    // Figma border radius
    const borderRadius = size === 'small' ? 'rounded-lg' : 'rounded-2xl';

    // Figma font size/line height
    const font = size === 'large'
      ? 'text-base leading-[1.5em]'
      : 'text-sm leading-[1.5714em]';

    // Figma height and padding
    const height = size === 'large' ? 'h-12' : size === 'small' ? 'h-9' : 'h-10';
    const px = size === 'large' ? 'px-3' : size === 'small' ? 'px-2' : 'px-3';

    // Figma background and border
    const baseBg = variant === 'filled'
      ? 'bg-[rgba(0,0,0,0.04)]'
      : variant === 'borderless'
        ? 'bg-transparent'
        : 'bg-[#F7F9FA]';
    const baseBorder = variant === 'borderless'
      ? 'border border-transparent'
      : 'border border-[#D2D7D9]';

    // Figma error/disabled state
    const errorBorder = error ? 'border border-[#F5222D]' : '';
    const disabledBg = disabled ? 'bg-[rgba(0,0,0,0.04)]' : '';
    const disabledText = disabled ? 'text-[rgba(0,0,0,0.25)]' : '';
    const textColor = !disabled ? 'text-[rgba(0,0,0,0.45)]' : '';

    // Figma focus state
    const focusRing = 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';

    // Icon padding
    const iconPadding = {
      left: startIcon ? (size === 'small' ? 'pl-8' : size === 'large' ? 'pl-12' : 'pl-10') : '',
      right: endIcon ? (size === 'small' ? 'pr-8' : size === 'large' ? 'pr-12' : 'pr-10') : '',
    };

    return (
      <div className="relative inline-block w-full">
        {/* Start Icon */}
        {startIcon && (
          <div
            className={combineClasses(
              'absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center text-[rgba(0,0,0,0.45)]',
              size === 'small' ? 'w-8 h-8' : size === 'large' ? 'w-12 h-12' : 'w-10 h-10',
              disabled && 'text-[rgba(0,0,0,0.25)]'
            )}
          >
            {startIcon}
          </div>
        )}
        <input
          ref={ref}
          disabled={disabled}
          className={combineClasses(
            'w-full',
            height,
            px,
            borderRadius,
            font,
            baseBg,
            baseBorder,
            focusRing,
            errorBorder,
            disabledBg,
            textColor,
            disabledText,
            iconPadding.left,
            iconPadding.right,
            disabled && 'cursor-not-allowed',
            className
          )}
          {...props}
        />
        {/* End Icon */}
        {endIcon && (
          <div
            className={combineClasses(
              'absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center text-[rgba(0,0,0,0.45)]',
              size === 'small' ? 'w-8 h-8' : size === 'large' ? 'w-12 h-12' : 'w-10 h-10',
              disabled && 'text-[rgba(0,0,0,0.25)]'
            )}
          >
            {endIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
