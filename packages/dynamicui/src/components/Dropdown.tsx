"use client";

import React, { useRef, useState } from "react";
import { cn } from "../utils/cn";

export interface DropdownItem {
  label: React.ReactNode;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
  closeOnClick?: boolean;
}

export interface DropdownProps {
  trigger?: React.ReactNode;
  items: DropdownItem[];
  className?: string;
  menuClassName?: string;
  disabled?: boolean;
}

// Figma-aligned Dropdown component with dark mode and CSS tokens
const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  className,
  menuClassName,
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Programmatically close dropdown (can be called by parent components)
  const closeDropdown = React.useCallback(() => {
    setOpen(false);
  }, []);

  // Handle item click with proper async support and error handling
  const handleItemClick = async (item: DropdownItem, e: React.MouseEvent) => {
    if (item.disabled) return;

    // Prevent event bubbling to avoid unintended side effects
    e.stopPropagation();

    try {
      // Execute the click handler and wait for it to complete (supports both sync and async)
      await item.onClick?.();
    } catch (error) {
      console.error("Dropdown item click handler error:", error);
    } finally {
      // Close dropdown only if closeOnClick is not explicitly false
      // This gives fine-grained control over dropdown behavior
      if (item.closeOnClick !== false) {
        closeDropdown();
      }
    }
  };

  React.useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      const isClickOnButton = buttonRef.current?.contains(target);
      const isClickOnMenu = menuRef.current?.contains(target);

      // Only close if click is outside both button and menu
      if (!isClickOnButton && !isClickOnMenu) {
        setOpen(false);
      }
    }

    // Use a small delay to prevent immediate closure when opening
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className={cn("relative inline-block", className)}>
      <button
        ref={buttonRef}
        type="button"
        className={cn(
          "flex items-center gap-2 px-4 h-10 rounded-[24px] border transition-shadow focus:outline-none focus:ring-2",
          "bg-[var(--dropdown-bg-dark,theme(colors.neutral.900))] border-[var(--dropdown-border-dark,#3A3D3F)] text-[var(--dropdown-trigger-dark,theme(colors.white))] focus:ring-[var(--dropdown-focus-dark,#4096FF)]",
          disabled && "opacity-60 cursor-not-allowed",
        )}
        onClick={() => !disabled && setOpen((v) => !v)}
        disabled={disabled}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {trigger || <span>Dropdown</span>}
        <svg
          className={cn(
            "w-3.5 h-3.5 ml-1 transition-transform",
            open && "rotate-180",
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 14 14"
        >
          <path d="M3 5l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div
          ref={menuRef}
          className={cn(
            "absolute mt-2 min-w-[160px] shadow-[0px_9px_28px_8px_rgba(0,0,0,0.05),0px_3px_6px_-4px_rgba(0,0,0,0.12),0px_6px_16px_0px_rgba(0,0,0,0.08)] rounded-[16px] py-1 z-50",
            "bg-[var(--dropdown-menu-bg-dark,theme(colors.neutral.800))]",
            menuClassName || "left-0",
          )}
          role="menu"
        >
          {items.map((item, i) => (
            <button
              key={i}
              type="button"
              className={cn(
                "w-full flex items-center px-3 py-1.5 rounded-[16px] transition-colors",
                "text-[var(--dropdown-item-dark,theme(colors.white))]",
                item.disabled
                  ? "text-[var(--dropdown-item-disabled-dark,rgba(255,255,255,0.45))] cursor-not-allowed"
                  : "hover:bg-[var(--dropdown-item-hover-dark,rgba(255,255,255,0.08))] cursor-pointer",
              )}
              onClick={(e) => handleItemClick(item, e)}
              disabled={item.disabled}
              role="menuitem"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
