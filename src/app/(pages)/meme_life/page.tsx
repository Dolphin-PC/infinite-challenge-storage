import { ImageCardWrapper } from "@/app/(pages)/meme_life/ImageCard";
import { mock_data } from "@/app/lib/mock_data";
import { Suspense } from "react";
import SearchLayout from "../episode_info/layout";
import { SearchInterface } from "@/app/lib/types";

export default async function page({
  searchParams,
}: {
  searchParams: SearchInterface;
}) {
  return (
    <div>
      <ImageCardWrapper searchParams={searchParams} />
    </div>
  );
}
