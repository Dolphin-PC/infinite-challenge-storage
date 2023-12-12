"use client";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { MemeInterface, PageType } from "../../lib/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { memo, useEffect } from "react";
import { useSpyScroll } from "../../lib/hooks";
import NothingSearch from "../../components/NothingSearch";
import { useSetRecoilState } from "recoil";
import { StateDrawerOpen, StateImageCard } from "@/app/lib/atoms";
import clsx from "clsx";
import { ImageCard_Drawer } from "./DrawerDetail";
import { fetcher } from "@/app/lib/util";
import useSWRInfinite from "swr/infinite";

export function ImageCardWrapper({
  searchText,
}: {
  searchText: string | undefined;
}) {
  const {
    data: memeInfos,
    size,
    setSize,
    isLoading,
  } = useSWRInfinite<{ rows: MemeInterface[]; page: PageType }>(
    (
      pageIndex: number,
      previousPageData: { rows: MemeInterface[]; page: PageType },
    ) => {
      if (previousPageData && !previousPageData.rows.length) return null;
      return `/api/meme?page=${pageIndex}&search=${searchText}`; // SWR 키
    },
    fetcher,
  );

  const { isBottom, setIsBottom } = useSpyScroll("layout");
  useEffect(() => {
    if (isBottom) {
      setSize(size + 1);
      setIsBottom(false);
    }
  }, [isBottom, setSize, setIsBottom]);

  if (isLoading) return <ImageCard_Skeleton count={10} />;

  let totalCnt = (memeInfos && memeInfos[0].page.totalCnt) || 0;
  if (totalCnt == 0) return <NothingSearch />;
  return (
    <div>
      <Typography variant="caption">총 {totalCnt}개</Typography>
      <Stack
        gap={5}
        flexWrap="wrap"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {memeInfos
          ?.flatMap((ele) => ele.rows)
          .map((meme, i) => {
            return (
              <ImageCard
                key={i}
                data={meme}
                searchText={searchText}
                // handleClick={() => handleClick(meme)}
              />
            );
          })}
      </Stack>
      <ImageCard_Drawer />
    </div>
  );
}

const ImageCard = memo(function ImageCard({
  data,
  searchText,
}: {
  data: MemeInterface;
  searchText: string | undefined;
}) {
  const setDrawerOpen = useSetRecoilState(StateDrawerOpen);
  const setImageCardState = useSetRecoilState(StateImageCard);
  // const { addParams } = useParameter();

  function handleClick() {
    setImageCardState(data);
    setDrawerOpen(true);
    // addParams("key", data.card_key);
  }
  return (
    <Card className="w-5/12 md:w-3/12" onClick={handleClick}>
      <CardMedia image={data.img_src} sx={{ height: 200 }} />
      <CardContent>
        {data.tag.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            className={clsx("m-1", {
              "bg-primary text-white": searchText && tag.startsWith(searchText),
            })}
          />
        ))}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
});

const ImageCard_Skeleton = memo(function ImageCard_Skeleton({
  count = 3,
}: {
  count: number;
}) {
  return Array(count)
    .fill(0)
    .map((v, i) => (
      <Card key={i} className="w-5/12 md:w-3/12">
        <Skeleton variant="rectangular" height={200} className="w-full" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Skeleton variant="rectangular" width={210} height={30} />
          </Typography>
        </CardContent>
        <CardActions>
          <Skeleton variant="rectangular" width={50} height={30} />
          <Skeleton variant="rectangular" width={50} height={30} />
          {/* <Button size="small">Share</Button>
      <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    ));
});
