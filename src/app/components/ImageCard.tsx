"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  ToggleButton,
  Typography,
} from "@mui/material";
import { DataType } from "../lib/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getMemeLife } from "../lib/firestore";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useSpyScroll } from "../lib/hooks";

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

  return (
    <div>
      <Stack
        gap={5}
        flexWrap="wrap"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {data?.pages.flat().map(({ data }) => {
          return data.map((d) => <ImageCard key={d.title} {...d} />);
        })}
      </Stack>
      {/* <Button hidden={true} fullWidth variant="outlined" onClick={fetchMore}>
        LOAD MORE
      </Button> */}
    </div>
  );
}

export default function ImageCard(props: DataType) {
  return (
    <Card className="w-3/12">
      <CardMedia
        sx={{ height: 200 }}
        image={props.img_src}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
