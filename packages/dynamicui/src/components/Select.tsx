"use client";

import React, { forwardRef } from "react";
import { cn } from "../utils/cn";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  options?: SelectOption[];
  placeholder?: string;
  size?: "small" | "default" | "large";
  error?: boolean;
  className?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options = [],
      placeholder,
      size = "default",
      error = false,
      disabled = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    // Base styles
    const baseStyles =
      "w-full border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white";

    // Size variants
    const sizeStyles = {
      small: "h-9 text-sm rounded-lg px-2",
      default: "h-10 text-sm rounded-2xl px-3",
      large: "h-12 text-base rounded-2xl px-3",
    };

    // State styles
    const stateStyles = error
      ? "border-red-500 focus:ring-red-500"
      : disabled
        ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
        : "border-gray-300 hover:border-gray-400";

    return (
      <select
        ref={ref}
        disabled={disabled}
        className={cn(
          baseStyles,
          sizeStyles[size],
          stateStyles,
          "capitalize",
          className,
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
        {children}
      </select>
    );
  },
);

Select.displayName = "Select";

export default Select;
