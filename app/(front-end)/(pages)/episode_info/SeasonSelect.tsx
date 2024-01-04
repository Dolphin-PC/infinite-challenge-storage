'use client'

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import { useParameter } from '../../lib/hooks'

export default function SeasonSelect({
  url_season = ''
}: {
  url_season?: string
}) {
  const [season, setSeason] = useState(url_season)
  const { addParams, removeParams } = useParameter()

  function handleChange(value: string) {
    if (['season1', 'season2', 'season3'].includes(value)) {
      setSeason(value)
      addParams('season', value)
    } else {
      setSeason('')
      removeParams('season')
    }
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel>시즌</InputLabel>
      <Select
        color="primary"
        value={season}
        label="Season"
        onChange={(e) => handleChange(e.target.value)}>
        <MenuItem value="">
          <em>전체</em>
        </MenuItem>
        <MenuItem value="season1">시즌 1</MenuItem>
        <MenuItem value="season2">시즌 2</MenuItem>
        <MenuItem value="season3">시즌 3</MenuItem>
      </Select>
    </FormControl>
  )
}
