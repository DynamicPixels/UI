"use client";

import React from "react";
import { cn } from "../utils/cn";

export interface NavigationProps {
  total?: number;
  current?: number;
  pageSize?: number;
  pageCount?: number;
  onChange?: (page: number) => void;
  className?: string;
  showJumper?: boolean;
  showTotal?: boolean;
  showPageSize?: boolean;
  mini?: boolean;
}

/**
 * Figma UI Kit Navigation (Pagination)
 * - Font: Roboto, 14px, 400, line-height 1.57
 * - Item: 40x40 (default), 36x36 (mini), rounded-[24px]
 * - Active: border-[#131414], text-[#1677FF]
 * - Default: text-[rgba(0,0,0,0.88)]
 * - Disabled: text-[rgba(0,0,0,0.45)]
 * - More: Ellipsis icon
 * - Jumper: input, select, "Go to", "Page"
 */
const Navigation: React.FC<NavigationProps> = ({
  total = 50,
  current = 1,
  pageSize = 10,
  pageCount,
  onChange,
  className,
  showJumper = true,
  showTotal = true,
  showPageSize = true,
  mini = false,
}) => {
  const count = pageCount || Math.ceil(total / pageSize);
  const numbers = [];
  for (let i = 1; i <= Math.min(count, 5); i++) numbers.push(i);
  if (count > 6) numbers.push("more", count);
  else if (count === 6) numbers.push(6);

  return (
    <nav
      className={cn("flex items-center gap-4", className)}
      aria-label="Pagination"
    >
      {showTotal && (
        <span className=" text-[14px] text-[rgba(0,0,0,0.88)]">
          Total {total} items
        </span>
      )}
      <div className="flex items-center gap-2">
        <button
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-[24px] border border-transparent text-[rgba(0,0,0,0.45)] hover:bg-[rgba(0,0,0,0.06)] disabled:opacity-50",
            mini && "w-9 h-9",
          )}
          onClick={() => onChange && onChange(Math.max(1, current - 1))}
          disabled={current === 1}
          aria-label="Previous"
        >
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 14 14"
          >
            <path
              d="M9 3l-4 4 4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {numbers.map((n, i) =>
          n === "more" ? (
            <span
              key={i}
              className={cn(
                "w-10 h-10 flex items-center justify-center text-[rgba(0,0,0,0.45)]",
                mini && "w-9 h-9",
              )}
              aria-hidden="true"
            >
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 14 14"
              >
                <circle cx="7" cy="7" r="1" />
                <circle cx="3" cy="7" r="1" />
                <circle cx="11" cy="7" r="1" />
              </svg>
            </span>
          ) : (
            <button
              key={i}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-[24px]  text-[14px] transition-colors",
                mini && "w-9 h-9",
                n === current
                  ? "border border-[#131414] text-[#1677FF] bg-white"
                  : "text-[rgba(0,0,0,0.88)] hover:bg-[rgba(0,0,0,0.06)] border border-transparent",
                n === current && "font-bold",
              )}
              onClick={() => typeof n === "number" && onChange && onChange(n)}
              aria-current={n === current ? "page" : undefined}
              disabled={n === current}
            >
              {n}
            </button>
          ),
        )}
        <button
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-[24px] border border-transparent text-[rgba(0,0,0,0.45)] hover:bg-[rgba(0,0,0,0.06)] disabled:opacity-50",
            mini && "w-9 h-9",
          )}
          onClick={() => onChange && onChange(Math.min(count, current + 1))}
          disabled={current === count}
          aria-label="Next"
        >
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 14 14"
          >
            <path
              d="M5 3l4 4-4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {showPageSize && (
        <select
          className={cn(
            "ml-4 px-3 py-2 rounded-[16px] border border-[#D2D7D9] bg-white  text-[14px] text-[rgba(0,0,0,0.88)] focus:outline-none",
            mini && "px-2 py-1 rounded-[8px]",
          )}
          value={pageSize}
          onChange={(_) => onChange && onChange(1)}
        >
          {[10, 20, 50, 100].map((n) => (
            <option key={n} value={n}>
              {n} / page
            </option>
          ))}
        </select>
      )}
      {showJumper && (
        <form
          className={cn("ml-4 flex items-center gap-2", mini && "gap-1")}
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const input = form.elements.namedItem("jumper") as HTMLInputElement;
            const val = parseInt(input.value, 10);
            if (!isNaN(val) && val >= 1 && val <= count && onChange)
              onChange(val);
          }}
        >
          <span className=" text-[14px] text-[rgba(0,0,0,0.88)]">Go to</span>
          <input
            name="jumper"
            type="number"
            min={1}
            max={count}
            className={cn(
              "w-12 px-2 py-1 rounded-[16px] border border-[#D2D7D9] bg-white  text-[14px] text-[rgba(0,0,0,0.88)] focus:outline-none",
              mini && "w-9 px-1 py-0.5 rounded-[8px]",
            )}
            defaultValue={current}
          />
          <span className=" text-[14px] text-[rgba(0,0,0,0.88)]">Page</span>
        </form>
      )}
    </nav>
  );
};

export default Navigation;
