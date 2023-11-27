"use client";

import { Chip, ListItem, Paper } from "@mui/material";
import { TagInterface } from "../lib/types";
import { useSearch } from "../lib/hooks";

export default function RecentSearchTag({
  tags,
  addTag,
  deleteTag,
}: {
  tags: TagInterface[];
  addTag: Function;
  deleteTag: Function;
}) {
  const { handleSearch } = useSearch();

  const handleClick = (searchText: string) => {
    handleSearch(searchText);
    addTag(searchText);
  };
  const handleDelete = (searchText: string) => deleteTag(searchText);

  return (
    <div className="flex flex-row-reverse justify-end">
      {tags.map((e) => (
        <Chip
          key={e.searchText + e.priority}
          className="mr-2"
          label={e.searchText}
          onClick={() => handleClick(e.searchText)}
          onDelete={() => handleDelete(e.searchText)}
        />
      ))}
    </div>
  );
}
