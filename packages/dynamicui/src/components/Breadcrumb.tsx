"use client";

import React from "react";
import { cn } from "../utils/cn";

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  separator?: React.ReactNode;
}

/**
 * Figma UI Kit Breadcrumb
 * - Font: Roboto, 14px, 400, line-height 1.57
 * - Color: default rgba(0,0,0,0.45), current rgba(0,0,0,0.88)
 * - Padding: 0 4px
 * - Separator: /, color rgba(0,0,0,0.45)
 * - Border radius: 16px
 */
const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className,
  separator = <span className="mx-1 text-[rgba(0,0,0,0.45)]">/</span>,
}) => {
  return (
    <nav
      className={cn("flex flex-row items-center", className)}
      aria-label="Breadcrumb"
    >
      {items.map((item, i) => {
        const isCurrent = !!item.current || i === items.length - 1;
        const base =
          " text-[14px] leading-[1.57] px-1 py-0 rounded-[16px] transition-colors duration-150";
        const color = isCurrent
          ? "text-[rgba(0,0,0,0.88)] cursor-default"
          : "text-[rgba(0,0,0,0.45)] hover:text-[rgba(0,0,0,0.88)] cursor-pointer";
        return (
          <React.Fragment key={i}>
            {item.href && !isCurrent ? (
              <a
                href={item.href}
                className={cn(base, color)}
                aria-current={isCurrent ? "page" : undefined}
              >
                {item.label}
              </a>
            ) : (
              <span
                className={cn(base, color)}
                aria-current={isCurrent ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
            {i < items.length - 1 && separator}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
