"use client";

import React from "react";
import { cn } from "../utils/cn";

export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  description?: React.ReactNode;
  imageType?: "basic" | "simple" | "customize";
  image?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const EmptyIllustrationBasic = () => (
  <svg
    width="121"
    height="99"
    viewBox="0 0 121 99"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="16" width="105.26" height="99.49" rx="8" fill="#fff" />
    <g opacity="0.8">
      <rect
        x="0"
        y="61.99"
        width="89.21"
        height="16.67"
        rx="8"
        fill="#F5F5F7"
      />
      <rect
        x="8.92"
        y="25"
        width="71.37"
        height="30.96"
        rx="8"
        fill="#AEB8C2"
      />
      <rect
        x="13.37"
        y="38.97"
        width="62.35"
        height="26.82"
        rx="8"
        fill="#DCE0E6"
      />
      <rect x="19.63" width="49.96" height="66.67" rx="8" fill="#F5F5F7" />
      <rect
        x="8.92"
        y="6.55"
        width="71.37"
        height="66.08"
        rx="8"
        fill="#DCE0E6"
      />
    </g>
    <rect x="75.53" width="29.74" height="23.81" rx="8" fill="#DCE0E6" />
    <g opacity="0.8">
      <rect
        x="82.66"
        y="10.35"
        width="15.46"
        height="3.7"
        rx="1.85"
        fill="#fff"
      />
      <rect
        x="93.37"
        y="0.23"
        width="9.37"
        height="3.24"
        rx="1.62"
        fill="#fff"
      />
    </g>
  </svg>
);

const EmptyIllustrationSimple = () => (
  <svg
    width="64"
    height="40"
    viewBox="0 0 64 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="25.81" width="64" height="13.9" rx="6.95" fill="#F5F5F5" />
    <g>
      <rect
        x="9"
        y="1"
        width="46"
        height="34.74"
        rx="8"
        fill="#FAFAFA"
        stroke="#D9D9D9"
      />
      <rect x="0" y="0" width="46" height="21.84" rx="8" stroke="#D9D9D9" />
      <rect
        x="0"
        y="12.9"
        width="46"
        height="21.84"
        rx="8"
        fill="#FAFAFA"
        stroke="#D9D9D9"
      />
    </g>
  </svg>
);

const EmptyIllustrationCustomize = () => (
  <svg
    width="97"
    height="60"
    viewBox="0 0 97 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.8">
      <rect
        x="4.44"
        width="87.55"
        height="37.14"
        rx="8"
        fill="url(#paint0_linear)"
      />
    </g>
    <rect
      x="27.11"
      y="47.02"
      width="42.2"
      height="9.72"
      rx="4.86"
      fill="url(#paint1_linear)"
    />
    <g opacity="0.675">
      <rect
        y="46.17"
        width="97.21"
        height="13.33"
        rx="6.67"
        fill="url(#paint2_linear)"
      />
    </g>
    <g>
      <rect
        x="0"
        y="0"
        width="32.71"
        height="13.65"
        rx="6.82"
        fill="url(#paint3_linear)"
      />
      <rect
        x="2.04"
        y="5.96"
        width="28.63"
        height="11.87"
        rx="5.93"
        fill="url(#paint4_linear)"
      />
      <rect
        x="0"
        y="9.09"
        width="32.71"
        height="11.93"
        rx="5.97"
        fill="url(#paint5_linear)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="48.2"
        y1="44.2"
        x2="48.2"
        y2="-6.56"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEDEDE" stopOpacity="0" />
        <stop offset="1" stopColor="#A9A9A9" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="48.21"
        y1="56.74"
        x2="48.21"
        y2="47.02"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFFF" stopOpacity="0" />
        <stop offset="1" stopColor="#96A1C5" stopOpacity="0.37" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="48.6"
        y1="59.5"
        x2="48.6"
        y2="46.17"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFFF" stopOpacity="0" />
        <stop offset="1" stopColor="#919191" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="16.36"
        y1="13.65"
        x2="16.36"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5389F5" />
        <stop offset="1" stopColor="#416FDC" />
      </linearGradient>
      <linearGradient
        id="paint4_linear"
        x1="16.36"
        y1="17.83"
        x2="16.36"
        y2="5.96"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DCE9FF" />
        <stop offset="1" stopColor="#B6CFFF" />
      </linearGradient>
      <linearGradient
        id="paint5_linear"
        x1="16.36"
        y1="21.02"
        x2="16.36"
        y2="9.09"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7CA5F7" />
        <stop offset="1" stopColor="#C4D6FC" />
      </linearGradient>
    </defs>
  </svg>
);

const illustrationMap = {
  basic: <EmptyIllustrationBasic />,
  simple: <EmptyIllustrationSimple />,
  customize: <EmptyIllustrationCustomize />,
};

const descriptionMap = {
  basic: "No Data",
  simple: "No Data",
  customize: "Customize Description",
};

const Empty: React.FC<EmptyProps> = ({
  description,
  imageType = "basic",
  image,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-8 px-4",
        "bg-[var(--empty-bg-dark,transparent)]",
        className,
      )}
      {...props}
    >
      <div className="mb-4">{image || illustrationMap[imageType]}</div>
      <div
        className={cn(
          "mb-2 text-[14px]  text-center",
          "text-[var(--empty-text-dark,rgba(255,255,255,0.45))]",
        )}
      >
        {description || descriptionMap[imageType]}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </div>

    // Note: The background color lines above are optional and can be removed if not needed for your design system.
  );
};

export default Empty;
