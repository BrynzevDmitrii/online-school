import { cn } from '@/lib/utils'
import React from 'react'

export default function BodyContainer({ children, className = '' }) {
  return <div className={cn(`mx-auto max-w-[744px]`, className)}>{children}</div>
}
