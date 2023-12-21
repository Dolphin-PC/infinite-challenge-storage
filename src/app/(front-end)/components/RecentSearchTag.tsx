'use client'

import { Chip, ListItem, Paper, Stack, Typography } from '@mui/material'
import { TagInterface } from '../../lib/types'
import { useSearch } from '../lib/hooks'

export default function RecentSearchTag({
  tags,
  addTag,
  deleteTag,
  handleSearch
}: {
  tags: TagInterface[]
  addTag: Function
  deleteTag: Function
  handleSearch: Function
}) {
  const handleClick = (searchText: string) => {
    handleSearch(searchText)
    addTag(searchText)
  }
  const handleDelete = (searchText: string) => deleteTag(searchText)

  if (tags.length == 0) return <></>
  return (
    <>
      <Typography variant="caption">최근검색어</Typography>
      <Stack direction="row-reverse" spacing={1} className="justify-end">
        {tags.map((e) => (
          <Chip
            color="default"
            key={e.searchText + e.priority}
            className="m-1"
            label={e.searchText}
            onClick={() => handleClick(e.searchText)}
            onDelete={() => handleDelete(e.searchText)}
          />
        ))}
      </Stack>
    </>
  )
}
