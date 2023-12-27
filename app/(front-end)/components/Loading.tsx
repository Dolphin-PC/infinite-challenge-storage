'use client'

import { Alert, Backdrop, CircularProgress, Typography } from '@mui/material'
import React, { ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export default function Loading() {
  return (
    <LoadingPortal>
      <CircularProgress color="inherit" />
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
