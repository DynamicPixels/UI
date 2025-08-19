"use client";

import React from "react";
import { cn } from "../utils/cn";

export interface AnchorProps {
  direction?: "vertical" | "horizontal";
  items: Array<{
    label: React.ReactNode;
    href: string;
    active?: boolean;
    level?: 1 | 2;
    onClick?: (e: React.MouseEvent) => void;
  }>;
  className?: string;
}

/**
 * Figma UI Kit Anchor
 * - Font: Roboto, 14px, 400, line-height 1.57
 * - Color: active #1677FF, default rgba(0,0,0,0.88)
 * - Padding: vertical: 4px 0px 4px 16px (vertical, level 1), 4px 0px 4px 32px (vertical, level 2)
 * - Padding: horizontal: 4px 0px (all)
 * - Border: active: 2px solid #131414 (left for vertical, bottom for horizontal)
 */
const Anchor: React.FC<AnchorProps> = ({
  direction = "vertical",
  items,
  className,
}) => {
  return (
    <nav
      className={cn(
        direction === "vertical"
          ? "flex flex-col gap-0 bg-transparent"
          : "flex flex-row gap-0 bg-transparent",
        className,
      )}
    >
      {items.map((item, i) => {
        const isActive = !!item.active;
        const isLevel2 = item.level === 2;
        const base =
          "text-[14px] leading-[1.57] no-underline transition-colors duration-150 cursor-pointer select-none";
        const color = isActive
          ? "text-[color:var(--Blue-blue-6)]"
          : "text-[color:var(--Neutral-gray-3)] hover:text-[color:var(--Blue-blue-6)]";
        const padding =
          direction === "vertical"
            ? isLevel2
              ? "pl-8 py-1"
              : "pl-4 py-1"
            : "px-0 py-1";
        const border = isActive
          ? direction === "vertical"
            ? "border-l-2 border-[color:var(--Blue-blue-6)] bg-transparent"
            : "border-b-2 border-[color:var(--Blue-blue-6)] bg-transparent"
          : "border-none";
        return (
          <a
            key={i}
            href={item.href}
            className={cn(base, color, padding, border, "block")}
            aria-current={isActive ? "page" : undefined}
            onClick={item.onClick}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
};

export default Anchor;
