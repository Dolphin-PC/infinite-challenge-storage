"use client";
import { getEpisodeInfo } from "@/app/lib/firestore";
import { EpisodeInterface } from "@/app/lib/types";
import { Skeleton, Stack, Typography } from "@mui/material";
import useSWR from "swr";

export const EpisodeWrapper = ({
  season,
  search,
}: {
  season: string;
  search?: string;
}) => {
  const { data: episodeInfo, isLoading } = useSWR(
    { season, search },
    getEpisodeInfo,
  );

  return (
    <Stack flexWrap="wrap" direction="row" rowGap={1} className="w-full">
      {episodeInfo?.map((episode, i) => {
        return <EpisodeCard key={i} {...episode} />;
      })}
    </Stack>
  );
};

const EpisodeCard = (props: EpisodeInterface) => {
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
};

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
EpisodeCard.Skeleton = EpisodeCard_Skeleton;
