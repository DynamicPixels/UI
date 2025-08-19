"use client";

import React from "react";
import { cn } from "../utils/cn";

export type TimelineColor = "blue" | "red" | "green" | "gray";
export type TimelineType = "left" | "right" | "alternate";

export interface TimelineItem {
  label?: React.ReactNode;
  content: React.ReactNode;
  color?: TimelineColor;
  icon?: React.ReactNode;
  type?: TimelineType;
  className?: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  type?: TimelineType;
  className?: string;
  style?: React.CSSProperties;
}

const colorMap: Record<TimelineColor, { dot: string; line: string }> = {
  blue: {
    dot: "border-2 border-[color:var(--Blue-blue-6)] bg-[color:var(--Neutral-gray-1)]",
    line: "bg-[rgba(0,0,0,0.06)]",
  },
  red: {
    dot: "border-2 border-[#F5222D] bg-[color:var(--Neutral-gray-1)]",
    line: "bg-[rgba(0,0,0,0.06)]",
  },
  green: {
    dot: "border-2 border-[#52C41A] bg-[color:var(--Neutral-gray-1)]",
    line: "bg-[rgba(0,0,0,0.06)]",
  },
  gray: {
    dot: "border-2 border-[rgba(0,0,0,0.25)] bg-[color:var(--Neutral-gray-1)]",
    line: "bg-[rgba(0,0,0,0.06)]",
  },
};

const Timeline: React.FC<TimelineProps> = ({
  items,
  type = "left",
  className,
  style,
}) => {
  return (
    <div
      className={cn("flex flex-col gap-0 relative", className)}
      style={style}
    >
      {items.map((item, idx) => {
        const color = item.color || "blue";
        const isLast = idx === items.length - 1;
        const itemType = item.type || type;
        const alignRight =
          itemType === "right" || (itemType === "alternate" && idx % 2 === 1);
        return (
          <div
            key={idx}
            className={cn(
              "flex w-full min-h-[48px]",
              alignRight ? "flex-row-reverse" : "flex-row",
              item.className,
            )}
          >
            {/* Tail and Dot */}
            <div className="flex flex-col items-center px-4 relative">
              {/* Top line */}
              {idx !== 0 && (
                <div className={cn("w-0.5 flex-1", colorMap[color].line)} />
              )}
              {/* Dot or Icon */}
              <div
                className={cn(
                  "w-2.5 h-2.5 rounded-full flex items-center justify-center z-10",
                  colorMap[color].dot,
                )}
              >
                {item.icon}
              </div>
              {/* Bottom line */}
              {!isLast && (
                <div className={cn("w-0.5 flex-1", colorMap[color].line)} />
              )}
            </div>
            {/* Content */}
            <div
              className={cn(
                "flex-1 py-2",
                alignRight ? "pr-8 text-right" : "pl-8 text-left",
              )}
            >
              {item.label && (
                <div className="text-xs text-[rgba(0,0,0,0.45)] mb-1 leading-4">
                  {item.label}
                </div>
              )}
              <div className="text-[14px] leading-[1.57] text-[rgba(0,0,0,0.88)] font-normal font-[Inter]">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
