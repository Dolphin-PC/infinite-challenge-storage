import { ImageCardWrapper } from "@/app/components/ImageCard";
import { mock_data } from "@/app/lib/mock_data";

export default async function page({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) {
  return (
    <div>
      <ImageCardWrapper searchText={searchParams?.search} />
    </div>
  );
}
