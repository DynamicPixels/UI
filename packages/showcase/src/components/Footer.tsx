"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200/60 dark:border-gray-700/60 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col space-x-3 mb-4">
              <div className="relative mb-3">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 48 48"
                  className="drop-shadow-md"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="footerLogoGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                    <linearGradient
                      id="footerAccentGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#0891B2" />
                    </linearGradient>
                  </defs>

                  <rect
                    x="4"
                    y="4"
                    width="40"
                    height="40"
                    rx="12"
                    fill="url(#footerLogoGradient)"
                  />

                  <path
                    d="M14 16 L14 32 L20 32 Q26 32 26 24 Q26 16 20 16 Z"
                    fill="white"
                    fillOpacity="0.95"
                  />

                  <rect
                    x="30"
                    y="16"
                    width="4"
                    height="4"
                    rx="1"
                    fill="url(#footerAccentGradient)"
                  />
                  <rect
                    x="30"
                    y="22"
                    width="4"
                    height="4"
                    rx="1"
                    fill="white"
                    fillOpacity="0.8"
                  />
                  <rect
                    x="30"
                    y="28"
                    width="4"
                    height="4"
                    rx="1"
                    fill="url(#footerAccentGradient)"
                  />

                  <path
                    d="M28 18 L30 18 M28 24 L30 24 M28 30 L30 30"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeOpacity="0.7"
                    fill="none"
                  />

                  <ellipse
                    cx="18"
                    cy="12"
                    rx="6"
                    ry="3"
                    fill="white"
                    fillOpacity="0.2"
                  />
                </svg>
              </div>
              <div className="ml-0">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-blue-300 dark:to-cyan-400">
                  DynamicUI
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  by DynamicPixels
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-light">
              Beautiful, accessible React UI components by DynamicPixels.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/components"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/dynamicpixels/dynamicui"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/license"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  License
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/dynamicpixels/dynamicui/blob/main/CODE_OF_CONDUCT.md"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-200/60 dark:border-gray-700/60" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} DynamicPixels. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="https://twitter.com/dynamicpixels"
              target="_blank"
              className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-200"
              title="Follow us on X (Twitter)"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="https://github.com/dynamicpixels"
              target="_blank"
              className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              title="View our GitHub"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
