"use client";

import React, { useEffect, useLayoutEffect } from "react";

export default function Switch() {
  return (
    <>
      <input type="checkbox" id="toggle" hidden />
      <label htmlFor="toggle" className="toggleSwitch">
        <span className="toggleButton"></span>
      </label>
    </>
  );
}
