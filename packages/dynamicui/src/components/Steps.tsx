"use client";

import React from "react";
import { cn } from "../utils/cn";

export type StepStatus = "wait" | "process" | "finish";
export type StepType = "default" | "dot" | "icon";
export type StepDirection = "horizontal" | "vertical";
export type StepSize = "default" | "small";

export interface Step {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  status?: StepStatus;
  disabled?: boolean;
}

export interface StepsProps {
  steps: Step[];
  current?: number;
  direction?: StepDirection;
  type?: StepType;
  size?: StepSize;
  className?: string;
  onChange?: (current: number) => void;
}

const statusColor = {
  wait: "bg-[rgba(0,0,0,0.06)] text-[rgba(0,0,0,0.45)] border-[rgba(0,0,0,0.06)]",
  process:
    "bg-[color:var(--Blue-blue-6)] text-[color:var(--Neutral-gray-1)] border-[color:var(--Blue-blue-6)]",
  finish:
    "bg-[color:var(--Blue-blue-6)] text-[color:var(--Neutral-gray-1)] border-[color:var(--Blue-blue-6)]",
};

const Steps: React.FC<StepsProps> = ({
  steps,
  current = 0,
  direction = "horizontal",
  type = "default",
  size = "default",
  className,
  onChange,
}) => {
  const isVertical = direction === "vertical";
  const isDot = type === "dot";
  const isIcon = type === "icon";

  return (
    <div
      className={cn(
        "flex",
        isVertical ? "flex-col gap-2" : "flex-row gap-4",
        className,
      )}
    >
      {steps.map((step, idx) => {
        const status: StepStatus =
          step.status ||
          (idx < current ? "finish" : idx === current ? "process" : "wait");
        const clickable = !!onChange && !step.disabled && idx <= current + 1;
        return (
          <div
            key={idx}
            className={cn(
              "flex",
              isVertical ? "flex-row items-start" : "flex-col items-center",
              size === "small" ? "gap-2" : "gap-3",
            )}
          >
            {/* Icon or Dot */}
            <button
              type="button"
              disabled={!clickable}
              onClick={() => clickable && onChange && onChange(idx)}
              className={cn(
                "flex items-center justify-center border transition-all duration-200 font-['Roboto']",
                isDot
                  ? size === "small"
                    ? "w-2.5 h-2.5 rounded-full border-none bg-[rgba(0,0,0,0.06)]"
                    : "w-3 h-3 rounded-full border-none bg-[rgba(0,0,0,0.06)]"
                  : size === "small"
                    ? "w-9 h-9 rounded-full text-[12px]"
                    : "w-10 h-10 rounded-full text-[14px]",
                statusColor[status],
                clickable ? "cursor-pointer" : "cursor-default opacity-60",
              )}
              aria-current={status === "process" ? "step" : undefined}
            >
              {isDot ? null : isIcon && step.icon ? step.icon : idx + 1}
            </button>
            {/* Content */}
            <div
              className={cn(
                "flex flex-col",
                isVertical ? "ml-3" : "mt-2 items-center",
                size === "small" ? "gap-0.5" : "gap-1",
              )}
            >
              <span
                className={cn(
                  "font-['Roboto'] font-medium",
                  size === "small" ? "text-[12px]" : "text-[16px]",
                  status === "process"
                    ? "text-[rgba(0,0,0,0.88)]"
                    : status === "wait"
                      ? "text-[rgba(0,0,0,0.45)]"
                      : "text-[color:var(--Blue-blue-6)]",
                )}
              >
                {step.title}
              </span>
              {step.description && (
                <span
                  className={cn(
                    "font-['Roboto']",
                    size === "small" ? "text-[10px]" : "text-[14px]",
                    status === "process"
                      ? "text-[rgba(0,0,0,0.88)]"
                      : status === "wait"
                        ? "text-[rgba(0,0,0,0.45)]"
                        : "text-[color:var(--Blue-blue-6)]",
                  )}
                >
                  {step.description}
                </span>
              )}
            </div>
            {/* Tail (line) */}
            {idx < steps.length - 1 && (
              <div
                className={cn(
                  isVertical
                    ? "w-1 h-6 mx-4 bg-[rgba(0,0,0,0.06)]"
                    : "h-1 w-10 my-2 bg-[rgba(0,0,0,0.06)]",
                  "rounded",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
