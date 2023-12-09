"use client";
import {
  ButtonUrlCopy,
  ButtonDownLoad,
  ButtonKakaoShare,
} from "@/app/components/Buttons";
import DrawerLayout, {
  DrawerHeader,
} from "@/app/components/layout/DrawerLayout";
import { StateDrawerOpen, StateImageCard } from "@/app/lib/atoms";
import { getMemeLifeByKey } from "@/app/lib/firestore";
import { useParameter } from "@/app/lib/hooks";
import { makeImageFileName } from "@/app/lib/util";
import { getValue } from "@mui/system";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const ImageCard_Drawer = () => {
  const [drawerOpen, setDrawerOpen] = useRecoilState(StateDrawerOpen);
  const [imageCard, setImageCard] = useRecoilState(StateImageCard);

  const { getValue, addParams } = useParameter();

  useEffect(() => {
    async function getData(key: string) {
      let res = await getMemeLifeByKey(key);
      setImageCard(res);
      addParams("search", res.tag[0]);
    }
    const key = getValue("key");
    if (key && imageCard == null) {
      setDrawerOpen(true);
      getData(key);
    }
  }, []);

  return (
    <DrawerLayout>
      {imageCard == null ? (
        "loading"
      ) : (
        <div>
          {/* 제목 */}
          <DrawerHeader title={imageCard.alt} />

          {/* 내용 */}
          <div className="flex flex-wrap p-10">
            <div className="flex w-5/12">
              <Image
                id={imageCard.card_key}
                src={imageCard.img_src}
                className="h-full w-full rounded-3xl"
                alt={imageCard.alt}
                width={1000}
                height={1000}
                priority={true}
              />
            </div>
            <div className="flex w-5/12 flex-col justify-between">
              <div className="flex flex-row flex-wrap">
                {imageCard.tag.map((tagName, i) => {
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
                <ButtonUrlCopy url={imageCard.img_src} />
                <ButtonDownLoad
                  img_src={imageCard.img_src}
                  file_name={makeImageFileName(
                    imageCard.card_key,
                    imageCard.img_src,
                  )}
                />
                <ButtonKakaoShare data={imageCard} />
              </div>
            </div>
          </div>
        </div>
      )}
    </DrawerLayout>
  );
};
