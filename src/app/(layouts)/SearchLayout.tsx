"use client";
import SearchBar from "@/app/components/SearchBar";
import { Stack, Typography } from "@mui/material";
import RecentSearchTag from "../components/RecentSearchTag";
import { useRecentSearch } from "../lib/hooks";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { tags, addTag, deleteTag } = useRecentSearch();
  return (
    <div>
      <Stack gap={2}>
        <SearchBar addTag={addTag} />

        <div>
          <Typography variant="caption">최근검색어</Typography>
          <RecentSearchTag tags={tags} addTag={addTag} deleteTag={deleteTag} />
        </div>

        {children}
      </Stack>
    </div>
  );
}
