"use client";

import React from "react";
import { cn } from "../utils/cn";

export interface SpinProps {
  size?: "small" | "default" | "large";
  tip?: string;
  className?: string;
}

const sizeMap = {
  small: 14,
  default: 20,
  large: 32,
};

const circleProps = {
  small: [
    { cx: 11.2, cy: 11.2, r: 2.8, opacity: 0.6 },
    { cx: 2.8, cy: 11.2, r: 2.8, opacity: 1 },
    { cx: 2.8, cy: 2.8, r: 2.8, opacity: 0.5 },
    { cx: 11.2, cy: 2.8, r: 2.8, opacity: 0.3 },
  ],
  default: [
    { cx: 16, cy: 16, r: 4, opacity: 0.6 },
    { cx: 4, cy: 16, r: 4, opacity: 1 },
    { cx: 4, cy: 4, r: 4, opacity: 0.5 },
    { cx: 15.43, cy: 4, r: 4, opacity: 0.3 },
  ],
  large: [
    { cx: 25.6, cy: 25.6, r: 6.4, opacity: 0.6 },
    { cx: 6.4, cy: 25.6, r: 6.4, opacity: 1 },
    { cx: 6.4, cy: 6.4, r: 6.4, opacity: 0.5 },
    { cx: 24.29, cy: 6.4, r: 6.4, opacity: 0.3 },
  ],
};

const Spin: React.FC<SpinProps> = ({
  size = "default",
  tip = "",
  className,
}) => {
  const svgSize = sizeMap[size];
  const circles = circleProps[size];

  return (
    <span
      className={cn(
        "flex flex-col items-center justify-center gap-2",
        className,
      )}
    >
      <svg
        className="animate-spin"
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {circles.map((c, i) => (
          <circle
            key={i}
            cx={c.cx}
            cy={c.cy}
            r={c.r}
            fill="currentColor"
            opacity={c.opacity}
          />
        ))}
      </svg>
      {tip && (
        <span
          className={
            size === "small"
              ? "text-xs text-[color:var(--Blue-blue-6)] "
              : size === "large"
                ? "text-base text-[color:var(--Blue-blue-6)] "
                : "text-sm text-[color:var(--Blue-blue-6)] "
          }
        >
          {tip}
        </span>
      )}
    </span>
  );
};

export default Spin;
