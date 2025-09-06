"use client";

import React, { forwardRef } from "react";
import { cn } from "../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "default" | "dashed" | "text" | "link" | "danger";
  size?: "small" | "default" | "large";
  shape?: "default" | "circle";
  ghost?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  block?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "default",
      size = "default",
      shape = "default",
      ghost = false,
      loading = false,
      disabled = false,
      icon,
      iconPosition = "start",
      block = false,
      className,
      ...props
    },
    ref,
  ) => {
    // Base styles
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 select-none";

    // Size styles
    const sizeStyles = {
      small: "h-8 px-4 text-xs gap-1", // 32px height, 12px font
      default: "h-10 px-6 text-base gap-2", // 40px height, 16px font
      large: "h-12 px-8 text-lg gap-2", // 48px height, 18px font
    };

    // Shape styles
    const shapeStyles = {
      default: "rounded-full",
      circle:
        size === "small"
          ? "rounded-full w-8 h-8 p-0"
          : size === "large"
            ? "rounded-full w-12 h-12 p-0"
            : "rounded-full w-10 h-10 p-0",
    };

    // Block style
    const blockStyle = block ? "w-full flex" : "";

    // Variant styles (using tokens)
    const getVariantStyles = () => {
      // Disabled
      if (disabled) {
        if (ghost) {
          return "bg-transparent border border-[color:var(--Neutral-gray-5)] text-[color:var(--Neutral-gray-5)] cursor-not-allowed";
        }
        return "bg-[color:var(--Neutral-gray-3)] text-[color:var(--Neutral-gray-5)] border-0 cursor-not-allowed";
      }

      switch (variant) {
        case "primary":
          return ghost
            ? "bg-transparent border border-[color:var(--Blue-blue-6)] text-[color:var(--Blue-blue-6)] hover:bg-[color:var(--Blue-blue-1)]"
            : "bg-[color:var(--Blue-blue-6)] text-white border-0 hover:bg-[color:var(--Blue-blue-7)]";
        case "default":
          return ghost
            ? "bg-transparent border border-[color:var(--Neutral-gray-5)] text-[color:var(--Neutral-gray-8)] hover:bg-[color:var(--Neutral-gray-2)]"
            : "bg-white text-black border-0 hover:bg-[color:var(--Neutral-gray-2)]";
        case "dashed":
          return ghost
            ? "bg-transparent border border-dashed border-[color:var(--Neutral-gray-5)] text-[color:var(--Neutral-gray-8)] hover:bg-[color:var(--Neutral-gray-2)]"
            : "bg-white border border-dashed border-[color:var(--Neutral-gray-5)] text-[color:var(--Neutral-gray-8)] hover:bg-[color:var(--Neutral-gray-2)]";
        case "text":
          return "bg-transparent text-white hover:bg-[color:var(--Neutral-gray-8)]";
        case "link":
          return "bg-transparent text-[color:var(--Blue-blue-6)] hover:text-[color:var(--Blue-blue-7)] underline";
        case "danger":
          return ghost
            ? "bg-transparent border border-[color:var(--Dust-Red-red-6)] text-[color:var(--Dust-Red-red-6)] hover:bg-[color:var(--Dust-Red-red-1)]"
            : "bg-[color:var(--Dust-Red-red-6)] text-white border-0 hover:bg-[color:var(--Dust-Red-red-7)]";
        default:
          return ghost
            ? "bg-transparent border border-[color:var(--Neutral-gray-5)] text-[color:var(--Neutral-gray-8)] hover:bg-[color:var(--Neutral-gray-2)]"
            : "bg-white text-black border-0 hover:bg-[color:var(--Neutral-gray-2)]";
      }
    };

    // Loading spinner
    const LoadingSpinner = () => (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
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
    );

    // Render content based on shape and icon position
    const renderContent = () => {
      if (shape === "circle") {
        return loading ? <LoadingSpinner /> : icon || children;
      }
      if (loading) {
        return (
          <>
            <LoadingSpinner />
            {children}
          </>
        );
      }
      if (icon) {
        return iconPosition === "end" ? (
          <>
            {children}
            {icon}
          </>
        ) : (
          <>
            {icon}
            {children}
          </>
        );
      }
      return children;
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      shapeStyles[shape],
      getVariantStyles(),
      blockStyle,
      disabled || loading ? "cursor-not-allowed" : "cursor-pointer",
      "focus:outline-none",
      className,
    );

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || loading}
        {...props}
      >
        {renderContent()}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
