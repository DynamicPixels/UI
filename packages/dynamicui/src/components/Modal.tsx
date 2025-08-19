"use client";

import React from "react";
import { cn } from "../utils/cn";
import Button from "./Button";

export interface ModalProps {
  open: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  onOk?: () => void;
  onClose?: () => void;
  okText?: string;
  cancelText?: string;
  showClose?: boolean;
  showOk?: boolean;
  showCancel?: boolean;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  children,
  onOk,
  onClose,
  okText = "Ok",
  cancelText = "Cancel",
  showClose = true,
  showOk = true,
  showCancel = true,
  className,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className={cn(
          "bg-[color:var(--Neutral-gray-10)] rounded-[24px] shadow-[0px_6px_16px_rgba(0,0,0,0.08),0px_3px_6px_rgba(0,0,0,0.12),0px_9px_28px_rgba(0,0,0,0.05)] w-[520px] p-6 flex flex-col",
          className,
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-2">
          <div className="font-medium text-[16px] text-[color:var(--Neutral-gray-1)]">
            {title}
          </div>
          {showClose && (
            <button
              className="w-9 h-9 flex items-center cursor-pointer justify-center rounded-full hover:bg-[color:var(--Neutral-gray-8)] transition"
              onClick={onClose}
              aria-label="Close"
              type="button"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4.93 4.93L11.07 11.07"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.07 4.93L4.93 11.07"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>
        {/* Content */}
        <div className="py-2 text-[14px] text-[color:var(--Neutral-gray-10)]">
          {children}
        </div>
        {/* Footer */}
        <div className="flex justify-end gap-2 pt-3">
          {showCancel && (
            <Button variant="default" onClick={onClose}>
              {cancelText}
            </Button>
          )}
          {showOk && (
            <Button variant="primary" onClick={onOk}>
              {okText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
