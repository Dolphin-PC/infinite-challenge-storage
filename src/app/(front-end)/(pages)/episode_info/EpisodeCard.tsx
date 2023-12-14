"use client";
import { EpisodeInterface, ListResType } from "@/app/lib/types";
import { Paper, Skeleton, Stack, Typography } from "@mui/material";
import { useSpyScroll } from "@/app/(front-end)/lib/hooks";
import { memo, useEffect } from "react";
import Image from "next/image";
import { Divider_2_4 } from "@/app/(front-end)/components/Dividers";
import useSWRInfinite from "swr/infinite";
import { fetcher, makeUrlParam } from "@/app/lib/util";
import { DATA_LIMIT } from "@/app/lib/data";
export const EpisodeWrapper = ({
  season,
  search,
}: {
  season: string;
  search?: string;
}) => {
  const {
    data: episodeDataList,
    isLoading,
    size,
    setSize,
  } = useSWRInfinite<ListResType<EpisodeInterface[]>>(
    (page: number, previousPageData: ListResType<EpisodeInterface[]>) => {
      if (previousPageData && previousPageData.data.length < DATA_LIMIT)
        return null;

      return makeUrlParam("/api/episode/list", {
        page: page + 1,
        season,
        search,
      });
    },
    fetcher,
    { revalidateFirstPage: false },
  );

  const { isBottom, setIsBottom } = useSpyScroll("layout");
  useEffect(() => {
    if (isBottom) {
      setSize(size + 1);
      setIsBottom(false);
    }
  }, [isBottom, setSize, size, setIsBottom]);

  if (isLoading) {
    return Array(2).map((_, i) => {
      return <EpisodeCard_Skeleton key={i} />;
    });
  }

  return (
    <Stack
      flexWrap="wrap"
      direction="row"
      rowGap={1}
      className="w-full"
      id={`episode-${season}-container`}
    >
      {episodeDataList
        ?.flatMap((ele) => ele.data)
        .map((episode, i) => {
          return <EpisodeCard key={i} data={episode} />;
        })}
    </Stack>
  );
};

const EpisodeCard = memo(function EpisodeCard({
  data,
}: {
  data: EpisodeInterface;
}) {
  return (
    <div className="w-full lg:w-6/12">
      <Paper className="m-2 flex flex-wrap p-2">
        <div className="w-6/12">
          <Image
            width={300}
            height={300}
            className="mb-2 w-full"
            src={data.img_src}
            alt={data.description ?? ""}
            priority
          />
          {/* <Skeleton variant="rounded" height={100} className="mb-2 w-full" /> */}
        </div>
        <div className="w-6/12 pl-4">
          <Typography variant="h6">{data.title}</Typography>
          <Typography variant="subtitle2">
            방영일 : {data.air_date}, {data.air_time}
          </Typography>
          <Divider_2_4 />
          <Typography className="line-clamp-4">{data.description}</Typography>
        </div>
        <Typography variant="body2">출연 : {data.actor.join(", ")}</Typography>
      </Paper>
    </div>
  );
});

const EpisodeCard_Skeleton = () => {
  return (
    <div className="flex w-full pr-4 lg:w-6/12">
      <div className="w-6/12">
        <Skeleton variant="rounded" height={100} className="mb-2 w-full" />
        <Skeleton variant="rounded" height={20} className="w-full" />
        {/* <Typography variant="body2">출연 : {props.actor.join(", ")}</Typography> */}
      </div>
      <div className="w-6/12 pl-4">
        <Skeleton variant="rounded" height={30} className="mb-2 w-full" />
        {/* <Typography variant="h6">{props.title}</Typography> */}
        <Skeleton variant="rounded" height={20} className="w-full" />
        {/* <small>방영일 : {props.air_date}</small> */}
      </div>
    </div>
  );
};
