import { ImageCardWrapper } from "@/app/(pages)/meme_life/ImageCard";
import { mock_data } from "@/app/lib/mock_data";
import { Suspense } from "react";
import SearchLayout from "../episode_info/layout";

export default async function page({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) {
  return (
    <SearchLayout>
      <ImageCardWrapper searchText={searchParams?.search} />
    </SearchLayout>
  );
}
