'use client'
import { ReactNode } from 'react'
import SearchLayout from '../episode_info/layout'

export default function layout({ children }: { children: ReactNode }) {
  return <SearchLayout>{children}</SearchLayout>
}
