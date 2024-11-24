import React from 'react'
import { cn } from '@/lib/utils'
export default function Container({ children, className = '' }) {
  return <div className={cn(`mx-auto max-w-[1280px]`, className)}>{children}</div>
}
