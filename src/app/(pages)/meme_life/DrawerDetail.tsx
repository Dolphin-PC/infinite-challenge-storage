import {
  ButtonUrlCopy,
  ButtonDownLoad,
  ButtonKakaoShare,
} from "@/app/components/Buttons";
import DrawerLayout, {
  DrawerHeader,
} from "@/app/components/layout/DrawerLayout";
import { StateImageCard } from "@/app/lib/atoms";
import { makeImageFileName } from "@/app/lib/util";
import Image from "next/image";
import { useRecoilValue } from "recoil";

export const ImageCard_Drawer = () => {
  const data = useRecoilValue(StateImageCard);

  if (data == null) return "loading";
  return (
    <DrawerLayout>
      <div>
        {/* 제목 */}
        <DrawerHeader title={data.alt} />

        {/* 내용 */}
        <div className="flex flex-wrap p-10">
          <div className="flex w-5/12">
            <Image
              src={data?.img_src}
              className="h-full w-full rounded-3xl"
              alt={data!.alt}
              width={1000}
              height={1000}
              priority={true}
            />
          </div>
          <div className="flex w-5/12 flex-col justify-between">
            <div className="flex flex-row flex-wrap">
              {data.tag.map((tagName, i) => {
                return (
                  <div
                    key={i}
                    className="mb-2 ml-2 rounded-lg bg-primary p-2 text-white"
                  >
                    {tagName}
                  </div>
                );
              })}
            </div>
            <div className="flex w-full flex-row justify-start">
              <ButtonUrlCopy url={data.img_src} />
              <ButtonDownLoad
                img_src={data.img_src}
                file_name={makeImageFileName(data.card_key, data.img_src)}
              />
              <ButtonKakaoShare />
            </div>
          </div>
        </div>
      </div>
    </DrawerLayout>
  );
};
