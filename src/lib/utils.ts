import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// utils - daddy don't look at this code ///UwU///
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
