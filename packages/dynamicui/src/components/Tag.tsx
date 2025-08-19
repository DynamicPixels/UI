"use client";

import React from "react";
import { cn } from "../utils/cn";

export type TagColor =
  | "default"
  | "magenta"
  | "purple"
  | "geekblue"
  | "blue"
  | "cyan"
  | "green"
  | "lime"
  | "gold"
  | "orange"
  | "volcano"
  | "red"
  | "success"
  | "error"
  | "warning"
  | "processing"
  | "waiting"
  | "stop";

export interface TagProps {
  children?: React.ReactNode;
  color?: TagColor;
  bordered?: boolean;
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const colorMap: Record<TagColor, { bg: string; border: string; text: string }> =
  {
    default: {
      bg: "bg-[rgba(0,0,0,0.02)]",
      border: "border-[color:var(--Neutral-gray-8)]",
      text: "text-[rgba(255,255,255,0.88)]",
    },
    magenta: {
      bg: "bg-[#FFF0F6]",
      border: "border-[#FFADD2]",
      text: "text-[#C41D7F]",
    },
    purple: {
      bg: "bg-[#F9F0FF]",
      border: "border-[#D3ADF7]",
      text: "text-[#531DAB]",
    },
    geekblue: {
      bg: "bg-[#F0F5FF]",
      border: "border-[#ADC6FF]",
      text: "text-[#1D39C4]",
    },
    blue: {
      bg: "bg-[#E6F4FF]",
      border: "border-[#91CAFF]",
      text: "text-[#0958D9]",
    },
    cyan: {
      bg: "bg-[#E6FFFB]",
      border: "border-[#87E8DE]",
      text: "text-[#08979C]",
    },
    green: {
      bg: "bg-[#F6FFED]",
      border: "border-[#B7EB8F]",
      text: "text-[#389E0D]",
    },
    lime: {
      bg: "bg-[#FCFFE6]",
      border: "border-[#EAFF8F]",
      text: "text-[#7CB305]",
    },
    gold: {
      bg: "bg-[#FFFBE6]",
      border: "border-[#FFE58F]",
      text: "text-[#D48806]",
    },
    orange: {
      bg: "bg-[#FFF7E6]",
      border: "border-[#FFD591]",
      text: "text-[#D46B08]",
    },
    volcano: {
      bg: "bg-[#FFF2E8]",
      border: "border-[#FFBB96]",
      text: "text-[#D4380D]",
    },
    red: {
      bg: "bg-[#FFF1F0]",
      border: "border-[#FFA39E]",
      text: "text-[#CF1322]",
    },
    success: {
      bg: "bg-[#F6FFED]",
      border: "border-[#B7EB8F]",
      text: "text-[#52C41A]",
    },
    error: {
      bg: "bg-[#FFF1F0]",
      border: "border-[#FFA39E]",
      text: "text-[#F5222D]",
    },
    warning: {
      bg: "bg-[#FFFBE6]",
      border: "border-[#FFE58F]",
      text: "text-[#FAAD14]",
    },
    processing: {
      bg: "bg-[#E6F4FF]",
      border: "border-[#91CAFF]",
      text: "text-[#1677FF]",
    },
    waiting: {
      bg: "bg-[rgba(0,0,0,0.02)]",
      border: "border-[color:var(--Neutral-gray-3)]",
      text: "text-[rgba(0,0,0,0.88)]",
    },
    stop: {
      bg: "bg-[rgba(0,0,0,0.02)]",
      border: "border-[color:var(--Neutral-gray-3)]",
      text: "text-[rgba(0,0,0,0.88)]",
    },
  };

const Tag: React.FC<TagProps> = ({
  children,
  color = "default",
  bordered = true,
  icon,
  closable = false,
  onClose,
  className,
  style,
}) => {
  const colorStyles = colorMap[color] || colorMap.default;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-[12px] leading-[20px] rounded-[16px] px-2 py-[1px] min-h-[24px] transition-all duration-200 select-none",
        colorStyles.bg,
        bordered ? `border ${colorStyles.border}` : "border-0",
        colorStyles.text,
        className,
      )}
      style={style}
    >
      {icon && <span className="w-3 h-3 flex items-center mr-1">{icon}</span>}
      <span>{children}</span>
      {closable && (
        <button
          type="button"
          className="ml-1 w-4 h-4 flex items-center justify-center rounded-full hover:bg-[rgba(0,0,0,0.06)] focus:outline-none"
          tabIndex={0}
          aria-label="close"
          onClick={onClose}
        >
          <svg viewBox="0 0 10 10" width={10} height={10} fill="none">
            <path
              d="M2 2l6 6M8 2l-6 6"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Tag;
