import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// A utility function that combines `clsx` for conditional class names 
// and `tailwind-merge` to handle Tailwind CSS class conflicts.
export function cn(...classes) {
  return twMerge(clsx(...classes)); // First clsx, then tailwind-merge for conflict resolution
}
