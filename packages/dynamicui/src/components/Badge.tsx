"use client";

import React from "react";
import { cn } from "../utils/cn";

export type BadgeStatusType =
  | "success"
  | "error"
  | "warning"
  | "processing"
  | "default";
export type BadgeColor =
  | "default"
  | "pink"
  | "red"
  | "cyan"
  | "green"
  | "purple"
  | "volcano"
  | "magenta";

const statusColorMap: Record<BadgeStatusType, string> = {
  success: "bg-[#52C41A]",
  error: "bg-[#F5222D]",
  warning: "bg-[#FAAD14]",
  processing: "bg-[#1677FF]",
  default: "bg-[rgba(0,0,0,0.45)]",
};

const ribbonColorMap: Record<BadgeColor, string> = {
  default: "bg-[#1677FF]",
  pink: "bg-[#EB2F96]",
  red: "bg-[#F5222D]",
  cyan: "bg-[#13C2C2]",
  green: "bg-[#52C41A]",
  purple: "bg-[#722ED1]",
  volcano: "bg-[#FA541C]",
  magenta: "bg-[#EB2F96]",
};

export interface BadgeProps {
  count?: number;
  overflowCount?: number;
  dot?: boolean;
  status?: BadgeStatusType;
  size?: "default" | "small";
  children?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  count,
  overflowCount = 10,
  dot = false,
  status,
  size = "default",
  children,
  className,
}) => {
  const badgeSize = size === "small" ? "h-3 w-3 text-xs" : "h-4 w-4 text-sm";
  const badge = dot ? (
    <span
      className={cn(
        "inline-block rounded-full border border-[#F7F9FA]",
        badgeSize,
        status ? statusColorMap[status] : "bg-[#F5222D]",
      )}
    ></span>
  ) : (
    count && (
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-full px-2 border border-[#F7F9FA] bg-[#F5222D] text-[#F7F9FA] ",
          badgeSize,
        )}
      >
        {count && count > overflowCount ? `${overflowCount}+` : count}
      </span>
    )
  );

  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <span
        className={cn(
          "absolute -top-2 -right-2",
          size === "small" ? "-top-1 -right-1" : "",
        )}
      >
        {badge}
      </span>
    </span>
  );
};

export interface BadgeStatusProps {
  status: BadgeStatusType;
  text?: string;
  className?: string;
}

export const BadgeStatus: React.FC<BadgeStatusProps> = ({
  status,
  text = "Status",
  className,
}) => (
  <span className={cn("inline-flex items-center gap-2", className)}>
    <span
      className={cn(
        "inline-block h-2 w-2 rounded-full border-2 border-[#F7F9FA]",
        statusColorMap[status],
      )}
    ></span>
    <span className=" text-[14px] text-[rgba(0,0,0,0.88)]">{text}</span>
  </span>
);

export interface BadgeRibbonProps {
  color?: BadgeColor;
  text?: string;
  children: React.ReactNode;
  className?: string;
}

export const BadgeRibbon: React.FC<BadgeRibbonProps> = ({
  color = "default",
  text = "Ribbon",
  children,
  className,
}) => (
  <div className={cn("relative inline-block", className)}>
    <div
      className={cn(
        "absolute top-2 right-2 px-2 py-1 rounded-tr-[16px] rounded-bl-[16px] text-[#F7F9FA]  text-[14px] flex items-center gap-1",
        ribbonColorMap[color],
      )}
    >
      {text}
      <svg
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-1"
      >
        <path d="M0 0L4 6L8 0H0Z" fill="currentColor" />
      </svg>
    </div>
    <div className="rounded-[16px] bg-[#E6F4FF] border border-[#1677FF] p-8">
      {children}
    </div>
  </div>
);

export default Badge;
