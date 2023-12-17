"use client";
import { FormControlLabel, Switch } from "@mui/material";
import { useDarkMode } from "../lib/hooks";
import { RecoilRoot, useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { StateColorMode } from "../lib/atoms";
import { getInitialColorMode, setColorMode } from "@/app/lib/util";

export default function SwitchDarkMode() {
  const [checked, setChecked] = useState<boolean>(false);
  const [color, setColor] = useRecoilState(StateColorMode);

  useEffect(() => {
    const mode = getInitialColorMode();
    setChecked(mode === "dark");
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let check = event.target.checked;
    setChecked(check);
    setColorMode(check ? "dark" : "light");
    setColor(check ? "dark" : "light");
  };

  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={(e) => handleChange(e)} />}
      label={`${checked ? "Dark" : "Light"} Mode`}
    />
  );
}
