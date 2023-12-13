"use client";
import { getEpisodeInfo } from "@/app/lib/firestore";
import { EpisodeInterface, SeasonType } from "@/app/lib/types";
import { Paper, Skeleton, Stack, Typography } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSpyScroll } from "@/app/(front-end)/lib/hooks";
import { memo, useEffect } from "react";
import Image from "next/image";
import { Divider_2_4 } from "@/app/(front-end)/components/Dividers";
export const EpisodeWrapper = ({
  season,
  search,
}: {
  season: SeasonType;
  search?: string;
}) => {
  const {
    data: episodeInfo,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["episode_info", season, search],
    queryFn: ({ pageParam = 0 }) => getEpisodeInfo(season, search, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => lastPage.page.nextPage,
    staleTime: 1000 * 60 * 60,
  });

  const { isBottom, setIsBottom } = useSpyScroll(`layout`);
  useEffect(() => {
    if (hasNextPage && isBottom) {
      fetchNextPage();
      setIsBottom(false);
    }
  }, [isBottom, fetchNextPage, setIsBottom, hasNextPage]);

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
      {episodeInfo?.pages
        .flatMap((ele) => ele.episodeInfo)
        .map((epi, i) => {
          return <EpisodeCard key={i} data={epi} />;
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
            alt={data.key}
          />
          {/* <Skeleton variant="rounded" height={100} className="mb-2 w-full" /> */}
        </div>
        <div className="w-6/12 pl-4">
          <Typography variant="h6">{data.title}</Typography>
          <Typography variant="subtitle2">
            방영일 : {data.air_date}, {data.air_time}
          </Typography>
          <Divider_2_4 />
          <Typography className="line-clamp-4">{data.desc}</Typography>
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
