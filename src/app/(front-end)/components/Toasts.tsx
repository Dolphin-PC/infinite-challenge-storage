"use client";

import { Alert, AlertColor } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

export function Toasts({
  children,
  setShow,
  severity,
}: {
  severity: AlertColor;
  children: ReactNode;
  setShow: Function;
}) {
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000 * 3);
  }, [setShow]);

  return (
    <div className="absolute bottom-3 left-0 w-full" style={{ zIndex: 2000 }}>
      <Alert severity={severity} className="m-auto w-fit" variant="filled">
        {children}
      </Alert>
    </div>
  );
}

export function ToastsPortal({ children }: { children: ReactNode }) {
  const el: HTMLElement = document.getElementById("toast") || document.body;
  return ReactDOM.createPortal(children, el);
}
