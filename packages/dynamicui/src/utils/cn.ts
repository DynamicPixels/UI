import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Alternative utility for combining classes (used in some components)
 * @param classes - Array of class strings
 * @returns Combined class string
 */
export function combineClasses(
  ...classes: (string | undefined | boolean)[]
): string {
  return classes.filter(Boolean).join(" ");
}
