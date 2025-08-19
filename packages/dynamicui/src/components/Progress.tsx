"use client";

import React from "react";
import { cn } from "../utils/cn";

export interface ProgressProps {
  percent: number;
  status?: "active" | "success" | "exception";
  size?: "default" | "small";
  showInfo?: boolean;
  className?: string;
  strokeLinecap?: "round" | "butt";
}

const getBarColor = (status: string) => {
  switch (status) {
    case "success":
      return "bg-[color:var(--Success-green-6)]";
    case "exception":
      return "bg-[color:var(--Dust-Red-red-6)]";
    default:
      return "bg-[color:var(--Blue-blue-6)]";
  }
};

const getTrailColor = () => "bg-[color:var(--Neutral-gray-3)]";

const Progress: React.FC<ProgressProps> = ({
  percent,
  status = "active",
  size = "default",
  showInfo = true,
  className,
  strokeLinecap = "round",
}) => {
  const barStyle = strokeLinecap === "round" ? "rounded-full" : "rounded-none";
  const height = size === "small" ? "h-1.5" : "h-2.5";
  const fontSize = size === "small" ? "text-xs" : "text-sm";
  const infoColor =
    status === "exception"
      ? "text-[color:var(--Dust-Red-red-6)]"
      : status === "success"
        ? "text-[color:var(--Success-green-6)]"
        : "text-[color:var(--Neutral-gray-10)]";

  return (
    <div className={cn("w-full flex items-center gap-2", className)}>
      <div className={cn("relative flex-1", height, getTrailColor(), barStyle)}>
        <div
          className={cn(
            "absolute top-0 left-0 h-full transition-all duration-300",
            getBarColor(status),
            barStyle,
          )}
          style={{ width: `${Math.max(0, Math.min(percent, 100))}%` }}
        />
      </div>
      {showInfo && (
        <span className={cn(" font-normal", fontSize, infoColor)}>
          {percent}%
        </span>
      )}
    </div>
  );
};

export default Progress;
