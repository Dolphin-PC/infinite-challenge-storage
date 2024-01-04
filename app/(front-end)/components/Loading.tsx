'use client'

import { Alert, Backdrop, CircularProgress, Typography } from '@mui/material'
import React, { ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export default function Loading() {
  return (
    <LoadingPortal>
      <div className="absolute left-1/2 top-1/2 w-full">
        <div className="flex flex-col items-center justify-center w-32">
          <CircularProgress color="inherit" />
          <p>Loading...</p>
        </div>
      </div>
    </LoadingPortal>
  )
}

const LoadingPortal = ({ children }: { children: ReactNode }) => {
  const [el, setEl] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setEl(document.getElementById('loading'))
  }, [])

  if (el == null) return <></>
  return ReactDOM.createPortal(children, el)
}
