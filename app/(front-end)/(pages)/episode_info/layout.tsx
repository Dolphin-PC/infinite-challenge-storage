import SearchLayout from '@/app/(front-end)/(layouts)/SearchLayout'

import React, { ReactNode } from 'react'

export default function EpisodeInfoLayout(props: {
  children: React.ReactNode
  season: React.ReactNode
}) {
  return (
    <SearchLayout>
      {props.children}
      {props.season}
    </SearchLayout>
  )
}
