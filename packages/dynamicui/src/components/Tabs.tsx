"use client";

import React, { useState, ReactNode } from "react";
import { cn } from "../utils/cn";

export type TabsPosition = "top" | "bottom" | "left" | "right";
export type TabsSize = "small" | "default" | "large";

export interface Tab {
  key: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
}

export interface TabsProps {
  tabs: Tab[];
  value?: string;
  defaultValue?: string;
  onChange?: (key: string) => void;
  position?: TabsPosition;
  size?: TabsSize;
  className?: string;
  tabClassName?: string;
  children?: ReactNode[] | ReactNode;
  style?: React.CSSProperties;
}

const tabBase =
  "flex items-center justify-center  font-medium transition-all duration-200 select-none outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--Blue-blue-2)]";

const tabSizes: Record<TabsSize, string> = {
  small: "text-[12px] py-2 px-3 gap-1 min-w-[64px] min-h-[32px]",
  default: "text-[14px] py-3 px-4 gap-2 min-w-[80px] min-h-[40px]",
  large: "text-[16px] py-4 px-6 gap-2 min-w-[96px] min-h-[48px]",
};

const tabPositions: Record<TabsPosition, string> = {
  top: "border-b border-[color:var(--Neutral-gray-3)] flex-row",
  bottom: "border-t border-[color:var(--Neutral-gray-3)] flex-row-reverse",
  left: "border-r border-[color:var(--Neutral-gray-3)] flex-col",
  right: "border-l border-[color:var(--Neutral-gray-3)] flex-col-reverse",
};

const tabActiveStyles: Record<TabsPosition, string> = {
  top: "border-b-2 border-[color:var(--Blue-blue-6)] text-[color:var(--Blue-blue-6)] bg-[color:var(--Neutral-gray-1)] z-10",
  bottom:
    "border-t-2 border-[color:var(--Blue-blue-6)] text-[color:var(--Blue-blue-6)] bg-[color:var(--Neutral-gray-1)] z-10",
  left: "border-r-2 border-[color:var(--Blue-blue-6)] text-[color:var(--Blue-blue-6)] bg-[color:var(--Neutral-gray-1)] z-10",
  right:
    "border-l-2 border-[color:var(--Blue-blue-6)] text-[color:var(--Blue-blue-6)] bg-[color:var(--Neutral-gray-1)] z-10",
};

const tabInactiveStyles =
  "text-[color:rgba(0,0,0,0.88)] bg-transparent border-transparent hover:bg-[color:var(--Neutral-gray-2)]";
const tabDisabledStyles =
  "text-[color:rgba(0,0,0,0.45)] bg-transparent border-transparent cursor-not-allowed opacity-60";

const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  defaultValue,
  onChange,
  position = "top",
  size = "default",
  className,
  tabClassName,
  children,
  style,
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(
    defaultValue || (tabs.length > 0 ? tabs[0].key : ""),
  );
  const activeKey = isControlled ? value : internalValue;

  const handleTabClick = (key: string, disabled?: boolean) => {
    if (disabled) return;
    if (!isControlled) setInternalValue(key);
    onChange?.(key);
  };

  // Content: children can be array or single node, match by tab key order
  const renderContent = () => {
    if (!children) return null;
    if (Array.isArray(children)) {
      const idx = tabs.findIndex((t) => t.key === activeKey);
      return children[idx] ?? null;
    }
    return children;
  };

  return (
    <div className={cn("w-full flex flex-col", className)} style={style}>
      <div
        className={cn(
          "flex bg-[color:var(--Neutral-gray-1)]",
          tabPositions[position],
          "rounded-[8px] overflow-x-auto",
        )}
      >
        {tabs.map((tab) => {
          const isActive = tab.key === activeKey;
          return (
            <button
              key={tab.key}
              type="button"
              className={cn(
                tabBase,
                tabSizes[size],
                isActive ? tabActiveStyles[position] : tabInactiveStyles,
                tab.disabled && tabDisabledStyles,
                tabClassName,
                tab.className,
              )}
              disabled={tab.disabled}
              tabIndex={tab.disabled ? -1 : 0}
              onClick={() => handleTabClick(tab.key, tab.disabled)}
            >
              {tab.icon && (
                <span className="mr-1 flex items-center">{tab.icon}</span>
              )}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
      <div className="w-full bg-[color:var(--Neutral-gray-1)] rounded-[8px] mt-4 p-4 min-h-[80px]">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;
