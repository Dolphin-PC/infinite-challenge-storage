"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearch } from "../lib/hooks";
import { useDebouncedCallback } from "use-debounce";
import { ChangeEvent } from "react";

export default function SearchBar({ addTag }: { addTag: Function }) {
  const { searchParams, handleSearch } = useSearch();

  const _handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const searchText = e.target.value;
      handleSearch(searchText);
      addTag(searchText);
    },
    300,
  );
  return (
    <div
      className="flex w-1/3 justify-center rounded-full border-2 border-solid border-primary
    p-4 dark:bg-white dark:text-primary"
    >
      <FontAwesomeIcon icon={faSearch} width={30} className="m-auto" />
      <input
        defaultValue={searchParams.get("search")?.toString()}
        onChange={_handleSearch}
        className="w-full"
        placeholder="검색어를 입력해주세요."
      />
    </div>
  );
}
