"use client";

import React from "react";
import { cn } from "../utils/cn";

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean;
  label?: React.ReactNode;
}

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M3 6.5L5.5 9L9 4"
      stroke="#131414"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IndeterminateIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <rect x="2" y="5.25" width="8" height="1.5" rx="0.75" fill="#131414" />
  </svg>
);

const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  (
    {
      indeterminate = false,
      label,
      disabled,
      checked,
      className: _className,
      ...props
    },
    ref,
  ) => {
    return (
      <label
        className={cn(
          "inline-flex items-center gap-2 cursor-pointer  text-[14px]",
          disabled && "opacity-50 cursor-not-allowed",
        )}
      >
        <span
          className={cn(
            "inline-flex items-center justify-center w-4 h-4 rounded border border-[#D2D7D9] bg-[#F7F9FA] transition-all duration-200",
            checked &&
              !indeterminate &&
              !disabled &&
              "bg-[#131414] border-[#131414]",
            checked &&
              !indeterminate &&
              disabled &&
              "bg-[rgba(0,0,0,0.04)] border-[#D2D7D9]",
            !checked &&
              indeterminate &&
              !disabled &&
              "bg-[#F7F9FA] border-[#D2D7D9]",
            !checked &&
              indeterminate &&
              disabled &&
              "bg-[rgba(0,0,0,0.04)] border-[#D2D7D9]",
          )}
        >
          <input
            ref={ref}
            type="checkbox"
            className="appearance-none w-4 h-4 absolute opacity-0 cursor-pointer"
            checked={checked}
            disabled={disabled}
            aria-checked={indeterminate ? "mixed" : checked}
            {...props}
          />
          {checked && !indeterminate && <CheckIcon />}
          {!checked && indeterminate && <IndeterminateIcon />}
        </span>
        {label && (
          <span
            className={cn("select-none", disabled && "text-[rgba(0,0,0,0.45)]")}
          >
            {label}
          </span>
        )}
      </label>
    );
  },
);

CheckBox.displayName = "CheckBox";

export default CheckBox;
