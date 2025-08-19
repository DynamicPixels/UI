"use client";

import React, { useRef, useState } from "react";
import { cn } from "../utils/cn";

export interface CascaderOption {
  value: string;
  label: string;
  children?: CascaderOption[];
  disabled?: boolean;
}

export interface CascaderProps {
  options: CascaderOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: "small" | "default" | "large";
  variant?: "default" | "filled" | "borderless";
  multiple?: boolean;
  className?: string;
}

const sizeStyles = {
  small: "h-9 text-[14px] px-2 rounded-[8px]",
  default: "h-10 text-[14px] px-3 rounded-[16px]",
  large: "h-12 text-[16px] px-3 rounded-[16px]",
};

const variantStyles = {
  default: "bg-[#F7F9FA] border border-[#D2D7D9]",
  filled: "bg-[rgba(0,0,0,0.04)] border border-transparent",
  borderless: "bg-transparent border border-transparent",
};

const DownIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className="ml-2 text-[rgba(0,0,0,0.45)]"
  >
    <path
      d="M2 4.5L6 8.5L10 4.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    className="text-[rgba(0,0,0,0.45)]"
  >
    <path
      d="M2 2L8 8M8 2L2 8"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const Cascader: React.FC<CascaderProps> = ({
  options,
  value = [],
  onChange,
  placeholder = "Select",
  disabled = false,
  size = "default",
  variant = "default",
  multiple = false,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const [activePath, setActivePath] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Get display label(s)
  const getLabels = (specificValue?: string[]) => {
    const valueToUse = specificValue || value;
    if (!valueToUse.length) return placeholder;
    const find = (opts: CascaderOption[], path: string[]): string[] => {
      if (!path.length) return [];
      const v = path[0];
      const opt = opts.find((o) => o.value === v);
      if (!opt) return [];
      if (path.length === 1) return [opt.label];
      return [opt.label, ...find(opt.children || [], path.slice(1))];
    };
    if (multiple) {
      return valueToUse.map((v) => find(options, v.split("/"))).join(", ");
    }
    return find(options, valueToUse).join(" / ");
  };

  // Panel rendering
  const renderPanel = (opts: CascaderOption[], path: string[] = []) => (
    <div className="min-w-[160px] max-h-60 overflow-auto bg-white rounded-[8px] shadow-lg border border-[#D2D7D9]">
      {opts.map((opt) => {
        const hasChildren = !!opt.children?.length;
        // const isActive = activePath[path.length] === opt.value;
        const isSelected = multiple
          ? value.some((v) => v.split("/").includes(opt.value))
          : value[path.length] === opt.value;
        return (
          <div
            key={opt.value}
            className={cn(
              "flex items-center justify-between px-3 py-2 cursor-pointer  text-[14px]",
              isSelected
                ? "bg-[rgba(0,0,0,0.04)] text-[rgba(0,0,0,0.88)]"
                : "text-[rgba(0,0,0,0.88)] hover:bg-[rgba(0,0,0,0.04)]",
              opt.disabled && "opacity-50 cursor-not-allowed",
            )}
            onClick={() => {
              if (opt.disabled) return;
              const newPath = [...path, opt.value];
              setActivePath(newPath);
              if (hasChildren) return;
              if (multiple) {
                const joined = newPath.join("/");
                if (value.includes(joined)) {
                  onChange?.(value.filter((v) => v !== joined));
                } else {
                  onChange?.([...value, joined]);
                }
              } else {
                onChange?.(newPath);
                setOpen(false);
              }
            }}
          >
            <span>{opt.label}</span>
            {hasChildren && (
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className="ml-2 text-[rgba(0,0,0,0.45)]"
              >
                <path
                  d="M4 2L8 5L4 8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );

  // Remove tag (multiple)
  const removeTag = (tag: string) => {
    onChange?.(value.filter((v) => v !== tag));
  };

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <div
        tabIndex={0}
        className={cn(
          "flex items-center w-full  transition-all duration-200",
          sizeStyles[size],
          variantStyles[variant],
          disabled && "opacity-50 cursor-not-allowed",
          open && "ring-2 ring-[color:var(--Blue-blue-2)]",
        )}
        onClick={() => !disabled && setOpen((v) => !v)}
      >
        {multiple && value.length > 0 ? (
          <div className="flex flex-wrap gap-1 mr-2">
            {value.map((v) => (
              <span
                key={v}
                className="flex items-center bg-[rgba(0,0,0,0.04)] rounded-[16px] px-2 py-0.5 text-[14px] text-[rgba(0,0,0,0.88)]"
              >
                {getLabels([v])}
                <button
                  type="button"
                  className="ml-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(v);
                  }}
                >
                  <CloseIcon />
                </button>
              </span>
            ))}
          </div>
        ) : (
          <span
            className={cn(
              "truncate",
              !value.length && "text-[rgba(0,0,0,0.45)]",
            )}
          >
            {getLabels()}
          </span>
        )}
        <DownIcon />
      </div>
      {open && (
        <div className="absolute left-0 mt-1 z-50 flex bg-white rounded-[8px] shadow-lg border border-[#D2D7D9]">
          {/* Render panels for each level */}
          {(() => {
            const panels = [];
            let opts = options;
            let path = [] as string[];
            for (let i = 0; i <= activePath.length; i++) {
              panels.push(
                <div key={i} className="min-w-[160px] max-h-60 overflow-auto">
                  {renderPanel(opts, path)}
                </div>,
              );
              const next = opts.find((o) => o.value === activePath[i]);
              if (!next || !next.children) break;
              opts = next.children;
              path = [...path, next.value];
            }
            return panels;
          })()}
        </div>
      )}
    </div>
  );
};

export default Cascader;
