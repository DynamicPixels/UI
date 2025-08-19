"use client";

import Link from "next/link";
import { Button, Switch } from "@dynamicpixels/dynamicui";
import { Zap, Github, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  className="drop-shadow-lg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background circle with gradient */}
                  <defs>
                    <linearGradient
                      id="logoGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                    <linearGradient
                      id="accentGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#0891B2" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Main background */}
                  <rect
                    x="4"
                    y="4"
                    width="40"
                    height="40"
                    rx="12"
                    fill="url(#logoGradient)"
                    className="shadow-lg"
                  />

                  {/* Dynamic "D" letterform */}
                  <path
                    d="M14 16 L14 32 L20 32 Q26 32 26 24 Q26 16 20 16 Z"
                    fill="white"
                    fillOpacity="0.95"
                  />

                  {/* UI elements - squares representing interface components */}
                  <rect
                    x="30"
                    y="16"
                    width="4"
                    height="4"
                    rx="1"
                    fill="url(#accentGradient)"
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
                    fill="url(#accentGradient)"
                  />

                  {/* Dynamic connecting lines */}
                  <path
                    d="M28 18 L30 18 M28 24 L30 24 M28 30 L30 30"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeOpacity="0.7"
                    fill="none"
                  />

                  {/* Subtle highlight */}
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
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-blue-300 dark:to-cyan-400">
                  DynamicUI
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  by DynamicPixels
                </p>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <Switch
                checked={isDarkMode}
                onChange={toggleTheme}
                size="small"
              />
              <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </div>

            <Link
              href="https://github.com/dynamicpixels/dynamicui"
              target="_blank"
            >
              <Button
                variant="text"
                size="small"
                className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                icon={
                  <Github className="w-4 h-4 text-gray-900 dark:text-white" />
                }
              >
                GitHub
              </Button>
            </Link>
          </nav>

          <div className="md:hidden">
            <Button
              variant="text"
              size="small"
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              icon={
                isMenuOpen ? (
                  <X className="w-5 h-5 text-gray-900 dark:text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-900 dark:text-white" />
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b shadow-sm">
          <div className="px-4 py-3 space-y-2">
            <div className="flex items-center justify-between py-2 px-3">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Theme
              </span>
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <Switch
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  size="small"
                />
                <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </div>
            </div>

            <Link
              href="/docs"
              className="block py-2 px-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              href="/components"
              className="block py-2 px-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Components
            </Link>
            <Link
              href="https://github.com/dynamicpixels/dynamicui"
              target="_blank"
              className="block py-2 px-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
