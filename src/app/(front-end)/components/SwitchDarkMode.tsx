"use client";
import { FormControlLabel, Switch } from "@mui/material";
import { useDarkMode } from "../lib/hooks";

export default function SwitchDarkMode() {
  const [checked, handleChange] = useDarkMode();

  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={(e) => handleChange(e)} />}
      label={`${checked ? "Dark" : "Light"} Mode`}
    />
  );
}
