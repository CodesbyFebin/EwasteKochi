import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// LRU-like cache for class strings (performance optimisation)
const cache = new Map<string, string>();
const MAX_CACHE_SIZE = 1000;

/**
 * Merges Tailwind CSS classes intelligently with memoization.
 * Use this for conditional class merging in React/Astro components.
 *
 * @example
 * cn('px-2 py-1', isActive && 'bg-blue-500', 'hover:bg-blue-600')
 */
export function cn(...inputs: ClassValue[]): string {
  // Generate cache key from inputs (serialised)
  const key = JSON.stringify(inputs);
  
  if (cache.has(key)) {
    return cache.get(key)!;
  }
  
  const result = twMerge(clsx(inputs));
  
  // Prevent unlimited cache growth
  if (cache.size >= MAX_CACHE_SIZE) {
    // Delete first entry if limit reached
    const firstKey = cache.keys().next().value;
    if (firstKey !== undefined) cache.delete(firstKey);
  }
  cache.set(key, result);
  
  return result;
}

/**
 * Expose helper to global window in development for easy debugging
 */
if (typeof window !== "undefined" && import.meta.env?.MODE === "development") {
  (window as any).__cn = (...inputs: ClassValue[]) => cn(...inputs);
}
