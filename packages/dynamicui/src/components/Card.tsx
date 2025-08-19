"use client";
import React from "react";
import { cn } from "../utils/cn";

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  cover?: React.ReactNode;
  bordered?: boolean;
  size?: "default" | "small";
  type?: "default" | "inner";
  actions?: React.ReactNode[];
  children?: React.ReactNode;
  className?: string;
  variant?: "minimal" | "elevated" | "outlined";
}

export interface CardMetaProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

const CardMeta: React.FC<CardMetaProps> = ({
  title,
  description,
  className,
}) => (
  <div className={cn("space-y-1.5", className)}>
    {title && (
      <div className="text-sm font-semibold text-zinc-100 leading-tight">
        {title}
      </div>
    )}
    {description && (
      <div className="text-xs text-zinc-400 leading-relaxed">{description}</div>
    )}
  </div>
);

const Card: React.FC<CardProps> & { Meta: typeof CardMeta } = ({
  title,
  extra,
  cover,
  bordered = false,
  size = "default",
  type = "default",
  variant = "minimal",
  actions,
  children,
  className,
  ...props
}) => {
  // Developer-first minimal styling with clean tokens
  const variants = {
    minimal:
      "bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/60",
    elevated:
      "bg-zinc-900/80 border border-zinc-800/30 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30",
    outlined: "bg-transparent border border-zinc-700 hover:border-zinc-600",
  };

  const sizes = {
    default: {
      padding: "p-4",
      headerGap: "mb-3",
      titleSize: "text-sm font-medium",
      extraSize: "text-xs",
    },
    small: {
      padding: "p-3",
      headerGap: "mb-2",
      titleSize: "text-xs font-medium",
      extraSize: "text-xs",
    },
  };

  const sizeConfig = sizes[size];

  return (
    <div
      className={cn(
        "relative group rounded-lg transition-all duration-200 ease-out",
        variants[variant],
        type === "inner" && "bg-zinc-950/60",
        bordered && "ring-1 ring-zinc-800/40",
        className,
      )}
      {...props}
    >
      {/* Cover Image */}
      {cover && <div className="rounded-t-lg overflow-hidden">{cover}</div>}

      {/* Header */}
      {(title || extra) && (
        <div
          className={cn(
            "flex items-start justify-between",
            sizeConfig.padding,
            !cover && "pt-4",
            !!children && sizeConfig.headerGap,
          )}
        >
          {title && (
            <div
              className={cn(
                sizeConfig.titleSize,
                "text-zinc-100 leading-tight flex-1",
              )}
            >
              {title}
            </div>
          )}
          {extra && (
            <div
              className={cn(
                sizeConfig.extraSize,
                "text-zinc-400 ml-3 shrink-0",
              )}
            >
              {extra}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      {children && (
        <div
          className={cn(
            !(title || extra) && sizeConfig.padding,
            !!(title || extra) && "px-4 pb-4",
            !cover && !(title || extra) && "pt-4",
          )}
        >
          {children}
        </div>
      )}

      {/* Actions */}
      {actions && actions.length > 0 && (
        <div className="flex items-center gap-1 px-3 py-2 mt-2 border-t border-zinc-800/40">
          {actions.map((action, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-150"
            >
              {action}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Card.displayName = "Card";
Card.Meta = CardMeta;

export default Card;
