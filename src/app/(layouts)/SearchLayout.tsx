"use client";
import SearchBar from "@/app/components/SearchBar";
import { Stack, Typography } from "@mui/material";
import RecentSearchTag from "../components/RecentSearchTag";
import { useRecentSearch, useSearch } from "../lib/hooks";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { searchParams, handleSearch, searchText, setSearchText } = useSearch();

  const { tags, addTag, deleteTag } = useRecentSearch();
  return (
    <div className="p-10">
      <Stack gap={2}>
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          addTag={addTag}
          handleSearch={handleSearch}
        />

        <RecentSearchTag
          tags={tags}
          addTag={addTag}
          deleteTag={deleteTag}
          handleSearch={handleSearch}
        />

        {children}
      </Stack>
    </div>
  );
}
