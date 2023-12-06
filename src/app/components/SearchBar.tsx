"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearch } from "../lib/hooks";
import { useDebouncedCallback } from "use-debounce";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function SearchBar({
  searchText,
  setSearchText,
  addTag,
  handleSearch,
}: {
  searchText: string | null;
  setSearchText: Dispatch<SetStateAction<string | null>>;
  addTag: Function;
  handleSearch: Function;
}) {
  function onChangeSearchInput(e: ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setSearchText(val);
    setSearch(val);
  }

  const setSearch = useDebouncedCallback((searchText) => {
    handleSearch(searchText);
    addTag(searchText);
  }, 300);

  return (
    <div
      className="flex w-1/3 justify-center rounded-full border-2 border-solid border-primary
    p-4 dark:bg-white dark:text-primary"
    >
      <FontAwesomeIcon icon={faSearch} width={30} className="m-auto" />
      <input
        value={searchText || ""}
        onChange={onChangeSearchInput}
        className="w-full"
        placeholder="검색어를 입력해주세요."
      />
    </div>
  );
}
