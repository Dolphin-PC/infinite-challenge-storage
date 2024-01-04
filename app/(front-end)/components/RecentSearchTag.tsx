'use client'

import { Chip } from '@mui/material'
import { TagInterface } from '../../lib/types'
import { FaMinus } from 'react-icons/fa'

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
      <small>최근검색어</small>
      <div className="flex justify-end flex-row-reverse gap-2">
        {tags.map((e) => (
          <Chip
            key={e.searchText + e.priority}
            color="primary"
            label={e.searchText}
            onClick={() => handleClick(e.searchText)}
            onDelete={() => handleDelete(e.searchText)}
          />
          // <div
          //   key={e.searchText + e.priority}
          //   className="flex m-1 border-2 pl-1 pr-1 rounded-lg flex-wrap gap-2">
          //   <button onClick={() => handleClick(e.searchText)}>
          //     <small>{e.searchText}</small>
          //   </button>
          //   <button onClick={() => handleDelete(e.searchText)}>
          //     <FaMinus />
          //   </button>
          // </div>
        ))}
      </div>
    </>
  )
}
