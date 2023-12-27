"use client";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useParameter } from "../../lib/hooks";

export default function SeasonSelect({
  url_season = "",
}: {
  url_season?: string;
}) {
  const [season, setSeason] = useState(url_season);
  const { addParams } = useParameter();

  function handleChange(value: string) {
    setSeason(value);
    addParams("season", value);
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel>시즌</InputLabel>
      <Select
        color="primary"
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
