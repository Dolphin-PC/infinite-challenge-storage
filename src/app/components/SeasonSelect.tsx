"use client";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useAddParams } from "../lib/hooks";

export default function SeasonSelect() {
  const [season, setSeason] = useState("");
  const { addParams } = useAddParams();

  function handleChange(value: string) {
    setSeason(value);
    addParams("season", value);
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel>시즌</InputLabel>
      <Select
        value={season}
        label="Season"
        onChange={(e) => handleChange(e.target.value)}
      >
        <MenuItem value="">
          <em>전체</em>
        </MenuItem>
        <MenuItem value="season1">시즌 1</MenuItem>
        <MenuItem value="season2">시즌 2</MenuItem>
        <MenuItem value="season3">시즌 3</MenuItem>
      </Select>
    </FormControl>
  );
}
