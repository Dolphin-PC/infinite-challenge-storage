"use client";
import { getEpisodeInfo } from "@/app/lib/firestore";
import { EpisodeInterface } from "@/app/lib/types";
import { Skeleton, Stack, Typography } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { useInfiniteQueryOptions } from "@/app/lib/util";
import { useSpyScroll } from "@/app/lib/hooks";
import { memo, useEffect, useMemo } from "react";
export const EpisodeWrapper = ({
  season,
  search,
}: {
  season: string;
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
    ...useInfiniteQueryOptions,
  });

  const { isBottom, setIsBottom } = useSpyScroll(`layout`);
  useEffect(() => {
    if (hasNextPage && isBottom) {
      fetchNextPage();
      setIsBottom(false);
    }
  }, [isBottom]);

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
          return <EpisodeCard key={i} {...epi} />;
        })}
    </Stack>
  );
};

const EpisodeCard = memo((props: EpisodeInterface) => {
  return (
    <div className="flex w-full pr-4 lg:w-6/12">
      <div className="w-6/12">
        <Skeleton variant="rounded" height={100} className="mb-2 w-full" />
        <Typography variant="body2">출연 : {props.actor.join(", ")}</Typography>
      </div>
      <div className="w-6/12 pl-4">
        <Typography variant="h6">{props.title}</Typography>
        <small>방영일 : {props.air_date}</small>
      </div>
    </div>
  );
});
EpisodeCard.displayName = "EpisodeCard";

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
