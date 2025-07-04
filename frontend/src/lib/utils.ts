import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const capitalaizeLable = (lable: string): string => {
  return lable.slice(0, 1).toUpperCase() + lable.slice(1, lable.length)
}