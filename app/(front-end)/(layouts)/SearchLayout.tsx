'use client'
import SearchBar from '@/app/(front-end)/components/SearchBar'
import RecentSearchTag from '../components/RecentSearchTag'
import { useRecentSearch, useSearch } from '../lib/hooks'
import FloatingButton from '../components/FloatingButton'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

export default function SearchLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { searchParams, handleSearch, searchText, setSearchText } = useSearch()

  const { tags, addTag, deleteTag } = useRecentSearch()

  function handleMoveTop() {
    const ele = document.getElementById('layout')
    ele?.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className="pl-10">
      <div className="color sticky top-0 z-10 pb-3 pt-10 opacity-80">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          addTag={addTag}
          handleSearch={handleSearch}
        />
      </div>

      <RecentSearchTag
        tags={tags}
        addTag={addTag}
        deleteTag={deleteTag}
        handleSearch={handleSearch}
      />

      {/* <FloatingButton Icon={ArrowUpwardIcon} onClickEvent={handleMoveTop} /> */}
      {children}
    </div>
  )
}
