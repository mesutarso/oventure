import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getMonthandDate = (date: string) => {
  const d = new Date(date)
  const day = d.getDate()
  const month = d.toLocaleDateString('fr-FR', { month: 'short' })
  return {day,month}
}

export const formatDate = (date: string) => {
    const d = new Date(date)
    return d.toLocaleDateString('fr-FR', { month: 'short', day: 'numeric', year: 'numeric' })
}
