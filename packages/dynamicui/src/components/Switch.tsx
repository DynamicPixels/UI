"use client";

import React, { useCallback } from "react";
import { cn } from "../utils/cn";

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "default" | "small";
  loading?: boolean;
  icon?: React.ReactNode;
  label?: string;
}

const SIZES = {
  default: {
    width: 40,
    height: 22,
    handle: 18,
    padding: 2,
    font: "text-xs",
  },
  small: {
    width: 28,
    height: 16,
    handle: 12,
    padding: 1,
    font: "text-xs",
  },
};

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      defaultChecked,
      onChange,
      disabled = false,
      size = "default",
      loading = false,
      icon,
      label,
      className,
      ...props
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(
      defaultChecked ?? false,
    );
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled || loading) return;
        if (!isControlled) setInternalChecked((prev) => !prev);
        onChange?.(!isChecked);
      },
      [disabled, loading, isControlled, isChecked, onChange],
    );

    const sz = SIZES[size];
    const trackBg = disabled
      ? isChecked
        ? "bg-[#131414]/65"
        : "bg-[rgba(0,0,0,0.45)]/65"
      : isChecked
        ? "bg-[#131414]"
        : "bg-[rgba(0,0,0,0.45)]";
    const trackClasses = cn(
      "relative flex items-center transition-colors duration-200 border-none outline-none",
      trackBg,
      "rounded-full",
      disabled ? "opacity-65 cursor-not-allowed" : "cursor-pointer",
      className,
    );
    const handleClasses = cn(
      "absolute top-1/2 -translate-y-1/2 transition-all duration-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03),0px_1px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.02)] bg-[#F7F9FA]",
      "rounded-full",
      loading ? "animate-spin" : "",
      disabled ? "opacity-65" : "",
    );
    const handleStyle = {
      left: isChecked ? sz.width - sz.handle - sz.padding : sz.padding,
      width: sz.handle,
      height: sz.handle,
    };

    return (
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-disabled={disabled}
        ref={ref}
        tabIndex={disabled ? -1 : 0}
        className={trackClasses}
        style={{ width: sz.width, height: sz.height, padding: sz.padding }}
        disabled={disabled}
        onClick={handleClick}
        {...props}
      >
        {/* Track labels (ON/OFF) */}
        <span
          className={cn(
            "absolute left-2 top-1/2 -translate-y-1/2 select-none transition-opacity duration-200",
            sz.font,
            isChecked ? "opacity-100" : "opacity-0",
          )}
          style={{ color: "#F7F9FA" }}
        >
          ON
        </span>
        <span
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2 select-none transition-opacity duration-200",
            sz.font,
            !isChecked ? "opacity-100" : "opacity-0",
          )}
          style={{ color: "#F7F9FA" }}
        >
          OFF
        </span>
        {/* Handle */}
        <span className={handleClasses} style={handleStyle}>
          {loading && (
            <svg
              className="w-3 h-3 mx-auto animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
        </span>
        {/* Optional label */}
        {label && (
          <span className="ml-2 select-none text-[13px] text-[#131414] align-middle">
            {label}
          </span>
        )}
      </button>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
