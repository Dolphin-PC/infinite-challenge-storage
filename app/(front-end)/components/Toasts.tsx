'use client'

import { Alert, AlertColor, Typography } from '@mui/material'
import React, { ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export const Toast = ({
  message,
  init_show
}: {
  message: string
  init_show: boolean
}) => {
  return (
    <ToastsPortal>
      {init_show && (
        <div
          className="absolute bottom-3 left-0 w-full"
          style={{ zIndex: 2000 }}>
          <Alert severity="info" className="m-auto w-fit" variant="filled">
            <Typography variant="body1">{message}</Typography>
          </Alert>
        </div>
      )}
    </ToastsPortal>
  )
}

export function AutoToasts({
  children,
  setShow,
  severity
}: {
  severity: AlertColor
  children: ReactNode
  setShow: Function
}) {
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 1000 * 3)
  }, [setShow])

  return (
    <div className="absolute bottom-3 left-0 w-full" style={{ zIndex: 2000 }}>
      <Alert severity={severity} className="m-auto w-fit" variant="filled">
        {children}
      </Alert>
    </div>
  )
}

export function ToastsPortal({ children }: { children: ReactNode }) {
  const [el, setEl] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setEl(document.getElementById('toast'))
  }, [])
  // const el: HTMLElement = document.getElementById('toast') || document.body

  if (el == null) return <></>
  return ReactDOM.createPortal(children, el)
}
