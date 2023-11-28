"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Skeleton,
  Stack,
  ToggleButton,
  Typography,
} from "@mui/material";
import { DataType, MemeLifeInterface } from "../lib/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getMemeLife } from "../lib/firestore";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useSpyScroll } from "../lib/hooks";
import NothingSearch from "./NothingSearch";

export function ImageCardWrapper({
  searchText,
}: {
  searchText: string | undefined;
}) {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["meme_life", searchText],
    queryFn: ({ pageParam = 0 }) => getMemeLife(searchText, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => lastPage.page.nextPage,
    staleTime: 1000 * 60 * 60,
  });

  const { isBottom } = useSpyScroll("layout");

  const fetchMore = () => {
    if (hasNextPage && isBottom) fetchNextPage();
  };
  useEffect(() => fetchMore(), [isBottom]);

  let totalCnt = data?.pages[0].page.totalCnt;

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
        {isFetching ? (
          <ImageCard.Skeleton count={10} />
        ) : (
          data?.pages.map(({ data }) => {
            return data.map((d) => <ImageCard {...d} key={d.key} />);
          })
        )}
      </Stack>
    </div>
  );
}

export default function ImageCard(props: MemeLifeInterface) {
  return (
    <Card className="w-5/12 md:w-3/12">
      <CardMedia image={props.img_src} sx={{ height: 200 }} />
      <CardContent>
        {props.tag.map((tag) => (
          <Chip key={tag} label={tag} size="small" />
        ))}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export function ImageCardSkeleton({ count = 3 }: { count: number }) {
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
}
ImageCard.Skeleton = ImageCardSkeleton;
