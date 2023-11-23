"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearch } from "../lib/hooks";

export default function SearchBar() {
  const { searchParams, handleSearch } = useSearch();
  return (
    <div
      className="flex w-1/3 justify-center rounded-full border-2 border-solid border-primary
    p-4"
    >
      <FontAwesomeIcon icon={faSearch} width={30} className="m-auto" />
      <input
        defaultValue={searchParams.get("search")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full"
        placeholder="검색어를 입력해주세요."
      />
    </div>
  );
}
