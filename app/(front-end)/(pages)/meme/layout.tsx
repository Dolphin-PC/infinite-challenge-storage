'use client'
import { ReactNode } from 'react'
import SearchLayout from '@/app/(front-end)/(layouts)/SearchLayout'

export default function layout({ children }: { children: ReactNode }) {
  return <SearchLayout>{children}</SearchLayout>
}
