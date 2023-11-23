import { ImageCardWrapper } from "@/app/components/ImageCard";
import { getMemeLife } from "@/app/lib/firestore";
import { SearchType } from "@/app/lib/types";

export default async function page({ searchParams }: SearchType) {
  const query = searchParams?.search || "";
  const datas = await getMemeLife(query);

  return (
    <div>
      <ImageCardWrapper datas={datas} />
    </div>
  );
}
