"use client";
import SearchBar from "@/app/components/SearchBar";
import { Stack, Typography } from "@mui/material";
import RecentSearchTag from "../components/RecentSearchTag";
import { useRecentSearch, useSearch } from "../lib/hooks";
import FloatingButton from "../components/FloatingButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { searchParams, handleSearch, searchText, setSearchText } = useSearch();

  const { tags, addTag, deleteTag } = useRecentSearch();

  function handleMoveTop() {
    const ele = document.getElementById("layout");
    ele?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="">
      <Stack gap={2}>
        <div className="sticky top-0 bg-white pl-10 pt-10 opacity-80">
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            addTag={addTag}
            handleSearch={handleSearch}
          />
        </div>

        <div className="-z-10 pl-10">
          <RecentSearchTag
            tags={tags}
            addTag={addTag}
            deleteTag={deleteTag}
            handleSearch={handleSearch}
          />
        </div>

        <FloatingButton Icon={ArrowUpwardIcon} onClickEvent={handleMoveTop} />
        <div className="pl-10">{children}</div>
      </Stack>
    </div>
  );
}
