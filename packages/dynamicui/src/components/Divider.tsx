"use client";

import React from "react";
import { cn } from "../utils/cn";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  dashed?: boolean;
  label?: React.ReactNode;
  labelPosition?: "center" | "left" | "right";
  className?: string;
}

/**
 * Figma UI Kit Divider
 * - Horizontal: 1px solid #E9EEF0, borderRadius: 8px, bg: #fff
 * - Dashed: 1px dashed rgba(0,0,0,0.06)
 * - Label: Roboto, 14/16px, 400/500, color: rgba(0,0,0,0.88), px-4
 * - Vertical: 1px wide, height 24px, mx-2
 */
const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  dashed = false,
  label,
  labelPosition = "center",
  className,
}) => {
  if (orientation === "vertical") {
    return (
      <div
        className={cn(
          "inline-block align-middle",
          dashed
            ? "border-l border-dashed border-[rgba(0,0,0,0.06)] h-6 mx-2"
            : "border-l border-solid border-[#E9EEF0] h-6 mx-2",
          className,
        )}
        aria-orientation="vertical"
        role="separator"
      />
    );
  }

  // Horizontal
  return (
    <div className={cn("w-full flex items-center", className)} role="separator">
      <div
        className={cn(
          dashed
            ? "border-t border-dashed border-[rgba(0,0,0,0.06)] flex-1"
            : "border-t border-solid border-[#E9EEF0] flex-1",
        )}
      />
      {label ? (
        <span
          className={cn(
            "px-4 text-[14px] leading-[1.57]",
            labelPosition === "left" && "order-first ml-0 mr-4",
            labelPosition === "right" && "order-last ml-4 mr-0",
            labelPosition === "center" && "mx-4",
          )}
        >
          {label}
        </span>
      ) : null}
      <div
        className={cn(
          dashed
            ? "border-t border-dashed border-[rgba(0,0,0,0.06)] flex-1"
            : "border-t border-solid border-[#E9EEF0] flex-1",
        )}
      />
    </div>
  );
};

export default Divider;
