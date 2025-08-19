"use client";

import React, { useRef, useState } from "react";

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  marks?: Record<number, string>;
  range?: boolean;
  vertical?: boolean;
  className?: string;
}

// Figma tokens
const TRACK_BG = "bg-[rgba(0,0,0,0.06)]";
const TRACK_FILL = "bg-[#91CAFF]";
const TRACK_HEIGHT = "h-1";
const TRACK_HEIGHT_VERTICAL = "w-1";
const HANDLE_SIZE = "w-[14px] h-[14px]";
const HANDLE_RADIUS = "rounded-full";
const HANDLE_BG = "bg-[#F7F9FA]";
const HANDLE_BORDER = "border-2 border-[#91CAFF]";
const HANDLE_BORDER_DISABLED = "border-2 border-[rgba(0,0,0,0.25)]";
const HANDLE_SHADOW = "shadow-[0_0_0_4px_rgba(22,119,255,0.2)]";
const MARK_LABEL =
  "text-[14px] leading-[1.57]  text-[rgba(0,0,0,0.88)] select-none";

export const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  disabled = false,
  onChange,
  marks,
  vertical = false,
  className,
}) => {
  const [internalValue, setInternalValue] = useState<number>(
    value ?? defaultValue ?? min,
  );
  const sliderRef = useRef<HTMLDivElement>(null);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value! : internalValue;

  // Calculate percent
  const percent = ((currentValue - min) / (max - min)) * 100;

  // Handle drag
  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (disabled) return;
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;
    let newPercent = 0;
    if (vertical) {
      const y = e.clientY - rect.top;
      newPercent = 100 - (y / rect.height) * 100;
    } else {
      const x = e.clientX - rect.left;
      newPercent = (x / rect.width) * 100;
    }
    let newValue =
      Math.round((min + ((max - min) * newPercent) / 100) / step) * step;
    newValue = Math.max(min, Math.min(max, newValue));
    if (!isControlled) setInternalValue(newValue);
    onChange?.(newValue);
  };

  // Render marks
  const renderMarks = () => {
    if (!marks) return null;
    return (
      <div
        className={
          vertical
            ? "absolute left-6 top-0 h-full flex flex-col justify-between"
            : "absolute top-6 left-0 w-full flex flex-row justify-between"
        }
      >
        {Object.entries(marks).map(([k, label]) => (
          <span key={k} className={MARK_LABEL}>
            {label}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div
      className={
        "relative select-none flex " +
        (vertical ? "flex-col h-48 w-6" : "flex-row w-full h-6") +
        (className ? ` ${className}` : "")
      }
    >
      <div
        ref={sliderRef}
        className={
          "relative " + (vertical ? "flex-1 w-1 mx-auto" : "w-full h-1 my-auto")
        }
        onClick={handleDrag}
        style={{ cursor: disabled ? "not-allowed" : "pointer" }}
      >
        {/* Track background */}
        <div
          className={
            (vertical ? TRACK_HEIGHT_VERTICAL : TRACK_HEIGHT) +
            ` ${TRACK_BG} absolute ${vertical ? "h-full left-1/2 -translate-x-1/2" : "w-full top-1/2 -translate-y-1/2"}`
          }
        />
        {/* Track fill */}
        <div
          className={
            (vertical ? TRACK_HEIGHT_VERTICAL : TRACK_HEIGHT) +
            ` ${TRACK_FILL} absolute ${vertical ? "h-['" + percent + "%'] left-1/2 -translate-x-1/2 bottom-0" : "w-['" + percent + "%'] top-1/2 -translate-y-1/2 left-0"}`
          }
          style={
            vertical ? { height: `${percent}%` } : { width: `${percent}%` }
          }
        />
        {/* Handle */}
        <div
          className={
            `${HANDLE_SIZE} ${HANDLE_RADIUS} ${HANDLE_BG} ` +
            (disabled
              ? HANDLE_BORDER_DISABLED
              : HANDLE_BORDER +
                " transition-shadow duration-200 " +
                (!disabled &&
                  "hover:border-[#131414] focus:border-[#131414] focus:" +
                    HANDLE_SHADOW)) +
            ` absolute ${vertical ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2"}`
          }
          style={
            vertical
              ? { bottom: `calc(${percent}% - 7px)` }
              : { left: `calc(${percent}% - 7px)` }
          }
          tabIndex={disabled ? -1 : 0}
          role="slider"
          aria-valuenow={currentValue}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-disabled={disabled}
        />
        {renderMarks()}
      </div>
    </div>
  );
};

export default Slider;
