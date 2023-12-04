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
    <div className="p-10">
      <Stack gap={2}>
        <SearchBar addTag={addTag} />

        <RecentSearchTag tags={tags} addTag={addTag} deleteTag={deleteTag} />

        {children}
      </Stack>
    </div>
  );
}
