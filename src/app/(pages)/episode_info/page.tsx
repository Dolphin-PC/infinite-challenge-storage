import { ImageCardWrapper } from "@/app/components/ImageCard";
import { getEpisodeInfo } from "@/app/lib/firestore";
import { SearchType } from "@/app/lib/types";

export default async function page({ searchParams }: SearchType) {
  const query = searchParams?.search || "";
  const datas = await getEpisodeInfo(query);

  return (
    <div>
      <ImageCardWrapper datas={datas} />
    </div>
  );
}
