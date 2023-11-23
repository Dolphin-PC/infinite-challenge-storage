import ImageCard, { ImageCardWrapper } from "@/app/components/ImageCard";
import { getData } from "@/app/lib/firestore";
import { DataType } from "@/app/lib/types";
import Image from "next/image";

export default async function page() {
  const datas = await getData();

  return (
    <div>
      <ImageCardWrapper datas={datas} />
    </div>
  );
}
